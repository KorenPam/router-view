import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGalleryStore = defineStore('gallery', () => {
  const imagesList = ref([])
  const context = import.meta.glob('@/assets/images/*.jpeg', { eager: true })

  const getImages = (r) => {
    const imagesList = Object.keys(r)

    return imagesList.map((path) => {
      return {
        path: r[path].default,
        name: path.split('/').pop().replace('.jpeg', '')
      }
    })
  }

  imagesList.value = getImages(context)
  return {
    imagesList
  }
})
