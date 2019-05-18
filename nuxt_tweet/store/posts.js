export const state = () => ({
  posts: []
});

export const getters = {
  posts: (state) => state.posts
};

export const mutations = {
  clearPosts(state) {
    state.posts = []
  },
  addPosts(state, postArray) {
    state.posts.push(...postArray)
  }
};

export const actions = {
  async fetchPosts({commit}) {
    const posts = await this.$axios.$get("/posts.json");
    const postArray = Object.entries(posts).map(post => {
      return post[1];
    });
    commit("clearPosts");
    commit("addPosts", postArray);
  }
}
