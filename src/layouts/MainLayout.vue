<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStore } from 'src/stores/store'
import { menuItems } from 'src/helpers/layoutMenuItems'

const store = useStore()
const { push } = useRouter()
const drawer = ref(true)
const { getPageTitle } = storeToRefs(store)

const goToHome = () => push({ name: 'home' })

onMounted(() => store.setPageTitle('Dcode components'))
onUpdated(() => store.setPageTitle('Dcode components'))
</script>

<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="header" elevated>
      <q-toolbar>
        <q-toolbar-title @click="goToHome"> {{ getPageTitle }} </q-toolbar-title>
        <q-img
          src="https://res.cloudinary.com/dj6nxwrae/image/upload/v1651285442/Dcode/dcode_dark_haksfw.svg"
          alt="Dcode brand"
          fit="contain"
          height="3rem"
          width="3.5rem"
          class="absolute-center"
          @click="goToHome"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500">
      <q-scroll-area class="fit drawer-list">
        <q-list>
          <q-item
            v-for="({ icon, title, path }, index) in menuItems"
            :key="index"
            :to="{ name: path }"
            :exact="true"
            exact-active-class="active"
          >
            <q-item-section top avatar>
              <q-icon :name="icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.header {
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: center;
  background: $medium;
  & .q-img:hover {
    cursor: pointer;
  }
  & .q-toolbar__title {
    max-width: fit-content;
    padding: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
}
.active {
  background: rgba($light, 0.2);
  color: $accent;
  & .q-item__label {
    color: $accent;
  }
  & .q-icon {
    color: $accent;
  }
}
.q-item {
  border-radius: 1rem;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.8rem 1rem;
  color: $secondary;
}
.q-icon {
  font-size: 2rem;
  color: $secondary;
}

.drawer-list {
  background: $medium;
}
</style>
