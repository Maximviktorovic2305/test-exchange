<script lang="ts" setup>
	import axios from 'axios'
	import { onMounted, ref } from 'vue'

	const mainCurrency = ref('RUB')
	const currencyList = ref({})
	const listCurrencyOption = ref<{ value: string }[]>([
		{ value: 'RUB' },
		{ value: 'USD' },
		{ value: 'EUR' },
		{ value: 'KZT' },
		{ value: 'BRL' },
		{ value: 'IDR' },
	])
	const currencyForReq = ref(['RUB', 'USD', 'EUR', 'KZT', 'BRL', 'IDR'])

	function getListCurrency(curr: string, currList: string[]) {
		axios
			.get(
				`https://min-api.cryptocompare.com/data/price?fsym=${curr}&tsyms=${currList}`,
			)
			.then(data => {
				currencyList.value = data.data
			})
	}

	function getMainCurrency(e: Event) {
		const { value } = e.target as HTMLInputElement
		getListCurrency(value, currencyForReq.value)
	}

	onMounted(() => {
		getListCurrency(mainCurrency.value, currencyForReq.value)
	})
</script>

<template>
	<div class="container">
		<h3 class="sub-title">Выберите актуальную валюту на сегодня</h3>
		<div class="exchange-rates-wrapper">
			<div class="rates-top-block">
				<select v-model="mainCurrency" @change="getMainCurrency">
					<option
						v-for="option of listCurrencyOption"
						:value="option.value"
						:key="option.value">
						{{ option.value }}
					</option>
				</select>
			</div>

			<div class="currency-list">
				<div v-for="(value, item) of currencyList" :key="item">
					<div class="list-item" v-if="item !== mainCurrency">
						{{ item }} - {{ value }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container {
		max-width: 500px;
		margin: 0 auto;
		padding-top: 50px;
	}

	.sub-title {
		color: #656565;
		font-size: 16px;
		margin-bottom: 20px;
	}

	.exchange-rates-wrapper {
		min-height: 215px;
		background-color: #48484a;
		box-shadow: 2px 2px 4px #78787a;
		border-radius: 4px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 30px;
	}

	.list-item {
		color: white;
		text-align: left;
		margin-bottom: 5px;
	}

	.exchange-rates-wrapper select {
		width: 30%;
		height: 30px;
		border-radius: 4px;
		padding-left: 5px;
		outline: none;
	}

	.rates-top-block {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 15px;
	}
</style>
