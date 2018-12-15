//全部组件
Vue.component('alert', {
    template: '<button  @click="on_click">alert</button>',
    props: ['msg'],
    methods: {
        on_click: function () {
            alert(this.msg);
        }
    }
});

Vue.component('user', {
    template: '<a :href=" \'/user/\' + username">{{username}}</a>',
    props: ['username'],
    methods: {}
});

var vue = new Vue({
    el: '#app',
})
