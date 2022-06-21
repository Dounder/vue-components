<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'src/stores/store'
import { ItemSkeleton, SkeletonCode } from 'src/modules/shared/components'
import { Blog01 } from '../components'
import { BlogScript01 } from '../scripts'

const store = useStore()
onMounted(() => store.setPageTitle('Dcode - Cards'))
</script>

<template>
	<q-page padding>
		<ItemSkeleton title="MODERN TEXT DECORATION WITH CSS BOX-DECORATION-BREAK">
			<template v-slot:body>
				<Blog01 />
			</template>

			<template v-slot:code>
				<SkeletonCode
					:template="BlogScript01.template"
					:script="BlogScript01.script"
					:style="BlogScript01.style"
				/>
			</template>
		</ItemSkeleton>
	</q-page>
</template>

<style lang="scss" scoped>
@import 'src/css/mixins.scss';
</style>
