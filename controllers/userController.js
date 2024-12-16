
// userController.js
module.exports = {
    get: {
        getUserById: {
            path: '/user/:id',
            fn: (req, res) => {
                const userId = req.params.id;
                res.send(`User ID: ${userId}`);
            },
        }
    },
    post: {
        regUser: {
            path: '/user/',
            fn: (req, res) => {
                const userId = req.body;
                res.send(`User ID: ${userId}`);
            }
        },
    }
    // 更多方法...
};
