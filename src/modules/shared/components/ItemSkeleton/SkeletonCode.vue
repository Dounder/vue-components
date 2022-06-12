<script lang="ts">
import { ref } from 'vue'
export default { name: 'SkeletonCode' }
</script>
<script setup lang="ts">
const tab = ref('template')

const codeTest = ref(`<q-card class="card">
  <img src="https://cdn.quasar.dev/img/mountains.jpg" />
  <q-card-section>
    <div class="text-h6">Our Changing Planet</div>
    <div class="text-subtitle2">by John Doe</div>
  </q-card-section>
  <q-card-section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </q-card-section>
</q-card>`)
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
		<q-tab name="template" label="Template" />
		<q-tab name="script" label="Script" />
		<q-tab name="style" label="Style" />
	</q-tabs>

	<q-separator />

	<q-tab-panels v-model="tab" animated class="tabs-panel">
		<q-tab-panel name="template" class="tabs-panel__item">
			<highlightjs autodetect :code="codeTest" class="tabs-panel__code" />
		</q-tab-panel>

		<q-tab-panel name="script" class="tabs-panel__item">
			<highlightjs autodetect :code="codeTest" class="tabs-panel__code" />
		</q-tab-panel>

		<q-tab-panel name="style" class="tabs-panel__item">
			<highlightjs autodetect :code="codeTest" class="tabs-panel__code"
		/></q-tab-panel>
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
