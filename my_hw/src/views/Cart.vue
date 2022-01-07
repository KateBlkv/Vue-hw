<template>
  <div class="cart">
    <in-cart-item v-for="elem in goodsInCart" :item="elem" :key="elem.id"/>
    <div>
      <p>Итого: {{userSum}}</p>
    </div>
  </div>
</template>

<script>
import InCartItem from "../components/InCartItem";
import {mapGetters} from "vuex";
export default {
  name: "Cart",
  components: {InCartItem},
  computed: {
    ...mapGetters(['goods','cart']),
    goodsInCart(){
      return this.cart.map(item => {
        const good = this.goods.find(elem => elem.id === item.id);
        return {
          ...item,
          ...good
        }
      })
    },
    userSum(){
      /*let prices = this.goodsInCart.map(item => item.inCartCount)*/
      let result = this.goodsInCart.reduce(function(sum, current) {
        return sum + current.inCartCount * current.price;
      }, 0);
      return result;
    }
  }
}
</script>

<style scoped>

</style>