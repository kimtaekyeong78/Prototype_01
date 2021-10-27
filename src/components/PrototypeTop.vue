<template>
	<div class="navi">top navi</div>
</template>

<script>
export default {
	name: 'PrototypeTop',

	mounted() {
		test();
		function test() {
			console.log('test');

			let t = 3;

			if (t == 1) {
				console.log('tes123');
			}
		}
	},
};
</script>

<style scoped lang="scss">
.navi {
	background: #333;
}
</style>
