// routes.js
module.exports = [
  {
    "method": "get",
    "path": "/auth/login",
    "controller": "authController",
    "action": "login"
  },
  {
    "method": "post",
    "path": "/auth/login",
    "controller": "authController",
    "action": "login"
  },
  {
    "method": "get",
    "path": "/product",
    "controller": "productController",
    "action": "createProduct"
  },
  {
    "method": "post",
    "path": "/product",
    "controller": "productController",
    "action": "createProduct"
  },
  {
    "method": "get",
    "path": "/user/:id",
    "controller": "userController",
    "action": "getUserById"
  },
  {
    "method": "post",
    "path": "/user/:id",
    "controller": "userController",
    "action": "getUserById"
  }
];
