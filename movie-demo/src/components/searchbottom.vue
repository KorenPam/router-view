<script setup>
import { useSearchStore } from '@/stores/search'
const useSearch = useSearchStore()
const options = useSearch.movieGenres
console.log(options)
</script>

<template>
  <div class="search-bottom">
    <div class="container">
      <div
        class="search-options"
        v-for="(option, index) in options"
        :key="index"
      >
        <div class="search-title">
          <span>{{ option.name }}</span>
          <i class="iconfont icon-xiala"></i>
        </div>
        <div class="search-menu">
          <div
            class="search-menu-item"
            v-for="(type, index) in option.types"
            :key="index"
          >
            {{ type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
