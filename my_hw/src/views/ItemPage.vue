<template>
  <div class="itemPageMain">
  <div class="pageCard">
    <div class="pageImg">
      <img :src="'/images/' + item.image" :alt="item.title">
    </div>
    <div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.price }} $</p>
      <div class="descriptionDiv">
        <p>{{item.description}}</p>
      </div>
      <p v-if="item.count">В наличии: {{item.count}} шт.</p>
      <p v-else>Нет в наличии</p>
    </div>
    <div class="button" v-if="item.count && !cartSearch" @click="addBtnClickHandler">
      <p>Добавить в корзину</p>
    </div>
    <div class="btnInCart" v-if="cartSearch" @click="inCartClickHandler">
      <p>В корзине</p>
    </div>
    <div class="buttonCatalog" @click="addBtnCatalogClickHandler">
      <p>Вернуться в каталог</p>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ItemPage",
  /*props: {
    item: Object
  }*/
  computed:{
    ...mapGetters(['goods', 'cart']),
    item(){
      const id = Number(this.$route.params.id);
      return this.goods.find(good => good.id === id);
    },
    cartSearch(){
      const id = Number(this.$route.params.id);
      return this.cart.find(good => good.id === id);
    }
  },
  methods:{
    ...mapActions(['addToCart']),
    addBtnCatalogClickHandler(){
      this.$router.push('/');
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