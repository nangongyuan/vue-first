var routes = [
    {
        path: '/',
        component: {
            template: '<div><h1>首页</h1></div>',
        }
    },
    {
        path: '/about',
        component: {
            template: '<div><h1>关于我们</h1></div>'
        }
    },
    {
        path: '/user/:id',
        name: 'user',
        component: {
            // template: '<div><h1>用户ID：{{$route.params.id}}</h1><h2>用户名：{{$route.query.name}}</h2><router-link :to="\'/user/\'+$route.params.id+\'/more\'">更多</router-link><router-view></router-view></div>',
            template: '<div><h1>用户ID：{{$route.params.id}}</h1><h2>用户名：{{$route.query.name}}</h2><router-link :to="more" append>更多</router-link><router-view></router-view></div>',
        },
        children: [
            {
                path: 'more',
                component: {
                    template: '<div><h1>用户ID：{{$route.params.id}}</h1><h2>用户名：{{$route.query.name}}</h2><h3>详细信息</h3></div>',
                }
            }
        ],
    }
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router: router,
    methods: {
        surf: function () {
            setTimeout(function () {
                this.router.push('/about');
                setTimeout(function () {
                    this.router.push({name: 'user', params: {id: '4'}});
                }, 2000)
            }, 2000)
        }
    }
})