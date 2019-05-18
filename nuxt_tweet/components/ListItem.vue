<template>
  <section class="listItem">
    <div class="listItem_tweet">
      <div><span>title</span>: <span>{{tweet.title}}</span></div>
      <div><span>content</span>: <span>{{tweet.content}}</span></div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ListItem",
    props: {
      tweet: Object,
      edit: Boolean
    }
  }
</script>

<style>
  .listItem_tweet {
    border: solid black 2px;
    margin-bottom: 2px;
  }
</style>
