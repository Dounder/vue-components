<script lang="ts">
export default { name: 'Blog-01' }
</script>
<script setup lang="ts">
const today = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
</script>

<template>
	<article class="card">
		<figure class="card-img">
			<img src="https://picsum.photos/200/300" alt="Background image" />
		</figure>
		<section class="card-body">
			<time class="card-date">{{ today }}</time>
			<p class="card-text"><span>This little piggy went to market</span></p>
		</section>
	</article>
</template>

<style lang="scss" scoped>
.card {
	width: 35rem;
	height: 20rem;
	background: #fafafa;
	border-radius: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #313029;
	box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.1);
	position: absolute;
	&-img {
		width: 40%;
		height: 100%;
		margin: 0;
		padding: 1rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;
			overflow: hidden;
		}
	}
	&-body {
		width: 60%;
		height: 100%;
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		color: #313029;
	}
	&-date {
		font-size: 0.8rem;
		margin-bottom: 0;
	}
	&-text {
		max-width: 95%;
		font-size: 2rem;
		line-height: 1.4;
		padding: 0 5px;
		font-weight: 600;
		span {
			box-decoration-break: clone;
			background-image: linear-gradient(90deg, #ffef7e, #b7f9e9);
			background-size: 100% 30%;
			background-repeat: no-repeat;
			background-position: 0 85%;
			margin: 0 -5px;
		}
	}
}
</style>
