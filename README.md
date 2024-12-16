
# Node.js Web Server Router

这是一个基于 Node.js 开发的 Web 服务器路由器。项目包括路由配置、控制器、静态网页等功能。启动后，会在 `http://127.0.0.1:3000` 上启动一个 Web 服务器。

## 安装与启动

1. 克隆项目到本地：

   ```bash
   git clone https://github.com/guangboshushu/node_route.git
   cd node_route
   ```

2. 安装项目依赖：

   ```bash
   npm install
   ```

3. 启动 Web 服务器：

   ```bash
   node app.js
   ```

4. 打开浏览器并访问 `http://127.0.0.1:3000`。

## 文件结构说明

### `/controllers`

- `authController.js`: 路由控制器，负责执行数据处理并向前端返回数据。
- 更多控制器：可以在该文件夹中添加更多路由控制器文件。

### `/routes`

- `routesConfig.js`: 路由配置文件。此文件是自动生成的，根据 `/controllers` 文件夹下的控制器文件动态生成路由配置。

### `/static`

- `index.html`: 启动 Web 服务器后的静态网页文件。访问 `http://127.0.0.1:3000` 时会加载此文件。

### `/rcMake.js`

- 自动化脚本。该脚本将 `/controllers` 下的文件以及文件中的控制器方法，自动写入到 `/routes/routesConfig.js` 文件中。

### `app.js`

- 主启动文件，配置 Web 服务器并监听端口 `3000`。

## 路由控制器的写法：

以 productController.js 举例：
```
module.exports = {
    get: { // api 的 RESTful API 的方法
        createProduct: { // 这里的名字和 控制器文件名一致
            path: '/product', //这里是设定的路由路径
            fn: (req, res) => {
                const product = req.query;
                res.json({ message: 'Product created', product }); //返回相应的数据
            },
        }
    },
    post: {
        createProduct: {
            path: '/product',
            fn: (req, res) => {
                const product = req.body
                res.send({ message: product.pd });
            },
        }
    }
    // 更多方法...
};
```


## 功能概述

- **控制器**：负责业务逻辑，处理路由请求并返回数据。
- **路由配置**：通过自动化脚本 `rcMake.js` 生成，根据控制器中的方法自动配置路由。
- **静态文件**：提供静态网页访问，可以通过浏览器访问到 `index.html` 页面。

## 贡献

欢迎贡献代码！如果你有任何问题或改进建议，欢迎提交 Issues 或 Pull Requests。

## License

MIT License.
```

这个 README 文件详细介绍了项目的安装、使用、文件结构等信息。如果你有任何修改或需要补充的地方，随时告诉我！