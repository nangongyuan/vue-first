var base = {
    methods: {
        show: function () {
            this.visible = true;
        },
        hide: function () {
            this.visible = false;
        },
        toggle: function () {
            this.visible = !this.visible;
        }
    },
    data: function () {
        return {
            visible: false,
        }
    }
}
Vue.component('tooltip', {
    template: '<div><span @mouseenter="show" @mouseleave="hide">oin us for Flutter Live on December 4 to experie</span><div v-if="visible">白岩松</div></div>',
    mixins: [base]
});
Vue.component('popup', {
    template: '<div><button @click="toggle">Popup</button><div v-if="visible"><h4>title</h4>Join us for Flutter Live on December 4 to experience the latest from Flutter, Google’s free and open source SDK for building high-quality native iOS and Android apps from a single codebase.</div></div>',
    mixins: [base]
})
var vue = new Vue({
    el: '#app',
})
