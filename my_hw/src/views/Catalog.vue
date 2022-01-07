<template>
  <div class="catalog">
    <item-card v-for="good in goods" :item="good" :key="good.id"/>
  </div>
</template>

<script>
import ItemCard from "../components/ItemCard";
export default {
  name: "Catalog",
  components: {ItemCard},
  computed: {
    goods(){
      return this.$store.state.goods
    }
}}
</script>

<style scoped>

</style>