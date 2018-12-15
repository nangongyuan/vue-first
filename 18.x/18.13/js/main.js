var Event = new Vue();

Vue.component('huahua', {
    template: '<div>我说:<input v-model="i_said" @keyup="on_change"/></div>',
    data: function () {
        return {
            i_said: ''
        }
    },
    methods: {
        on_change: function () {
            Event.$emit('huahua-said-something', this.i_said);
        }
    }
})
Vue.component('shuangdan', {
    template: '<div>花花说:{{huahua_said}}</div>',
    data: function () {
        return {
            huahua_said: '',
        };
    },
    mounted: function () {
        var me = this;
        Event.$on('huahua-said-something', function (data) {
            me.huahua_said = data;
        })
    }
})
var vue = new Vue({
    el: '#app',
})
