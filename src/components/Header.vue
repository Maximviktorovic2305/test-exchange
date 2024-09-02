<script lang="ts" setup></script>

<template>
	<header class="wrapper">
		<router-link to="/">
			<img class="img" src="/logo.png" alt="" />
		</router-link>
		<div class="link-block">
			<router-link to="/" class="link">Главная</router-link>
			<router-link to="/convert" class="link">Конвертация</router-link>
		</div>
		<a
			target="_blank"
			class="link"
			href="https://docs.google.com/document/d/1AjLVCkX3PIHOQz50FIwu9ILZHyRc59fp/edit">
			Тестовое задание
		</a>
	</header>
</template>

<style scoped>
	.wrapper {
		padding: 20px 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #656565;
		box-shadow: 2px 2px 4px #78787a;
	}

	.img {
		height: 35px;
	}

	.link-block {
		display: flex;
		align-items: center;
		gap: 36px;
	}

	.link {
		color: #656565;
		text-transform: uppercase;
		opacity: 60%;
		font-weight: 500;
		transition: all 0.2s linear;
	}

	.link:hover {
		opacity: 90%;
	}
</style>
