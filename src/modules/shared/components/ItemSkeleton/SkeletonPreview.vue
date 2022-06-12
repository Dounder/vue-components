<script lang="ts">
export default { name: 'SkeletonPreview' }
</script>
<script setup lang="ts"></script>

<template>
	<q-card class="card">
		<img src="https://cdn.quasar.dev/img/mountains.jpg" />
		<q-card-section>
			<div class="text-h6">Our Changing Planet</div>
			<div class="text-subtitle2">by John Doe</div>
		</q-card-section>
		<q-card-section> Lorem ipsum dolor sit amet, consectetur adipiscing elit </q-card-section>
	</q-card>
</template>

<style lang="scss" scoped>
.card {
	width: 20rem;
	height: fit-content;
	color: $dark;
	margin: auto;
}
</style>
