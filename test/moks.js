const mockMdLinks = [];
const arrayLinks = [
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      texto: 'Arreglos',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      texto: 'Array - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      texto: 'Array.prototype.sort() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      texto: 'Array.prototype.forEach() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      texto: 'Array.prototype.map() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
      texto: 'Array.prototype.filter() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
      texto: 'Array.prototype.reduce() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md'
    }
  ];


  const arrayLinksValidate = [
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      texto: 'Arreglos',
      file: 'C:\\Users\\lesli\\Desktop\\LABORATORIA\\DEV011-md-links\\docs\\prueba.md',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      texto: 'Array - MDN',
      file: 'C:\\Users\\lesli\\Desktop\\LABORATORIA\\DEV011-md-links\\docs\\prueba.md',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      texto: 'Array.prototype.sort() - MDN',
      file: 'C:\\Users\\lesli\\Desktop\\LABORATORIA\\DEV011-md-links\\docs\\prueba.md',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      texto: 'Array.prototype.forEach() - MDN',
      file: 'C:\\Users\\lesli\\Desktop\\LABORATORIA\\DEV011-md-links\\docs\\prueba.md',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      texto: 'Array.prototype.map() - MDN',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
      texto: 'Array.prototype.filter() - MDN',
      file: 'C:\\Users\\lesli\\Desktop\\LABORATORIA\\DEV011-md-links\\docs\\prueba.md',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
      texto: 'Array.prototype.reduce() - MDN',
      file: 'C:\\Users\\lesli\\Desktop\\LABORATORIA\\DEV011-md-links\\docs\\prueba.md',
      status: 200,
      msj: 'OK'
    }
  ];

mockMdLinks.arrayLinks = arrayLinks;
mockMdLinks.arrayLinksValidate = arrayLinksValidate;

module.exports = {mockMdLinks};