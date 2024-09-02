<script lang="ts" setup></script>

<template>
	<footer class="wrapper">
		<div class="title">
			Тестовое задание сделано Переверзевым Максимом Викторовичем
		</div>
		<div class="links-wrapper">
			<span class="link-block"
				>Ссылка на мой GitHub:
				<a target="_blank" href="https://github.com/Maximviktorovic2305"
					><img class="img" src="/github.png" alt="github" /></a
			></span>
			<span
				>Мой сайт-портфолио:
				<a
					target="_blank"
					class="link"
					href="https://portfolio.telemost.online/"
					>portfolio.telemost.online</a
				></span
			>
		</div>
	</footer>
</template>

<style scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 12px 100px;
		border-top: 1px solid #d6cdcd;
	}

	.title {
		margin: 0 auto;
		padding-right: 10%;
		color: #656565;
		margin-bottom: 4px;
	}

	.links-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.link-block {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #656565;
	}
	.img {
		height: 20px;
		height: 20px;
		cursor: pointer;
	}

	.link {
		text-decoration: underline;
		color: #00bcd4;
		cursor: pointer;
	}
</style>
