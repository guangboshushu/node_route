// authController.js
module.exports = {
    get: {
        login: {
            path: '/auth/login',
            fn: (req, res) => {
                res.send({ message: 'Login successful' });
            }
        },
    },
    post: {
        login: {
            path: '/auth/login',
            fn: (req, res) => {
                res.send({ message: 'Login successful' });
            },
        }
    }
    // 更多方法...
};
