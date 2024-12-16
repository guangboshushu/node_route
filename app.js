const express = require('express');
const app = express();
app.use(express.json());  // 用于解析 JSON 格式的请求体


const rcMake = require('./rcMake.js')
rcMake()

const routesConfig = require('./routers/routesConfig');  // 导入路由配置文件

app.use(express.static(__dirname + '/static'))


// 动态加载路由
routesConfig.forEach(route => {
    const controller = require(`./controllers/${route.controller}`);  // 动态加载控制器
    app[route.method](route.path, controller[route.method][route.action].fn);  // 将路由与控制器方法绑定

    console.log('for review route:', route.method, route.path, controller[route.method][route.action].fn)

});

// 启动服务
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
