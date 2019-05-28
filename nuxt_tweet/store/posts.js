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
    let indexNo;
    state.posts.forEach((p, index) => {
      if (p.id === post.id) {
        indexNo = index;
      }
    })
    state.posts[indexNo] = post;
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
    const editingPost = {...payload.editingPost};
    const previousPost = {...payload.previousPost};
    const postId = editingPost.id;
    const presentPost = await this.$axios.$get(`/posts/${postId}.json`);
    if (presentPost.title === previousPost.title && presentPost.content === previousPost.content) {
      await this.$axios.$put(`/posts/${postId}.json`, editingPost);
      commit("updatePost", editingPost);
    } else {
      console.log("投稿がすでに編集されていたため、更新できませんでした。");
    }
  }
};
