<script lang="ts">
import { onBeforeMount, ref, toRefs } from 'vue'
export default { name: 'SkeletonCode' }
</script>
<script setup lang="ts">
const tab = ref('template')

const props = defineProps({
	template: { type: String, required: false },
	script: { type: String, required: false },
	style: { type: String, required: false },
})

const { script, template, style } = toRefs(props)

onBeforeMount(() => {
	if (!script?.value && !template?.value && !style?.value) tab.value = 'code'
})
</script>

<template>
	<q-tabs
		v-model="tab"
		dense
		class="text-grey tabs"
		active-color="accent"
		indicator-color="accent"
		align="justify"
		narrow-indicator
	>
		<template v-if="template && script && style">
			<q-tab name="template" label="Template" v-if="template" />
			<q-tab name="script" label="Script" v-if="script" />
			<q-tab name="style" label="Style" v-if="style" />
		</template>
		<q-tab name="code" label="No code" v-else />
	</q-tabs>

	<q-separator />

	<q-tab-panels v-model="tab" animated class="tabs-panel">
		<q-tab-panel name="code" class="tabs-panel__item">
			<article class="tabs-panel__code flex flex-center">
				<p class="text-h1">No code</p>
			</article>
		</q-tab-panel>

		<q-tab-panel name="template" class="tabs-panel__item">
			<highlightjs autodetect :code="template" class="tabs-panel__code" />
		</q-tab-panel>

		<q-tab-panel name="script" class="tabs-panel__item">
			<highlightjs autodetect :code="script" class="tabs-panel__code" />
		</q-tab-panel>

		<q-tab-panel name="style" class="tabs-panel__item">
			<highlightjs autodetect :code="style" class="tabs-panel__code" />
		</q-tab-panel>
	</q-tab-panels>
</template>

<style lang="scss" scoped>
@import 'src/css/mixins.scss';

.tabs {
	height: 2.5rem;
	overflow: hidden;
	&-panel {
		height: calc(100% - 2.6rem);
		background: transparent;
	}
	&-panel__code {
		margin: 0;
		height: 100%;
		border-radius: 10px;
		overflow: hidden;
	}
}
</style>
