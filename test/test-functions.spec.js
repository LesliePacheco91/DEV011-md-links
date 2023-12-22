const {isAbsolutePath, convertAbsolute, isExistPath,  extencionArchive, extractLink, validateLinks,statusLinks } = require ('../src/function');

const route = "C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd"; 
const ruteFail = "";
const arrayLinks = [
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      texto: 'Arreglos',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      texto: 'Array - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      texto: 'Array.prototype.sort() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      texto: 'Array.prototype.forEach() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd'
    }
  ];

  const arrayResul = [
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      texto: 'Arreglos',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      texto: 'Array - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      texto: 'Array.prototype.sort() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd',
      status: 200,
      msj: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      texto: 'Array.prototype.forEach() - MDN',
      file: 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd',
      status: 200,
      msj: 'OK'
    }
  ];

describe('isAbsolutePath', () => {
    it('isAbsolutePath is a function', () => {
        expect(typeof isAbsolutePath).toBe('function');
    });

    it('deberia retornar una ruta', async () => {
        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md';
        const datosObtenidos = await isAbsolutePath(url);
        expect(datosObtenidos).toEqual(true);
    });
});


describe('convertAbsolute', () => {
    it('convertAbsolute is a function', () => {
        expect(typeof convertAbsolute).toBe('function');
    });

    it('deberia convertir una ruta relativa a absoluta', async() => {
        const urlRelativa = 'docs/prueba.md';
        const datosObtenidos = await convertAbsolute(urlRelativa);
        expect(datosObtenidos).not.toBe('docs/prueba.md');
    });
});

describe('isExistPath', () => {

    it('isExistPath is a function', () => {
        expect(typeof isExistPath).toBe('function');
    });

    it('Verificar si existe la url en el computador', async() => {
        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md';
        const datosObtenidos = await isExistPath(url);
        expect(datosObtenidos).toEqual(url);
    });

    it('retorna error si la url no existe en la compu', async() => {
        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba2.md';
        const datosObtenidos = await isExistPath(url);
        expect(datosObtenidos).toEqual('error');
    });
});

describe('extencionArchive', () => {
    it('extencionArchive is a function', () => {
        expect(typeof extencionArchive).toBe('function');
    });

    it('verifica que el archivo sea un markdown', async() => {
        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md';
        
        const datosObtenidos = await extencionArchive(url);

        if(datosObtenidos){
            expect(datosObtenidos).toEqual(true);
        }
    });

    it('marca error si es no markdow', async() => {
        const url1 = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/thumb.png';
        const datosObtenidos = await extencionArchive(url1);
        expect(datosObtenidos).toBe('error');

    });

});


describe('extractLink', () => {
    it('extractLink is a function', () => {
        expect(typeof extractLink).toBe('function');
    });

    it('debería retornar un array con objetos', () => {
    
        const url = "C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.mkd";
        extractLink(url).then((data) => {

            expect(data).toBeInstanceOf(Array);
        });
    });

    it('debería retornar un array con objetos', () => extractLink(ruteFail).catch((err) => {
            expect(err).not.toBe();
    }));
});

describe('validateLinks',() =>{

    it('validateLinks is a function', () => {
        expect(typeof validateLinks).toBe('function');
    });

    it('Retorna un arreglo con el estatus de los links', () => validateLinks(arrayLinks).then(rest => {
            
            expect(rest).toEqual(arrayResul);
        
    }));

    it('Retorna error  en caso de no haver links', () => validateLinks(arrayLinks).catch(err => {
            
        expect(err).toEqual('error');
    
}));

});

describe('statusLinks', () => {
    it('statusLinks is a function', () => {
        expect(typeof statusLinks).toBe('function');
    });

    it('retorna datos estadisticos', () => {
        
        const stats = statusLinks(arrayResul, {validate:true});

       expect(stats).not.toBe();

    });

    it('retorna datos estadisticos', () => {
        
        const stats = statusLinks(arrayResul);

       expect(stats).not.toBe();

    });

});