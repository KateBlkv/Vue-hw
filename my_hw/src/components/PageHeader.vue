<template>
  <div class="head">
    <div class="empty"></div>
    <div class="notEmpty">
      <span>Корзина</span> <span class="spanCount"> ({{ cartCount }})</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(['cart']),
    cartCount(){
      let c = 0;
      this.cart.map(item => {
        c = c + item.inCartCount;
      })
      return c;
    }
  }
}
</script>

<style scoped>

</style>