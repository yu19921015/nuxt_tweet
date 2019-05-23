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
  modifyPost(state, post) {
    let indexNo;
    state.posts.forEach((p, index) => {
      if(p.id === post.id) {
        indexNo = index;
      }
    })
    state.posts[indexNo] = post;
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
  },
  async createPost({commit}, {payload}) {
    const postId = (await this.$axios.$post("/posts.json", {payload})).name;
    const post = {id: postId, ...payload};
    await this.$axios.$put(`/posts/${postId}.json`, post);
    commit("addPost", post);
  },
  async modifyPost({commit}, {payload}) {
    const post = {...payload};
    const postId = post.id;
    await this.$axios.$put(`/posts/${postId}.json`, post);
    commit("modifyPost", post);
  }
};
