<script setup lang="js">
import { useControllerStore } from '@/stores/controller'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const controllerStore = useControllerStore()
const settingsStore = useSettingsStore()

const { currDay, currGame } = storeToRefs(controllerStore)
// const { gamesPerDay, eventDates } = storeToRefs(settingsStore)
</script>

<template>
  <div class="tabs-container">
    <div class="dates-wrapper">
      <button
        class="tab day"
        v-for="(date, index) in controllerStore.eventDates"
        :key="`${day}-${index}`"
      >
        {{ date }}
      </button>
    </div>
    <div class="games-wrapper">
      <button
        class="tab game"
        v-for="(_, index) in controllerStore.gameCount"
        :key="`game-${index}`"
      >
        GAME {{ index }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
