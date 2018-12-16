var routes = [
    {
        path: '/',
        component: {
            template: '<div><h1>欢迎来到首页</h1></div>'
        }
    },
    {
        path: '/post',
        meta: {
            login: false,
        },
        component: {
            template: '<div><h1>帖子管理</h1><router-link to="rain" append>雨天</router-link><router-view></router-view></div>'
        },
        children: [
            {
                path: 'rain',
                component: {
                    template: '<h2>雨天asdff后座</h2>'
                }
            }
        ]
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
    if (!loggedIn && to.matched.some(function (value) {
        return value.meta.login;
    })) {
        next('/login');
    } else {
        next();
    }
})

new Vue({
    el: '#app',
    router: router,
    methods: {}
})