<template>
	<transition name="fade">
		<div class="popupWrap" :class="{ openPopup: isActive }" v-if="isActive">
			<div class="popup">
				<button type="button" @click="_f_initClose">X</button>

				<div class="content">
					<h3>{{ popupTitle }}</h3>
					<p v-if="BasicContent !== ''">{{ BasicContent }}</p>
					<slot v-else name="contents"></slot>
				</div>

				<div class="buttonWrap">
					<button type="button" @click="_f_initClose">
						<span>Cancle</span>
					</button>
					<button type="button" @click="_f_initLastButton" v-if="LastButton == true">
						<slot name="lastButton"></slot>
					</button>

					<slot name="buttonFinish"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Popup',
	props: {
		LastButton: {
			type: Boolean,
			default: false,
		},
		popupTitle: {
			type: String,
			default: 'Popup Title',
		},
		BasicContent: String,
	},

	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		_f_initLastButton: function () {
			this.$emit('lastButton');
		},

		_f_initClose: function () {
			this.isActive = !this.isActive;
		},

		_f_initOpen: function () {
			this.isActive = !this.isActive;
		},
	},
	mounted() {},
};
</script>

<style scoped lang="scss">
.fade-enter-active {
	animation: fade-in 0.3s;
}
.fade-leave-active {
	animation: fade-in 0.3s reverse;
}
@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.popupWrap {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.8);

	display: flex;
	justify-content: center;
	align-items: center;

	.popup {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 80%;
		background: #fff;
		box-shadow: 0 0 1vw 1vw rgba(0, 0, 0, 0.2);
		padding: 5vw;
	}
}
</style>
