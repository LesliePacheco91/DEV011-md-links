const path = require('path');
const fs = require('fs');
const {extencionArchive, extractLink, readArchive, validateLinks, convertAbsolute, statusLinks } = require ('./function');


const  mdlinks = (path, validate) => new Promise((resolve, reject) => {
    const typeExtention = extencionArchive(path);
    

    if(typeExtention !== 'error') {

        const AbsolutePath = convertAbsolute(path);

        readArchive(path, (error, contenido) => {
            
            if (!error) {
                const arrayUrl = extractLink(contenido, AbsolutePath); 
               
                if(arrayUrl !== 'error') {
    
                   if(validate){
                      const arrayObjet = validateLinks(arrayUrl).then(rest => rest).catch(err =>err);
                        return resolve (arrayObjet);

                    }else{
                        return resolve (arrayUrl);
                    }


                }else{
                    return arrayUrl;
                }

            }else{
                return error;
            }
            
        });
    }else{
            return reject(typeExtention);
    }
});

module.exports = {
    mdlinks
}