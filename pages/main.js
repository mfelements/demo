module.exports = {
    type: 'page',
    title: 'Demo',
    children: [
        'Эта демо-страница предназначена для того, чтобы продемонстрировать возможность создания клиентского приложения',
        // test lua module
        {
            type: 'module',
            url: './index.lua',
            lang: 'lua',
            langv: '5.3',
        },
    ]
}
