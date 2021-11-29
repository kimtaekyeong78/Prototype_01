<template>
	<div></div>
	<!-- v-on:emitTest="closePopup" -->
	<Modalpopup ref="ModalPopup" BasicContent="" :LastButton="true" v-on:lastButton="CallBackFunction">
		<template #contents>
			<p>Popup contents text is not defined</p>
		</template>
		<template #lastButton>Next</template>
	</Modalpopup>

	<div @click="PopupOpen">중복할인 이벤트</div>
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
			console.log('별도기능');
		},

		PopupOpen: function () {
			this.$refs.ModalPopup._f_initOpen();
		},
	},
};
</script>
<style lang="scss">
.main {
	height: 100vh;
}
</style>
