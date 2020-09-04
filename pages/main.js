module.exports = {
    type: 'page',
    title: 'Demo',
    children: [
        'Эта демо-страница предназначена для того, чтобы продемонстрировать возможность создания клиентского приложения',
        // test lua module
        {
            type: 'module',
            url: './index.js',
        },
    ]
}
