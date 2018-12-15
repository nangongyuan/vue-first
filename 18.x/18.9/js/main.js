//全部组件
Vue.component('alert', {
    template: '<button @click="on_click">alert</button>',
    methods: {
        on_click: function () {
            alert('Yo.');
        }
    }
});

new Vue({
    el: '#seg1',
    //局部组件
    components: {
        'alert-box': {
            template: '<button @click="on_click">alert-box</button>',
            methods: {
                on_click: function () {
                    alert('alert-box');
                }
            }
        }
    }
})

new Vue({
    el: '#seg2',
})