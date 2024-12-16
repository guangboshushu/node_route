// routes.js
module.exports = [
    { method: 'get', path: '/auth/login', controller: 'authController', action: 'login' },
    { method: 'get', path: '/user/:id', controller: 'userController', action: 'getUserById' },
    { method: 'post', path: '/product', controller: 'productController', action: 'createProduct' },
    { method: 'post', path: '/auth/login', controller: 'authController', action: 'login' }
    // 更多路由...
];

/*
@method: 对应来自 访问端 的RESTful API 方法 
@path: 定义来自访问端的路径
@controller 根据method 和 path  来定位使用什么控制器
@action 定义使用控制器中的什么函数
*/

