
import {
    collection,
    endAt,
    getDocs,
    limit,
    limitToLast,
    orderBy,
    query,
    startAt
} from 'firebase/firestore';

export const useTagStore = defineStore('tag', {
    state: () => ({
        tags: [],
        loading: false,
    }),
    getters: {
        getTags: (state) => state.tags,
        getTagNames: (state) => state.tags.map(t => t.tag),
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
            console.log('fetching tags...')
            const nuxtApp = useNuxtApp()
            const tagsQuery = collection(nuxtApp.$firestore, 'tags');
            this.$patch({ tags: await this.fetchData(tagsQuery) });
        },
    }
});
