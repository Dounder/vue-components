<script lang="ts">
export default { name: 'SkeletonMain' }
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import SkeletonHeader from './SkeletonHeader.vue'

const props = defineProps({ title: { type: String, default: 'No title...' } })

const splitterModel = ref(50)
</script>

<template>
	<q-card class="skeleton" flat dark>
		<SkeletonHeader :title="props.title" />
		<q-separator spaced inset dark />
		<q-splitter v-model="splitterModel" :limits="[50, 100]" reverse class="splitter" separator-class="bg-grey">
			<template v-slot:before>
				<section class="flex flex-center full-height overflow-hidden">
					<slot name="body" />
				</section>
			</template>

			<template v-slot:separator>
				<q-btn fab-mini color="secondary" size="lg" icon="drag_indicator" />
			</template>

			<template v-slot:after>
				<slot name="code" />
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
