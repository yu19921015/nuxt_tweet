export const state = () => ({
  posts: []
});

export const getters = {
  posts: (state) => state.posts
};

export const mutations = {
  clearPosts(state) {
    state.posts = [];
  },
  addPost(state, post) {
    state.posts.push(post);
  },
  addPosts(state, postArray) {
    state.posts.push(...postArray);
  },
  updatePost(state, post) {
    let index;
    state.posts.forEach((p, i) => {
      if (p.id === post.id) {
        index = i;
      }
    });
    state.posts[index] = post;
  }
};

export const actions = {
  async fetchPost({commit}, postId) {
    return await this.$axios.$get(`/posts/${postId}.json`);
  },
  async fetchPosts({commit}) {
    const posts = await this.$axios.$get("/posts.json");
    const postArray = Object.entries(posts).map(post => {
      return post[1];
    });
    commit("clearPosts");
    commit("addPosts", postArray);
  },
  async createPost({commit}, {payload}) {
    const postId = (await this.$axios.$post("/posts.json", {payload})).name;
    const post = {id: postId, ...payload};
    await this.$axios.$put(`/posts/${postId}.json`, post);
    commit("addPost", post);
  },
  async updatePost({commit}, {payload}) {
    const editingPost = {...payload};
    await this.$axios.$put(`/posts/${editingPost.id}.json`, editingPost);
    commit("updatePost", editingPost);
  }
};
