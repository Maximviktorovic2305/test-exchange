<script lang="ts" setup>
	import { ref, toRefs } from 'vue'

	interface Props {
		currList: Record<string, number>
	}
	const props = defineProps<Props>()
	const { currList } = toRefs(props)

	const emit = defineEmits(['getCurrency'])

	const mainCurrency = ref('USD')
	const secondaryCurrency = ref('RUB')
	const mainCurrencyValue = ref(0)
	const secondaryCurrencyValue = ref(0)

	function getMainCurrency(mainCurrency: string) {
		emit('getCurrency', mainCurrency)
		mainCurrencyValue.value = secondaryCurrencyValue.value = 0
		console.log(currList.value)
	}
	function getResultOfExchange(event: any, currency: any) {
		if (currency === 'mainCurrency') {
			mainCurrencyValue.value = event.target.value
			secondaryCurrencyValue.value =
				event.target.value * currList.value[secondaryCurrency.value]
		} else {
			secondaryCurrencyValue.value = event.target.value
			mainCurrencyValue.value =
				event.target.value / currList.value[secondaryCurrency.value]
		}
	}
	function getSelectedResult(value: number) {
		secondaryCurrencyValue.value =
			value * currList.value[secondaryCurrency.value]
	}
</script>

<template>
	<div class="container">
		<h2 class="sub-title">Выберите ввалюту для обмена</h2>
		<form class="exchange-form">
			<div class="active-currency">{{ mainCurrency }}</div>
			<div class="main-curr-wrapper">
				<select v-model="mainCurrency" @change="getMainCurrency(mainCurrency)">
					<option
						v-for="(key, currName) of currList"
						:value="currName"
						:key="currName">
						{{ currName }}
					</option>
				</select>
				<input
					@input="getResultOfExchange($event, 'mainCurrency')"
					:value="mainCurrencyValue"
					placeholder="Enter value"
					type="number" />
			</div>
			<div class="active-currency">{{ secondaryCurrency }}</div>
			<div class="secondary-curr-wrapper">
				<select
					v-model="secondaryCurrency"
					@change="getSelectedResult(mainCurrencyValue)">
					<option disabled :value="secondaryCurrency">
						{{ secondaryCurrency }}
					</option>
					<option
						v-for="(key, currName) of currList"
						:value="currName"
						:key="currName">
						{{ currName }}
					</option>
				</select>
				<input
					@input="getResultOfExchange($event, 'secondaryCurrency')"
					:value="secondaryCurrencyValue"
					placeholder="Enter value"
					type="number" />
			</div>
		</form>
	</div>
</template>

<style scoped>
	.sub-title {
		color: #656565;
		font-size: 16px;
		margin: 20px 0;
	}

	.exchange-form {
		background: #48484a;
		box-shadow: 2px 2px 4px #78787a;
		border-radius: 4px;
		padding: 20px;
	}

	.active-currency {
		color: antiquewhite;
	}

	.main-curr-wrapper,
	.secondary-curr-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.main-curr-wrapper select,
	.secondary-curr-wrapper select {
		outline: none;
		width: 30%;
		height: 30px;
		border-radius: 4px;
		margin-bottom: 15px;
		padding-left: 5px;
	}

	.main-curr-wrapper input,
	.secondary-curr-wrapper input {
		outline: none;
		width: 50%;
		height: 30px;
		border-radius: 4px;
		margin-bottom: 15px;
		padding-left: 7px;
	}
</style>
