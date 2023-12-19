const {isAbsolutePath, convertAbsolute, isExistPath,  extencionArchive, readArchive, extractLink, validateLinks } = require ('../src/function');



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
        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba1.md';
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

describe('readArchive', () => {

    it('readArchive is a function', () => {
        expect(typeof readArchive).toBe('function');
    });

    it('retorna el contenido del archivo',done => {
        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md';

        function callback(error, data) {
            if (error) {
              done(error);
              expect(data).toBeNull();
              //return;
            }
            try {
              expect(data).not.toBeNull();
              done();
            } catch (error) {
              done(error);
            }
          }
        
          readArchive(url,callback);
    });
    
});

/*
describe('extractLink', () => {
    it('extractLink is a function', () => {
        expect(typeof extractLink).toBe('function');
    });

    it('retorno de un objeto',() =>{
        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md';
        readArchive(url,(error, contenido)=>{
            if (!error) {
                const result = extractLink(url, contenido);
                expect(result).toBeInstanceOf(Array);
            }
        });
        
    });

   /* it('retorno de un objeto',() =>{
        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md';
        readArchive(url,(error, contenido)=>{
            if (!error) {
                const result = extractLink(url,contenido);
                //console.log(result);
                expect(result).toBeInstanceOf(Array);
            }
        });
        
    });
*/
    /*it('retorno error en caso de no haber links',() =>{

        const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md';
        readArchive(url,(error, contenido)=>{
            if (!error) {
                const result = extractLink(url,contenido);
                //console.log(result);
                expect(result).toBeInstanceOf(error);
            }
        });
        
    });*
});
*/
describe('validateLinks',() =>{

    it('validateLinks is a function', () => {
        expect(typeof validateLinks).toBe('function');
    });

});
