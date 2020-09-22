class Audio{
    constructor(type, src){
        this.type = 'audio';
        this.sources = [ { type, src } ]
    }
}

class Logo{
    constructor(src, invert){
        this.type = 'image';
        this.src = src;
        this.invert = invert
    }
}

export default {
    type: 'page',
    title: 'Radio ROKS',
    children: [
        [
            new Logo('https://play.tavr.media/static/image/roks/ROKS_logo_hd.png', true),
        ],
        new Audio('audio/mpeg', 'https://online.radioroks.ua/RadioROKS'),
    ],
}
