<template>
	<div class="navi"></div>
</template>

<script>
export default {
	name: 'Topnavi',

	data() {
		return {};
	},
	methods: {
		bgColorObject: function () {
			this.isBgcolor = !this.isBgcolor;
			//테마컬러 버튼 활성 시 #APP에 Class theme 추가
			if (this.isBgcolor == true) {
				document.getElementById('app').classList.add('theme_white');
			} else {
				document.getElementById('app').classList.remove('theme_white');
			}
		},
	},
	mounted() {},
};
</script>

<style scoped lang="scss">
.navi {
	width: 100%;
	background: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	font-size: 14px;

	h1 {
		font-size: 14px;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;

		li {
			list-style: none;
		}
	}
}
</style>
