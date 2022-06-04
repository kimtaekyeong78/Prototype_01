<template>
	<section ref="mainWrap" :class="classObject">
		<TopNavi />
		<router-view />
	</section>
</template>

<script>
// @ is an alias to /src
import TopNavi from '@/components/Topnavi.vue';

export default {
	name: 'Home',
	components: {
		TopNavi,
	},
	data() {
		return {
			isActive: false,
		};
	},
	methods: {},
	computed: {},
	mounted() {
		setTimeout(() => {
			this.$refs.mainWrap.classList.add('active');
			
		}, 1000);
	},
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
body {
	padding: 0;
	margin: 0;
	height: 100vh;
}

#app {
	font-family: 'Poiret One', cursive;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	background: #141514;

	> section {
		transition: all 0.3s ease-in;
		opacity: 0;

		&.active {
			opacity: 1;
		}
	}
}
</style>
