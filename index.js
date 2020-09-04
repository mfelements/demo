//import * as a from '/a'
//import b, {c as e, d} from './b'

const pages = new Map(await Promise.all([
    'main',
].map(n => requireAsync(`pages/${n}.js`).then(v => (console.log([n, v]), [n, v])))));

registerAction('getPage', name => {

    console.log({pages, requireAsync: requireAsync('pages/main.js')});
    console.log('getPage!', pages.get(name));
});


// there will be no syntax error. Even on iOS. Supported ES features will be documented soon

export class A{
    a = 1;
    #a = 2;
    getAll(){
        return [ this.a, this.#a ];
    }
}

export function changeA(){
    A = 1;
}

export { A as B }

export default A
