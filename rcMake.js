const fs = require('fs');
const path = require('path');

const rcMake = () => {
    // 定义 controllers 目录
    const controllersDir = path.join(__dirname, 'controllers');

    // 获取 controllers 目录下的所有文件（同步方法）
    let files;
    try {
        files = fs.readdirSync(controllersDir);
    } catch (err) {
        console.error('无法读取 controllers 目录:', err);
        return;
    }

    // 用于保存所有路由信息的数组
    const routes = [];

    // 逐一处理每个文件
    files.forEach(file => {
        const filePath = path.join(controllersDir, file);
        const fileName = path.basename(file, '.js'); // 去掉文件扩展名

        // 只处理 .js 文件
        if (path.extname(file) === '.js') {
            let controller;
            try {
                controller = require(filePath);
            } catch (err) {
                console.error(`无法加载文件 ${file}:`, err);
                return;
            }

            // 遍历 controller 中的 HTTP 方法（get, post 等）
            Object.keys(controller).forEach(method => {
                const methodRoutes = controller[method];

                // 遍历每个方法的路由
                Object.keys(methodRoutes).forEach(action => {
                    const route = methodRoutes[action];
                    routes.push({
                        method: method,
                        path: route.path,
                        controller: fileName,
                        action: action
                    });
                });
            });
        }
    });

    // 生成 routes.js 文件的内容
    const routesContent = `// routes.js\nmodule.exports = ${JSON.stringify(routes, null, 2)};\n`;

    // 将生成的内容写入 routes.js 文件（同步方法）
    try {
        fs.writeFileSync(path.join(__dirname, '/routers/routesConfig.js'), routesContent);
        console.log('routesConfig.js 文件已生成');
    } catch (err) {
        console.error('写入 routesConfig.js 文件失败:', err);
    }
};

module.exports = rcMake;
