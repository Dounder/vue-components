<script lang="ts">
export default { name: 'SkeletonMain' }
</script>
<script lang="ts" setup>
import SkeletonHeader from './SkeletonHeader.vue'
import SkeletonBody from './SkeletonBody.vue'
</script>

<template>
	<q-card class="skeleton" flat dark>
		<SkeletonHeader />
		<q-separator spaced inset dark />
		<SkeletonBody />
	</q-card>
</template>

<style lang="scss" scoped>
.skeleton {
	width: 95%;
	height: 35rem;
	background: $medium;
	margin: 0 auto 2rem;
}
</style>
