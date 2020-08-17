const pages = new Map(await Promise.all([
    'main',
].map(n => requireAsync(`pages/${n}.js`).then(v => [n, v]))));

registerAction('getPage', name => pages.get(name));


// there will be no syntax error. Even on iOS. Supported ES features will be documented soon

class A{
    a = 1;
    #a = 2;
    getAll(){
        return [ this.a, this.#a ];
    }
}
