export const state = () => ({
  posts: []
})

export const getters = {
  posts: (state) => state.posts
}

export const mutations = {
  addPost(state, {post}) {
    state.posts.push(post)
  },
  clearPosts(state) {
    state.posts = []
  }
}

export const actions = {
  async fetchPosts({commit}) {
    const posts = await this.$axios.$get('/posts.json')
    commit('clearPosts')
    Object.entries(posts || [])
      .forEach(([id, item]) =>
        commit('addPost', {
          post: {
            ...item
          }
        })
      )
  },
  async publishPost({commit}, {payload}) {
    const post_id = (await this.$axios.$post('/posts.json', payload)).name
    const post = {...payload}
    const putData = {...payload}
    await this.$axios.$put(`/posts/${post_id}.json`, putData)
    commit('addPost', {post})
  }
}
