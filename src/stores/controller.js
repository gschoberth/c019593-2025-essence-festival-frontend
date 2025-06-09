// Game Number
// Game Day

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useControllerStore = defineStore('controller', () => {
  // Will be retrieved and processed from the API
  const eventData = ref([
    {
      date: 'JULY 4',
      dayNum: 0,
      gameIds: [
        '3f91a0d2-6e6a-4a98-bc75-26c8f8d0ad27',
        'f4dbb712-58ee-46b8-bc03-78d10c2738a0',
        '1c769ffe-ec6f-43e0-9dfb-39424bc3e009',
        'f221a9de-77bc-4ad3-96b9-24859f1d3f2b',
      ],
    },
    {
      date: 'JULY 5',
      dayNum: 1,
      gameIds: [
        '3f91a0d2-6e6a-4a98-bc75-26c8f8d0ad27',
        'f4dbb712-58ee-46b8-bc03-78d10c2738a0',
        '1c769ffe-ec6f-43e0-9dfb-39424bc3e009',
        'f221a9de-77bc-4ad3-96b9-24859f1d3f2b',
      ],
    },
    {
      date: 'JULY 6',
      dayNum: 0,
      gameIds: [
        '3f91a0d2-6e6a-4a98-bc75-26c8f8d0ad27',
        'f4dbb712-58ee-46b8-bc03-78d10c2738a0',
        '1c769ffe-ec6f-43e0-9dfb-39424bc3e009',
        'f221a9de-77bc-4ad3-96b9-24859f1d3f2b',
      ],
    },
  ])

  const currDay = ref(0)
  const currGameId = ref('')

  const eventDates = computed(() => eventData.value.map((event) => event.date))
  const gameCount = computed(() => {
    const index = currDay.value
    const data = eventData.value[index]
    return data.gameIds.length
  })

  return { currDay, currGameId, gameCount, eventDates }
})
