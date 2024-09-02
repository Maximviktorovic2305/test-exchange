<script lang="ts" setup>
	import axios from 'axios'
	import { onMounted, ref } from 'vue'
	import ExchangesForm from '../components/ExchangesForm.vue'

	const currencyList = ref({})
	const startExchangeList = ref(['RUB', 'USD', 'EUR', 'KZT', 'BRL', 'IDR'])

	function getCurrForExcahge(data: string) {
		getCurrency(data, startExchangeList.value)
	}
	function getCurrency(curr: string, currList: string[]) {
		axios
			.get(
				`https://min-api.cryptocompare.com/data/price?fsym=${curr}&tsyms=${currList}`,
			)
			.then(data => {
				currencyList.value = data.data
			})
	}

	onMounted(() => {
		getCurrency('USD', startExchangeList.value)
	})
</script>

<template>
	<ExchangesForm :currList="currencyList" @getCurrency="getCurrForExcahge" />
</template>
