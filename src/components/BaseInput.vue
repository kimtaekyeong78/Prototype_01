<template>
	<div class="input">
		<dl class="inputWrap">
			<dt>
				<label :for="name" class="titleLable">{{ label }}</label>
			</dt>
			<dd>
				<input
					:name="name"
					:value="inputValue"
					:placeholder="placeholder"
					:id="name"
					class="input"
					:class="className"
					:type="type"
					v-model="checkedNames"
					:style="{ width: width + 'px' }"
					@input="handleChange"
					@blur="handleBlur"
				/>
			</dd>
			<h1>{{ checkedNames }}</h1>
		</dl>
	</div>
</template>

<script>
export default {
	name: 'Input',
	props: {
		width: Number,
		className: {
			type: String,
		},
		placeholder: {
			type: String,
		},
		type: {
			type: String,
			default: '',
		},
		value: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			TITLE: 'Movie Reservation',
		};
	},
	mounted() {},
};
</script>

<style scoped lang="scss">
.navi {
	width: 100%;
	background: #1a1a1a;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;

	h1 {
		font-size: 14px;
	}
}

.inputWrap {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: baseline;

	&.noLabel {
		dt {
			display: none;
		}

		input:after {
			content: 'V';
		}
	}
}

// END: Base SelectBox Style : To-Be > baseInput.vue move

// START: Base Input Style : To-Be > baseInput.vue move
span[role='alert'] {
	display: block;
}
input {
	height: 28px;
	padding: 3px 10px;
	border-radius: 1px;
	border: solid 1px #5f5f5f;
	background-color: #171a1c;
	font-size: 12px;
	color: #b4b4b4;
	background-size: 12px 12px;
	transition: all 0.2s ease;
	&:hover {
		border: solid 1px #787878;
	}

	&:focus {
		border-radius: 1px;
		border: solid 1px #619be3;
		color: #fff;
	}

	&[disabled] {
		border: solid 1px #3a3a3a;
		background-color: #202224;
		color: #6e6e6e;
	}

	&[readonly] {
		border: solid 1px #3a3a3a;
		background-color: #202224;
		color: #c8c8c8;
	}

	// Base Radio Style
	&[type='radio'] {
		width: 15px;
		height: 15px;
		margin-right: 8px;
	}

	// Base Number Style
	&[type='number'] {
		letter-spacing: 1px;
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
}
</style>
