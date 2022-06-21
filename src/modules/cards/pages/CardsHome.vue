<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'src/stores/store'
import { ItemSkeleton } from 'src/modules/shared/components'

const store = useStore()
onMounted(() => store.setPageTitle('Dcode - Cards'))
</script>

<template>
	<q-page padding>
		<ItemSkeleton>
			<template v-slot:body> </template>
		</ItemSkeleton>
	</q-page>
</template>

<style lang="scss" scoped>
@import 'src/css/mixins.scss';
</style>
