import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  // Game Day Number
  // Game Number
  // Game Status - Unavailable, Live, Ready To Play, Not Setup, Do an object with a number reference for the status.
  // Team Names

  const gameDay = ref(0)
  const gameNumber = ref(0)
  const gameStatus = 0
  const teamNames = ref({})
  const currentStep = ref(0)
  const questionData = ref({})
  const currQuestion = ref({})

  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }

  return { currentStep, questionData, currQuestion }
})
