<template>
  <div class="itemCard" @click="cardClickHandler">
    <div class="itemImg">
      <img :src="'/images/' + item.image" :alt="item.title">
    </div>
    <div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.price }} $</p>
      <p>{{shortDescription}}</p>
      <p v-if="item.count">В наличии: {{item.count}} шт.</p>
      <p v-else>Нет в наличии</p>
    </div>
    <div class="button" v-if="item.count && !cartSearch" @click.stop="addBtnClickHandler">
      <p>Добавить в корзину</p>
    </div>
    <div class="btnInCart" v-if="cartSearch" @click.stop="inCartClickHandler">
      <p>В корзине</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ItemCard",
  props: {
    item: Object
  },
  computed:{
    ...mapGetters(['goods', 'cart']),
    shortDescription(){
      return this.item.description.substring(0, 15) + '...'
    },
    cartSearch(){
      const id = this.item.id;
      return this.cart.find(good => good.id === id);
    }
  },
  methods:{
    ...mapActions(['addToCart']),
    cardClickHandler(){
      this.$router.push('/' + this.item.id);
    },
    addBtnClickHandler(){
      this.addToCart(this.item.id);
    },
    inCartClickHandler(){
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>

</style>