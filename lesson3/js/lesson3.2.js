/*Отобразить стоимость услуг.

     let services =  [
         {
             title: "Женская стрижка на длинные волосы",
             price: 2000
         },
         {
             title: "Стрижка челки",
             price: 300
         },
         {
             title: "Детская стрижка (до 7 лет)",
             price: 700
         },
         {
             title: "Мужская стрижка",
             price: 1000
         },
         {
             title: "Коррекция бороды",
             price: 1200
         },
         {
             title: "Тонирование мужских волос",
             price: 1500
         },
         {
             title: "Окрашивание волос",
             price: 5000
         },
         {
             title: "Женский маникюр",
             price: 1500
         },
         {
             title: "Мужской маникюр",
             price: 1700
         },
         {
             title: "Педикюр",
             price: 2500
         },
         {
             title: "Покрытие гель-лаком",
             price: 1500
         }
     ];
Вывести в html названия услуг и их стоимость
Реализовать возможность выбора услуг из списка
Ниже списка отображать итоговую стоимость выбранных пользователем услуг.
Если пользователь отменяет выбор, стоимость должна пересчитываться*/

"use strict";

let services =  [
    {
        title: "Женская стрижка на длинные волосы",
        price: 2000,
        id:1
    },
    {
        title: "Стрижка челки",
        price: 300,
        id:2
    },
    {
        title: "Детская стрижка (до 7 лет)",
        price: 700,
        id:3
    },
    {
        title: "Мужская стрижка",
        price: 1000,
        id:4
    },
    {
        title: "Коррекция бороды",
        price: 1200,
        id:5
    },
    {
        title: "Тонирование мужских волос",
        price: 1500,
        id:6
    },
    {
        title: "Окрашивание волос",
        price: 5000,
        id:7
    },
    {
        title: "Женский маникюр",
        price: 1500,
        id:8
    },
    {
        title: "Мужской маникюр",
        price: 1700,
        id:9
    },
    {
        title: "Педикюр",
        price: 2500,
        id:10
    },
    {
        title: "Покрытие гель-лаком",
        price: 1500,
        id:11
    }
];

Vue.createApp({
    data() {
        return {
            services,
            selected: []
        }
    },
    computed: { // для св-в и как они должны вычисляться
        userSum(){
            let sum = 0;
            let filtered = services.filter(a => this.selected.includes(a.id))
            for(let i = 0; i < filtered.length; i++){
                sum += filtered[i].price; }
            return sum;
        }
    },
    methods: {
        submitForm(){
            /*event.preventDefault()*/
            console.log(this.userChoice)
        }
    }
}).mount("#app");

//v-if и v-for не используют вместе тк у v-if всегда приоритет