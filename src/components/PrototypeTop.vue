<template>
	<div class="navi">
		<h1>{{ TITLE }}</h1>
		<p>{{ CHECKEDNAME }}</p>
		<ul>
			<li v-for="list in THEME" :key="list">
				<label :for="list.title">{{ list.title }}</label>
				<input
					type="radio"
					name="theme"
					id="theme"
					value=""
					:checked="list.check"
					v-model="CHECKEDNAME"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'PrototypeTop',

	data() {
		return {
			TITLE: 'Movie Reservation',

			THEME1: 'DARK',
			THEME: [
				{ title: 'DARK', check: 'checekd' },
				{ title: 'WHITE', check: '' },
			],
			CHECKEDNAME: [],
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
