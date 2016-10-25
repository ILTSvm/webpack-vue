<template>
  <div id="app">
    <div class="list">your list of items</div>
    <!-- add the component right after your list -->
    <mugen-scroll :handler="fetchData" :should-handle="!loading">
      loading...
    </mugen-scroll>
  </div>
</template>

<script>
  import MugenScroll from 'vue-mugen-scroll'
  export default {
    data() {
      // do not run handler when it's loading
      return {loading: false}
    },
    methods: {
      fetchData() {
        this.loading = true
        // ... the code you wanna run to fetch data
        this.loading = false
      }
    },
    components: {MugenScroll}
  }
</script>