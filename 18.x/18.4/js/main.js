var app = new Vue({
    el: '#app',
    methods: {
        onClick: function () {
            console.info("1111");
        },
        onEnter: function () {
            console.info('mouse enter');
        },
        onOut: function () {
            console.info('mouse out');
        },
        onSubmit: function (e) {
            e.preventDefault();
            console.info('submit');
        },
        onKeyUp: function () {
            console.info('key up');
        },
        onEnterUp: function () {
            console.info('enter up');
        }
    }
})