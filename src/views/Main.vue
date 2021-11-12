<template>
	<div>test</div>
</template>

<script>
export default {
	name: 'Main',
	components: {},

	data() {
		return {
			ISACTIVE: false,
			MOVIELIST: [{}],
		};
	},

	methods: {
		isTest: function () {
			alert('test');
		},

		click() {
			this.isActive = !this.isActive;
			this.$refs.test.classList.add('test');
		},
	},
};
</script>
<style lang="scss">
.main {
	height: 100vh;
}
</style>
