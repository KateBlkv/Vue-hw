"use strict";
// Вывести информацию о товарах в html, по каждому товару вывести: название
// и стоимость (количество в html выводить не нужно).
// Выводить в отсортированном по count виде.
// В css создать 3 класса (zero, not-many, many) для выделения товаров в зависимости от значения count:
//    если значение count равно 0, карточке с товаром добавляется класс zero,
//    если значение count от 1 до 20, карточке с товаром добавляется класс not-many,
//    если значение count от 20, карточке с товаром добавляется класс many.

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 0
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

Vue.createApp({
    data(){
        return{
            goods
            }
        },
    computed:{
        sorted(){
            return this.goods.sort((a, b) => a.count - b.count);
        }
    }
}).mount("#app");

console.log(goods.sort((a, b) => a.count - b.count))