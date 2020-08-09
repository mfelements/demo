const pages = new Map(await Promise.all([
    'main',
].map(n => requireAsync(`pages/${n}.js`).then(v => [n, v]))));

registerAction('getPage', name => pages.get(name));
