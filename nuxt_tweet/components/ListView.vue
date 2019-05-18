<template>
  <section>
    <div>
      <ListItem v-for="tweet in tweets" :tweet="tweet"></ListItem>
    </div>
  </section>
</template>

<script>
  import ListItem from './ListItem'

  export default {
    name: "ListView",
    props: {
      tweets: Array,
      count: Number,
      edit: Boolean
    },
    components: {
      ListItem
    }
  }
</script>

<style>

</style>
