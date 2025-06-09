import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  // Question Timer
  // Steal Timer
  // Available Team Names
  // Number of games per day
  // Number of days

  // Events
  // Date
  // Games

  const eventDates = ref(['JULY 4', 'JULY 5', 'JULY 6'])
  const gamesPerDay = ref(4)

  return { eventDates, gamesPerDay }
})
