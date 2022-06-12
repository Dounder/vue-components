<script lang="ts">
export default { name: 'SkeletonHeader' }
</script>
<script setup lang="ts"></script>

<template>
	<q-card-section class="header">
		<section class="header-title">
			<p class="header-name">
				Fugiat aliqua tempor anim tempor est ullamco dolore consequat laboris sint ex magna aliquip aliquip.
				Veniam id duis consequat et in ex sit occaecat ad culpa voluptate excepteur consequat. Fugiat enim sint
				aute do aliqua adipisicing reprehenderit laborum incididunt in tempor minim cillum.
			</p>
		</section>
		<q-space />
		<q-btn flat round color="accent" class="q-mr-md">
			<q-tooltip anchor="center left" self="center right" class="bg-transparent text-overline text-accent">
				View on github
			</q-tooltip>
			<q-icon class="devicon-github-original"></q-icon>
		</q-btn>
	</q-card-section>
</template>

<style lang="scss" scoped>
$label-corner: 1rem;
.header {
	padding: 1rem 0 1rem 0;
	display: flex;
	align-items: center;
	height: 4rem;
	&-title {
		position: relative;
		width: 75%;
		&::after {
			content: '';
			position: absolute;
			inset: 0 0 0 calc(#{$label-corner} * -1);
			height: 100%;
			background: $primary;
			width: $label-corner;
			border-top-left-radius: 0.2rem;
		}
		&::before {
			content: '';
			position: absolute;
			inset: 100% 0 0 calc(#{$label-corner} * -1);
			height: 40%;
			background: darken($primary, 10%);
			width: $label-corner;
			clip-path: polygon(100% 0, 0 0, 100% 100%);
		}
	}
	&-name {
		background: $primary;
		margin: 0;
		padding: 0.5rem 1rem;
		width: fit-content;
		border-radius: 0 0.2rem 0.2rem 0;
		position: relative;
		font-size: 1rem;
		letter-spacing: 1px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
	}
}
</style>
