<template>
  <!-- внешний вид компонента, html разметка -->
  <blog-menu :links="tabs"></blog-menu>
  </router-view>
</template>

<script>
// import BlogMenu from "./components/BlogMenu"
import BlogMenu from "@/components/BlogMenu";

export default {
  // описание компонента:
  // data, computed, methods, props, emits, хуки жизненного цикла и тд
  components: {BlogMenu},
  data() {
    return {
      tabs: [
        {title: "Главная", path: "/"},
        {title: "Все записи", path: "/posts"}
      ]
  }
  }
}
</script>

<style lang="css" scoped>
/*стили компонента*/
/*
атрибуты тега style
lang="css" - значение по умолчанию, css синтаксис
lang="sass" - sass синтаксис
lang="scss" - scss синтаксис
lang="less" - less синтаксис

scoped - локальные стили*/

</style>
