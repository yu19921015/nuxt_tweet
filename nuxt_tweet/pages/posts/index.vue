<template>
  <section>
    <ListView :posts="posts"></ListView>
  </section>
</template>

<script>
  import ListView from "~/components/posts/ListView.vue"
  import {mapGetters} from "vuex"

  export default {
    components: {
      ListView
    },
    async asyncData({store}) {
      await store.dispatch("posts/fetchPosts");
    },
    computed: {
      ...mapGetters("posts", ["posts"])
    }
  }
</script>

<style>

</style>
