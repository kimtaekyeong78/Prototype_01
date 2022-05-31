<template>
	<div class="main" :class="{ theme: isActive }">
		<button type="button" @click="click">test</button>
		<div ref="test" v-show="isActive">asdfasdfasdfasdf</div>
		<ul>
			<li v-for="item in list" :key="item">{{ item }}</li>
		</ul>

		<input type="text" v-model="message" />
		<div>{{ message }}</div>

		<input type="checkbox" id="checkbox" v-model="checked" />
		<label for="checkbox">{{ checked }}</label>

		<div id="example-3">
			<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
			<label for="jack">Jack</label>
			<input type="checkbox" id="john" value="John" v-model="checkedNames" />
			<label for="john">John</label>
			<input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
			<label for="mike">Mike</label>
			<br />
			<span>체크한 이름: {{ checkedNames }}</span>

			<input type="radio" id="aaa" value="asdf" v-model="checkedNames" />
			<label for="mike">Mike</label>
			<input type="radio" id="aaa2" value="asdf3" v-model="checkedNames" />
			<label for="mike">Mike</label>
		</div>

		<select v-model="selected">
			<option disabled value="">Please select one</option>
			<option>A</option>
			<option>B</option>
			<option>C</option>
		</select>
		<span>선택함: {{ selected }}</span>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},

	data: function () {
		return {
			isActive: false,
			message: '아싸라비아',

			checked: false,

			checkedNames: [],

			selected: '',

			list: ['바보다1', '바보다2', '바보다3'],
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
