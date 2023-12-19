
const  {mdlinks}  = require ('../src/md-links');

describe('mdliks', () => {

  it('mdliks is a function', () => {
    expect(typeof mdlinks).toBe('function');
  });
  
  it('valida el retorno de un objeto sin validar', () => {
    const url = 'C:/Users/lesli/Desktop/LABORATORIA/DEV011-md-links/docs/prueba.md';
    const validate = false;
    
    const datosObtenidos = mdlinks(url, validate);
    expect(datosObtenidos).not.toBeNull();
  });
});
