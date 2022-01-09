<template>
  <div class="itemInCart">
    <div class="cartName">
      <p>{{ item.title }}</p>
    </div>
    <div class="priceName">
      <p>{{ allPrice}}</p>
    </div>
    <div class="changeBtn">
      <button id="-" @click="minusClickHandler">-</button>
      <span class="count">  {{item.inCartCount}}  </span>
      <button id="+" @click="plusClickHandler" :disabled="item.count <= 0">+</button>
    </div>
    <div class="mainDelBtn">
      <div class="deleteBtn" @click="removeItem">Удалить</div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "InCartItem",
  props: {
    item: Object
  },
  computed:{
    allPrice(){
      return this.item.price * this.item.inCartCount;
    }
  },
  methods: {
    ...mapActions(['decreaseCountInCart', 'increaseCountInCart', 'removeFromCart']),
    minusClickHandler(){
      this.decreaseCountInCart(this.item.id)
    },
    plusClickHandler(){

      this.increaseCountInCart(this.item.id)
    },
    removeItem(){
      this.removeFromCart(this.item.id)
    }
  }
}
</script>

<style scoped>

</style>