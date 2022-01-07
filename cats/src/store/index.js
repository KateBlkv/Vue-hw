import { createStore } from 'vuex'

export default createStore({
  state: {
    cats: [
      {
        id: 1,
        name: "Люся",
        age: 1,
        color: "трехцветная",
        img: "https://picsum.photos/id/219/1000/1000"
      },
      {
        id: 2,
        name: "Макс",
        age: 4,
        color: "серый",
        img: "https://picsum.photos/id/1074/1000/1000"
      },
      {
        id: 3,
        name: "Василий",
        age: 1,
        color: "трехцветный",
        img: "https://picsum.photos/id/593/1000/1000"
      }
    ]
  },
  computed: {
    cats(){ return this.$store.state.cats; }
  },
  getters: {
    catsByAge: (state) => (from, to) => {
      return state.cats.filter(cat => cat.age >= from && cat.age <= to)
    }
  },
  mutations: {
    //changeName(state, name}){}
    //changeName(state, объект}){}
    changeName(state, {id, newName}){
      state.cats.forEach(cat => {
        if (cat.id === id) cat.name = newName;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
