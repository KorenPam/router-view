<template>
    <div class="search">
      <div class="search-container">
        <div class="search-item" @click="showMovies = true; showGenres = false; showChannels = false ;showResult =false;selectedType = ''">
          影片<el-icon><ArrowDown /></el-icon>
        </div>
        <div class="search-item" @click="showMovies = false; showGenres = true; showChannels = false ;showResult =true;selectedType = ''">
          类型<el-icon><ArrowDown /></el-icon>
        </div>
        <div class="search-item" @click="showMovies = false; showGenres = false; showChannels = true ;showResult =true;selectedType = ''">
          频道<el-icon><ArrowDown /></el-icon>
        </div>
      </div>
      <div class="search-movie" v-if="showMovies">
        <div class="movie-row">
          <label class="movie" v-for="(item,index) in movieNames" :key="index">{{ item.name }}</label>
        </div>
      </div>
      <div class="search-type" v-if="showGenres">
        <div class="type-row">
          <label class="type" v-for="(item,index) in movieGenres" :key="index">{{ item }}</label>
        </div>
      </div>
      <div class="search-sorf" v-if="showChannels">
        <div class="sorf-row">
        <label class="sorf" v-for="(item,index) in movieChannels" :key="index" >{{ item }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref ,computed} from 'vue';
  
//   const movieNames = [
//   { name: "阿凡达", type: "科幻", channel: "院线大片" },
//   { name: "复仇者联盟", type: "动作", channel: "热映电影" },
//   { name: "星球大战", type: "科幻", channel: "经典电影" },
//   { name: "哈利波特", type: "奇幻", channel: "影视剧场" },
//   { name: "指环王", type: "奇幻", channel: "院线大片" },
//   { name: "阿甘正传", type: "剧情", channel: "影视推荐" },
//   { name: "盗梦空间", type: "科幻", channel: "最新电影" },
//   { name: "少年派的奇幻漂流", type: "冒险", channel: "网络热播" },
//   { name: "飞屋环游记", type: "动画", channel: "华语电影" },
//   { name: "海上钢琴师", type: "剧情", channel: "欧美电影" },
//   { name: "楚门的世界", type: "剧情", channel: "独立制作" },
//   { name: "泰坦尼克号", type: "爱情", channel: "院线大片" },
//   { name: "辛德勒的名单", type: "剧情", channel: "院线大片" },
//   { name: "霸王别姬", type: "爱情", channel: "冷门佳片" },
//   { name: "魔戒", type: "奇幻", channel: "院线大片" },
//   { name: "教父", type: "犯罪", channel: "精品选购" },
//   { name: "当幸福来敲门", type: "剧情", channel: "热映电影" },
//   { name: "美丽心灵", type: "剧情", channel: "院线大片" },
//   { name: "十二怒汉", type: "剧情", channel: "独立制作" },
//   { name: "绿里奇迹", type: "剧情", channel: "怀旧影院" },
//   { name: "功夫", type: "喜剧", channel: "网络热播" },
//   { name: "怪兽电力公司", type: "动画", channel: "影视推荐" },
//   { name: "速度与激情", type: "动作", channel: "热映电影" },
//   { name: "疯狂动物城", type: "动画", channel: "华语电影" },
//   { name: "狮子王", type: "动画", channel: "精品选购" },
//   { name: "变形金刚", type: "科幻", channel: "院线大片" },
//   { name: "釜山行", type: "动作", channel: "最新电影" },
//   { name: "西游记", type: "喜剧", channel: "影视剧场" },
//   { name: "钢铁侠", type: "科幻", channel: "院线大片" },
//   { name: "功夫熊猫", type: "动画", channel: "精品选购" }
// ];

// const movieGenres = [
//   "动作", "冒险", "喜剧", "剧情", "恐怖", "悬疑", "科幻", "犯罪", "动画", "家庭", "奇幻", 
//   "战争", "音乐", "爱情", "惊悚", "传记", "纪录片", "历史", "运动", "西部"
// ];

// const movieChannels = [
//   "热映电影", "经典电影", "最新电影", "冷门佳片", "独立制作", "华语电影", "欧美电影", "亚洲电影", 
//   "文艺片", "动画电影", "院线大片", "影视剧场", "怀旧影院", "影视推荐", "精品选购", "网络热播", 
//   "影视资讯", "明星专访", "影评剖析", "专题报道"
// ];
  
  const showMovies = ref(false);
  const showGenres = ref(false);
  const showChannels = ref(false);

  const selectedType = ref('');
  
  const showResult = ref(false);

  const filteredMovies = computed(() => {
    if (!selectedType.value) return [];
  
  // 根据选择的类型筛选电影
  if (showChannels.value) {
    return movieNames.filter(movie => movie.channel === selectedType.value);
  } else if (showGenres.value) {
    return movieNames.filter(movie => movie.type === selectedType.value);
  }
  
  // 如果没有选择类型，则返回所有电影
  return movieNames;
});

  </script>
  
  <style scoped>
  .search {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .search-container {
    display: flex;
    justify-content: space-between;
  }
  
  .search-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .search-item:hover {
    background-color: #f0f0f0;
  }
  
  .search-item el-icon {
    margin-left: 5px;
    font-size: 16px;
  }
  
  .movie-row, .type-row, .sorf-row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  
  .movie, .type, .sorf {
    width: 20%;
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  .search-results {
    margin-top: 20px;
    border: 1px solid #a5a3a3;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .result {
    text-align: center;
    padding: 5px;
    background-color: #f0f0f0;
    margin-bottom: 5px;
    cursor: pointer;
  }
  
  .no-data {
    text-align: center;
    padding: 10px;
    font-style: italic;
    color: #999;
  }
  </style>
  