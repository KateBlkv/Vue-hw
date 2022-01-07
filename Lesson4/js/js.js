// Реализовать редактируемую галерею изображений.
// 1) У каждого изображения галереи должны быть:
// название, изображение и кнопка, позволяющая
// удалить соответствующее изображение из галереи.
// 2) Реализовать возможность добавить новое изображение
// в галерею, путём добавления названия изображения и
// пути к файлу картинки. 3) Задача должна быть решена
// через создание взаимосвязанных компонентов (например:
// «галерея» родительский компонент, а карточка изображения
// – это дочерний элемент).

"use strict";

let imgForm = {
    props: {
        emits: ['deletePhoto'],
        name: {
            require: true,
            type: String,
        },
        src: {
            require: true,
            type: String,
        },
    },
    template: `
            <div class='photo'>
                <h4>{{ name }}</h4>
                <img :src="src" :alt="name">
                <button @click="$emit('deletePhoto', src)">Удалить</button>
            </div>`
};
Vue.createApp({
    components: { imgForm },
    data() {
        return {
            photos: [
                { name: 'Photo', src: 'https://picsum.photos/200/250?random=1' },
                { name: 'Photo1', src: 'https://picsum.photos/200/250?random=2' },
                { name: 'Photo2', src: 'https://picsum.photos/200/250?random=3' },
                { name: 'Photo3', src: 'https://picsum.photos/200/250?random=4' },
                { name: 'Photo4', src: 'https://picsum.photos/200/250?random=5' },
                { name: 'Photo5', src: 'https://picsum.photos/200/250?random=6' },
            ],
            newPhoto: {
                name: '',
                src: '',
            }
        };
    },
    methods: {
        deletePhoto(src) {
            this.photos = this.photos.filter((photo) => {
                if (photo.src !== src) return true;
            });
        },
        addPhoto(){
            this.photos.push({
                name: this.newPhoto.name,
                src: this.newPhoto.src
            })
        }
    },

}).mount('#app');