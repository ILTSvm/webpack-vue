<template>
	<div id = "list">
		<goodlist></goodlist>
	</div>
</template>
<script>

import goodlist from './components/common/goodlist.vue'

export default {
	name:'list',
	components: {
   		goodlist
    },
	data(){
		return {
			
		}
	}
}
</script>