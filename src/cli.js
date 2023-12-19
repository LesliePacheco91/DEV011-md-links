
// eslint-disable-next-line no-undef
const { statusLinks } = require('./function');
const { mdlinks } = require ('./md-links');

const stats = process.argv.includes('--stats');
const validate = process.argv.includes('--validate');
const ruta = process.argv[2];
mdlinks(ruta, validate, stats)
.then(res => {
    if(stats){
        const datos = statusLinks(res, validate)
        console.log(datos);
    } else {
        console.log(res)
    }
})
.catch(err => console.log(err));

