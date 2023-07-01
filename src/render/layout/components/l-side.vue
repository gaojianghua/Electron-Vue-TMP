<template>
  <div class="sidebar d-flex a-center flex-column position-relative pt-3">
    <div class="avatar mb-1">
      <img src="https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/wolffyPink.png" alt=""/>
    </div>
    <div class="menu">
      <router-link v-for="item in mainWindowRoutes" :to="item.path"
                   :class="['menu-item', { selected: item.isSelected }]" class="mt-2">
        <img :src="item.isSelected ? item.iconSelected : item.icon"/>
      </router-link>
    </div>
    <div class="setting position-absolute">
      <div class="menu-item">
        <img src="@/render/assets/img/sidebar/set.png"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
//菜单列表数组
let mainWindowRoutes = ref([
  {
    path: '/chat',
    isSelected: true,
    icon: '../src/assets/img/sidebar/msg.png',
    iconSelected: '../src/assets/img/sidebar/msgactive.png'
  },
  {
    path: '/contact',
    isSelected: false,
    icon: '../src/assets/img/sidebar/book.png',
    iconSelected: '../src/assets/img/sidebar/bookactive.png'
  },
  {
    path: '/like',
    isSelected: false,
    icon: '../src/assets/img/sidebar/star.png',
    iconSelected: '../src/assets/img/sidebar/staractive.png'
  },
  {
    path: '/file',
    isSelected: false,
    icon: '../src/assets/img/sidebar/file.png',
    iconSelected: '../src/assets/img/sidebar/fileactive.png'
  },
]);
let route = useRoute();
//注册路由变化监听器
watch(
    () => route,
    () => mainWindowRoutes.value.forEach((v) => (v.isSelected = v.path === route.fullPath)),
    {
      immediate: true,
      deep: true,
    }
);
</script>

<style scoped lang="scss">
.sidebar {
  width: 66px;
  height: 100%;
  background-color: #F1F1F1;

  .avatar {
    width: 40px;
    height: 40px;
  }
  a{
    display: block;
  }
  .menu-item {
    width: 25px;
    height: 25px;
  }
  .setting{
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
