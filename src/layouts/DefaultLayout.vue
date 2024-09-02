<script lang="ts" setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

</script>

<template>
	<div class="min-h-screen h-full flex flex-col justify-between">
		<Header />
		<main class="max-w-[800px] mx-auto w-full flex-1 px-5">
			<router-view />
		</main>
		<Footer />
	</div>
</template>
