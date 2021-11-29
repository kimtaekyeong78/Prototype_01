<template>
	<PrototypeTop />
	<router-view />
</template>

<script>
// @ is an alias to /src
import PrototypeTop from '@/components/PrototypeTop.vue';

export default {
	name: 'Home',
	components: {
		PrototypeTop,
	},
};
</script>
<style lang="scss">
body {
	padding: 0;
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
