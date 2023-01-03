import {
    collection,
    endBefore,
    startAfter,
    getDocs,
    limit,
    limitToLast,
    orderBy,
    query,
    where,
} from 'firebase/firestore';

const postsLimit = 9;

export const useExerciseStore = defineStore('exercise', {
    state: () => ({
        exercises: [],
        loading: false,
        firstPageId: null,
        filters: {
            playersMin: null,
            exertionLevel: null
        }
    }),
    getters: {
        getExercises: (state) => state.exercises,

        //TODO: paginate based on the in memory set

        lastExerciseFromPage: (state) =>
            state.exercises && state.exercises[state.exercises.length - 1],
        firstExerciseFromPage: (state) => state.exercises && state.exercises[0],
        getHasPreviousPage: (state) =>
            state.firstExerciseFromPage?.eid !== state.firstPageId
    },
    actions: {
        async fetchData(query) {
            this.loading = true;

            const docsSnap = await getDocs(query);
            const docs = [];
            docsSnap.forEach((doc) => {
                docs.push(doc.data());
            });

            this.loading = false;
            return docs; //.sort((a, b) => b.created - a.created); //desc
        },

        async fetch() {
            const nuxtApp = useNuxtApp();

            const postsQuery = query(
                collection(nuxtApp.$firestore, 'exercises'),
                orderBy('created', 'desc'),
                limit(postsLimit)
            );

            this.$patch({ exercises: await this.fetchData(postsQuery) });
            this.firstPageId = this.exercises[0]?.eid;
            //this.fetchRemaining(nuxtApp);

        },


        /* FIXME: lets do the pagination client side, and request all the data, since FB is unable to handle a simple filter query.... */
        async fetchWithFilters() {
            const nuxtApp = useNuxtApp();

            const filters = [where('playersMin', '>=', 10)];

            const postsQuery = query(
                collection(nuxtApp.$firestore, 'exercises'),
                //orderBy('playersMin', 'asc'),
                where('playersMin', '>=', 8)
            );

           /*  const postsQuery = query(
                playersMinQuery,
                orderBy('created', 'desc'), // Order by 'created' in descending order
                limit(postsLimit)
            ); */

            const res = await this.fetchData(postsQuery);
            this.$patch({ exercises: res.sort((a, b) => b.created - a.created).slice(0, 9)});
            this.$patch({ exercises: res.sort((a, b) => b.created - a.created).slice(0, 9)});
            this.fetchRemaining();
        },

        async fetchRemaining(nuxtApp) {
            const postsQuery = query(
                collection(nuxtApp.$firestore, 'exercises'),
                orderBy('created', 'desc'),
                startAt(this.lastExerciseFromPage.created),
            );

            this.$patch({ exercises: [...this.exercises, ...await this.fetchData(postsQuery)] });

            /* .$patch((state) => {
                state.items.push({ name: 'shoes', quantity: 1 })
                state.hasChanged = true
              })
             */
        },

        async fetchPreviousPage() {
            if (!this.getHasPreviousPage) return;
            const nuxtApp = useNuxtApp();
            const postsQuery = query(
                collection(nuxtApp.$firestore, 'exercises'),
                orderBy('created', 'desc'),
                endBefore(this.firstExerciseFromPage.created),
                limitToLast(postsLimit)
            );

            this.$patch({ exercises: await this.fetchData(postsQuery) });
        },

        async fetchNextPage() {
            const nuxtApp = useNuxtApp();
            const postsQuery = query(
                collection(nuxtApp.$firestore, 'exercises'),
                orderBy('created', 'desc'),
                startAfter(this.lastExerciseFromPage.created),
                limit(postsLimit)
            );

            this.$patch({ exercises: await this.fetchData(postsQuery) });
        },

        mapTagNames(tagIds) {
            const tagStore = useTagStore();

            return tagIds?.map((id) => {
                const tag = tagStore.getTags.find((tag) => tag.tagID === id);
                return tag ? tag.tag : null;
            });
        }
    }
});
