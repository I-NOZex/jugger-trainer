import { useFirestore } from '@vueuse/firebase/useFirestore';
import { useAuth } from '@vueuse/firebase/useAuth';
import {
    collection,
    endAt,
    getDocs,
    getDocsFromServer,
    limit,
    limitToLast,
    orderBy,
    query,
    startAfter,
    startAt
} from 'firebase/firestore';

const postsLimit = 9;

export const useExerciseStore = defineStore('exercise', {
    state: () => ({
        exercises: [],
        userData: null,
        loading: false,
        firstPageId: null,
    }),
    getters: {
        getExercises: (state) => state.exercises,

        lastExerciseFromPage: (state) => state.exercises && state.exercises[state.exercises.length - 1],
        firstExerciseFromPage: (state) => state.exercises && state.exercises[0],
        getHasPreviousPage: (state) => state.firstExerciseFromPage?.eid !== state.firstPageId
    },
    actions: {
        async fetchData(query) {
            this.loading = true;

            const docsSnap = await getDocs(query);
            const docs = [];
            docsSnap.forEach(doc => {
                docs.push(doc.data());
            })
        
            this.loading = false;
            return docs;
        },

        async fetch() {
            const nuxtApp = useNuxtApp()
            const postsQuery = query(
                    collection(nuxtApp.$firestore, 'exercises'),
                    orderBy('created', 'desc'),
                    limit(postsLimit)
                
            );
            this.$patch({ exercises: await this.fetchData(postsQuery) });
            this.firstPageId = this.exercises[0].eid;
        },

        async fetchPreviousPage() {
            if(!this.getHasPreviousPage) return; 
            const nuxtApp = useNuxtApp()
            const postsQuery = query(
                    collection(nuxtApp.$firestore, 'exercises'),
                    orderBy('created', 'desc'),
                    endAt(this.firstExerciseFromPage.created),
                    limitToLast(postsLimit),

            );

            this.$patch({ exercises: await this.fetchData(postsQuery) });

        },        

        async fetchNextPage() {
            const nuxtApp = useNuxtApp()
            const postsQuery = query(
                    collection(nuxtApp.$firestore, 'exercises'),
                    orderBy('created', 'desc'),
                    startAt(this.lastExerciseFromPage.created),
                    limit(postsLimit),

            );

            this.$patch({ exercises: await this.fetchData(postsQuery) });

        }
    }
});
