<script lang="ts">
export default { name: 'SkeletonMain' }
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import SkeletonHeader from './SkeletonHeader.vue'
import SkeletonCode from './SkeletonCode.vue'

const splitterModel = ref(50)
</script>

<template>
	<q-card class="skeleton" flat dark>
		<SkeletonHeader />
		<q-separator spaced inset dark />
		<q-splitter v-model="splitterModel" :limits="[50, 100]" reverse class="splitter" separator-class="bg-grey">
			<template v-slot:before>
				<section class="flex flex-center">
					<slot name="body" />
				</section>
			</template>

			<template v-slot:separator>
				<q-btn fab-mini color="secondary" size="lg" icon="drag_indicator" />
			</template>

			<template v-slot:after>
				<SkeletonCode />
			</template>
		</q-splitter>
	</q-card>
</template>

<style lang="scss" scoped>
.skeleton {
	width: 95%;
	height: 35rem;
	background: $medium;
	margin: 0 auto 2rem;
}
.splitter {
	width: 100%;
	height: calc(100% - 5rem);
	padding: 1rem;
}
</style>
