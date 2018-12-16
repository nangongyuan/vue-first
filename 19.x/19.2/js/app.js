var routes = [
    {
        path: '/user',
        components: {
            sidebar: {
                template: '<div><ul><li>用户管理</li><li>权限管理</li></ul></div>'
            },
            content: {
                template: '<div>1232343435434343434343434esfadsfsadfsadfsdfasdfdfddddwfada</div>'
            }
        }
    },
    {
        path: '/post',
        components: {
            sidebar: {
                template: '<div><ul><li>帖子管理</li><li>留言管理</li></ul></div>'
            },
            content: {
                template: '<div>1232343435434343434343434esfadsfsadfsadfsdfasdfdfddddwfada</div>'
            }
        }
    },
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router: router,
    methods: {}
})