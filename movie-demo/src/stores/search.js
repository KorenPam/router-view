import { defineStore } from 'pinia'
import { useGalleryStore } from './gallery'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const useGallery = useGalleryStore()
  const movieNames = ref(useGallery.imagesList)
  const channeltypes = ref([])
  channeltypes.value = movieNames.value.map((item) => item.name)
  const movieGenres = ref([
    {
      name: '影片',
      types: [
        '影片',
        '动作片',
        '喜剧片',
        '爱情片',
        '科幻片',
        '恐怖片',
        '犯罪片',
        '战争片',
        '奇幻片',
        '冒险片',
        '悬疑片',
        '纪录片'
      ]
    },
    {
      name: '默认排序',
      types: [
        '默认排序',
        '按照影片时间长短排序',
        '按照字母排序',
        '按照热度排序',
        '按照上映时间排序'
      ]
    },
    {
      name: '全部频道',
      types: ['全部频道', ...movieNames.value.map((item) => item.name)]
    }
  ])
  return {
    movieGenres
  }
})
