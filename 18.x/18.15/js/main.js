Vue.directive('pin', function (el, bindding) {
    var pinned = bindding.value;
    var position = bindding.modifiers;
    var warning = bindding.arg;
    console.log(warning);
    console.log('position:', position);
    if (pinned) {
        el.style.position = 'fixed';
        // el.style.left = '10px';
        // el.style.top = '10px';
        for (var key in position) {
            console.log(key);
            if (position[key]) {
                el.style[key] = '10px';
            }
        }
        if (warning) {
            el.style.background = 'red';
        }
    } else {
        el.style.position = 'static';
    }

})
var vue = new Vue({
    el: '#app',
    data: {
        card1: {
            pinned: false,
        },
        card2: {
            pinned: false,
        }
    },
    methods: {
        onClick: function () {

        }
    }
})
