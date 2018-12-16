var routes = [
    {
        path: '/',
        component: {
            template: '<div><h1>欢迎来到首页</h1></div>'
        }
    },
    {
        path: '/post',
        component: {
            template: '<div><h1>帖子管理</h1></div>'
        }
    },
    {
        path: '/login',
        component: {
            template: '<div><h1>用户登录</h1></div>'
        }
    },
];

var router = new VueRouter({
    routes: routes,
});
router.beforeEach(function (to, from, next) {
    var loggedIn = false;
    if (!loggedIn && to.path == '/post') {
        next('/login');
    } else {
        next();
    }
})
router.afterEach(function (to, from) {
    console.log(to);
    console.log(from);
})
new Vue({
    el: '#app',
    router: router,
    methods: {}
})