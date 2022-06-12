<script lang="ts">
import { ref } from 'vue'
export default { name: 'SkeletonBody' }
</script>
<script setup lang="ts">
import SkeletonCode from './SkeletonCode.vue'
import SkeletonPreview from './SkeletonPreview.vue'

const splitterModel = ref(50)
</script>

<template>
	<q-splitter v-model="splitterModel" :limits="[50, 100]" reverse class="splitter" separator-class="bg-grey">
		<template v-slot:before>
			<SkeletonPreview />
		</template>

		<template v-slot:separator>
			<q-btn fab-mini color="secondary" size="lg" icon="drag_indicator" />
		</template>

		<template v-slot:after>
			<SkeletonCode />
		</template>
	</q-splitter>
</template>

<style lang="scss" scoped>
.splitter {
	width: 100%;
	height: calc(100% - 5rem);
	padding: 1rem;
}
</style>
