Vue.filter('currency', function (val) {
    val = val || 0;
    return val + '元';
})

Vue.filter('currency', function (val, unit) {
    val = val || 0;
    unit = unit || '元';
    return val + unit;
})
Vue.filter('meter', function (val) {
    val = val || 0;
    return (val / 1000).toFixed(2) + 'm';
})
var vue = new Vue({
    el: '#app',
    data: {
        price: 10,
        length: 20,
    }
})
