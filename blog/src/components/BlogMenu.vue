<template>
  <nav>
    <!-- для циклов в одностр компонентах key обязателен!!!-->
      <router-link v-for="link in links"  :key="link.path"
                   :to="link.path">
        {{ link.title }}
      </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    links:{
      required: true,
      type: Array,
      validator(value) {
        if (value.length < 1) return false;
        if (!value.every(link => "title" in link && "path" in link)) return false; /*для проверки every и some*/
        return true;
      }
    }
  }
}
</script>

<style scoped>

</style>