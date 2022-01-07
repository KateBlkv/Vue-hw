import { createStore } from 'vuex'


export default createStore({
  state: {
    goods : [
      {
        id: 1,
        title: "Пианино",
        description: "Клавишный струнный музыкальный инструмент с ударным (молоточковым) способом звукоизвлечения, " +
            "созданный специально для комнатного музицирования в небольших помещениях. Пианино представляет собой " +
            "уменьшенную по размеру разновидность фортепиано, в которой струны, дека и механическая часть расположены " +
            "вертикально, а не горизонтально, вследствие чего пианино занимает гораздо меньше места, чем рояль.",
        price: 3000,
        count: 0,
        image: "piano.jpg"
      },
      {
        id: 2,
        title: "Гитара",
        description: "Струнный щипковый музыкальный инструмент. Применяется в качестве аккомпанирующего или сольного " +
            "инструмента во многих стилях и направлениях музыки, среди которых романс, блюз, кантри, фламенко, рок, джаз." +
            " Изобретённая в XX веке электрическая гитара произвела значительные изменения в музыке и тем самым оказала " +
            "сильное влияние на массовую культуру. Также есть классическая гитара, гитара фламенко, испанская гитара " +
            "и некоторые другие виды.",
        price: 1200,
        count: 40,
        image: "guitar.jpg"
      },
      {
        id: 3,
        title: "Барабаны",
        description: "Музыкальный инструмент из семейства ударных. Распространён у большинства народов, используется в " +
            "составе многих музыкальных ансамблей.Исполнитель на барабане — барабанщик.Типичным представителем является" +
            " мембранный барабан, состоящий из полого корпуса - резонатора определённой формы или рамы, на которую натянута " +
            "кожаная или пластиковая мембрана. Её натяжением регулируется относительная высота звука. Корпус барабана " +
            "производится из дерева, металла(стали, латуни), акрилового пластика или даже глины.",
        price: 2700,
        count: 12,
        image: "drum.jpg"
      },
      {
        id: 4,
        title: "Флейта",
        description: "Лабиальный духовой музыкальный инструмент, в котором первичным источником колебаний является " +
            "воздушная струя, рассекающаяся о край стенки инструмента, называемого лабиум (лат. labium — губа). " +
            "Источник колебаний приводит в движение воздушный столб в канале флейты и образуется звук определённой высоты. " +
            "Один из древнейших музыкальных инструментов. Относится к группе деревянных духовых.",
        price: 900,
        count: 50,
        image: "flute.jpg"
      },
      {
        id: 5,
        title: "Арфа",
        description: " струнный щипковый музыкальный инструмент, состоит из двух расположенных под углом рам, между " +
            "которыми натянуто множество струн. Один из древнейших инструментов, символ Ирландии. В XVIII столетии была " +
            "изобретена педальная арфа, ставшая стандартом в классической музыке.",
        price: 3400,
        count: 5,
        image: "harp.jpeg"
      }
    ],
    cart: []
  },
  getters: {
    goods: state => state.goods,
    cart: state => state.cart
  },
  mutations: {
    setCart(state, value) {
      state.cart = value /*добавить целый массив*/
    },
    /*setGoods(state, value) {
      state.goods = value /!*добавить целый массив*!/
    },*/
    increaseCountInGoods(state, id) {
      let good = state.goods.find(item => item.id === id);
      good.count++;
    },
    decreaseCountInGoods(state, id) {
      let good = state.goods.find(item => item.id === id);
      good.count--;
    }
  },
  actions: {
    addToCart({state, commit}, id){
    /*addToCart({state, commit}, payload){
      const {id, title} = payload*/
      let cart = state.cart;
      const newRecord = {id, inCartCount: 1};
      cart.push(newRecord);
      commit('setCart', cart);
      commit('decreaseCountInGoods', id);
    },
    removeFromCart({state, commit}, id){
      let filteredCart = state.cart.filter(item => item.id !== id);
      commit('setCart', filteredCart);
    },
    increaseCountInCart({state, commit}, id){
      let updatedCart = state.cart.map(item => {
        if (item.id !== id) return item
        return {
          ...item,
          inCartCount: item.inCartCount + 1
        }
      })
      commit('setCart', updatedCart);
      commit('decreaseCountInGoods', id);
    },
    decreaseCountInCart({state, commit, dispatch}, id) {
      let good = state.cart.find(item => item.id === id);
      if (good.inCartCount === 1) {
        dispatch('removeFromCart', id);
      } else {
        let updatedCart = state.cart.map(item => {
          if (item.id !== id) return item
          return {
            ...item,
            inCartCount: item.inCartCount - 1
          }
        })
        commit('setCart', updatedCart);
      }
      commit('increaseCountInGoods', id);
    }
  }
})
