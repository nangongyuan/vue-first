//全部组件
// Vue.component('balance',{
//      template: '<div><show @show-balance="show_balance = true"></show><div v-if="show_balance">您余额：￥98元</div></div>',
//     data: function () {
//         return {
//             show_balance: false,
//         }
//     }
// });

Vue.component('balance', {
    template: '<div><show @show-balance="show_balance"></show><div v-if="show">您余额：￥98元</div></div>',
    data: function () {
        return {
            show: false,
        }
    },
    methods: {
        show_balance: function (data) {
            this.show = true;
            console.info(data);
        }
    }
});

Vue.component('show', {
    template: '<button @click="on_click()">显示余额</button>',
    methods: {
        on_click() {
            this.$emit('show-balance', {a: 1, b: 2});
        }
    },
});

var vue = new Vue({
    el: '#app',
})
