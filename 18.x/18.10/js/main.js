//全部组件
Vue.component('like', {
    // template: '<button :class="{cliked: liked}" @click="on_click">👍 {{like_count}}</button>',
    template: '#like-component-tpl',
    data: function () {
        return {
            like_count: 10,
            liked: false,
        }
    },
    methods: {
        on_click: function () {
            if (!this.liked) {
                this.like_count++;
            } else {
                this.like_count--;
            }
            this.liked = !this.liked;
        }
    }
});

var vue = new Vue({
    el: '#app',
})
