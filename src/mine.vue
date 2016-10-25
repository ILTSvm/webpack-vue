<template>
	<div id="mine">
		<signup></signup>
	</div>
</template> 
<script>
import signup from './signup'
export default {
  name: 'detail',
  data(){
    return {
      
    }
  },
  methods: {
    
  },
  computed: {
  },
  components: {
    signup,
  },
  updated(){
  },
  beforeCreate(){
    
  }
}
</script>
<style lang="scss" scoped>
	@import "./styles/usage/core/reset.scss";
 #mine{
   height: 100%;
 }
</style>