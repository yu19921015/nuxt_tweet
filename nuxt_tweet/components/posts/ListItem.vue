<template>
  <section class="list-item">
    <div class="list-item__post">
      <div><span>title</span>: <span>{{post.title}}</span></div>
      <div><span>content</span>: <span>{{post.content}}</span></div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ListItem",
    props: {
      post: Object
    }
  }
</script>

<style>
  .list-item__post {
    border: solid black 2px;
    margin-bottom: 2px;
  }
</style>
