<template>
  <div v-for="cat in cats" :key="cat.id">
    <h2>{{cat.name}}</h2>

    <input type="text" v-model="changeName">
    <button @click="changeName({id: cat.id, newName: cat.name})">Изменить имя</button>

    <p>Возраст: {{cat.age}}</p>
    <p>Цвет: {{cat.color}}</p>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods: {
    ...mapMutations(['changeName']),
    changeName(){
      this.$store.commit('changeName', /**/)
    }
  },
  data(){
    return{
      newName:""
    }
  },
  computed:{
    cats(){
      return this.$store.state.cats;
    }
  }
}
</script>

<style>

</style>
