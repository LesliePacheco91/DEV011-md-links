// eslint-disable-next-line no-undef
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const axios = require('axios');
const { error } = require('console');
const { rejects } = require('assert');


// valida si la ruta es absoluta
const isAbsolutePath = (route) => path.isAbsolute(route);

// convierte la relativa a absoluta 
const convertAbsolute = (route) => {
   return isAbsolutePath(route) ? route : path.resolve(route)
}

// valida si existe la extención en el computador
const isExistPath = (route) => {

   const verificaPath = fs.existsSync(convertAbsolute(route));

   return verificaPath ? convertAbsolute(route) :  'error';

}

// valida la extención del archivo
const extencionArchive = (route) => {

   const rutaAbsoluta =  isExistPath(route);

   const tipo =  path.extname(rutaAbsoluta);

   const arrayexten = [ '.md','.mkd','.mdwn', '.mdown','.mdtxt', '.mdtext','.markdown','.text'];

   const resultextend = arrayexten.filter(exten => exten === tipo );

   //return resultextend.length;

   if(resultextend.length > 0){
      return true;
   }else{
      return 'error';
   }

} 


 // lee el archivo md y extrae los links y retorna un arreglo de objetos
const extractLink =(route) =>  new Promise((resolve, reject) => {

   return fs.readFile(route, 'utf-8', (err, data) => {
      if (!err) {
      
         const urlRegex = /\[([^/[]+)\](\(.*\/\/[^\s]+)/g;
      const urls = data.match(urlRegex);
      
         if(urls !== null){
            const arrayMdl = urls.map((link) => {
            const arrSplit = link.split('](');
            const texto = arrSplit[0].replace('[', '');
            const href = arrSplit[1].replace(')', '');
            const file = route;
            return ({ href, texto, file });
            });
            return resolve (arrayMdl);
         }
         
      }else{
         return reject(err);
      }
   });
});

// extraer links de una .md  href, text, file, status, ok
const validateLinks = (arrObjs) => {

   const modifiedArrObjs = arrObjs.map((obj) => {
      
      return axios.get(obj.href)
         .then((response) => {
            obj.status = response.status;
            obj.msj = response.statusText;
            return obj;
         })
         .catch((err) =>{
            obj.status = !err.response ? 404 : err.response.status;
            obj.msj = 'Fail';
            return obj
         }) 
   });
      return Promise.all(modifiedArrObjs);

}

const statusLinks = (arrObjs, validate) => {

   const arraybroquen = arrObjs.filter( item => item.status === 404);
   const arrayUnique = arrObjs.filter(function(item, index, array) {
      return array.indexOf(item) === index;
    })

    if(validate){
      return (`\nTotal: ${arrObjs.length} \nUnique: ${arrayUnique.length} \nBroken: ${arraybroquen.length}`);
    }else {
      return (`\nTotal: ${arrObjs.length} \nUnique: ${arrayUnique.length}`);
    }

   
}

module.exports = { 
   isAbsolutePath,
   convertAbsolute,
   isExistPath,
   extencionArchive,
   extractLink,
   validateLinks,
   statusLinks,
}