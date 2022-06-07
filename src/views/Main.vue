<template>
	<Modalpopup ref="ModalPopup" BasicContent="" :LastButton="true" v-on:lastButton="CallBackFunction">
		<template #contents>
			<p>Popup contents text is not defined</p>
		</template>
		<template #lastButton>Next</template>
	</Modalpopup>

	<!-- <div @click="PopupOpen">중복할인 이벤트</div> -->

	<section class="wrap">
		<article ref="visual" class="content1">
			<h2>CONST</h2>
			<h3>구축 진행 중입니다<br />빠른 시일내에 찾아 뵙겠습니다<br /><br />2022.06.20 open</h3>
		</article>
	</section>
</template>

<script>
import Modalpopup from '@/components/Popup.vue';
export default {
	name: 'Main',
	components: {
		Modalpopup,
	},

	data() {
		return {
			//isActive: false,
		};
	},

	methods: {
		CallBackFunction: function () {
			//console.log('별도기능');
		},

		PopupOpen: function () {
			this.$refs.ModalPopup._f_initOpen();
		},
	},

	mounted() {},
};
</script>
<style lang="scss">
.wrap {
	height: 100vh;
	.content {
		&1 {
			height: 100%;
			color: #c8c3c0;
			font-size: 10vw;

			h3 {
				font-size: 5.5vw;
				font-weight: normal;
				text-align: center;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			}
		}
	}
}
</style>
