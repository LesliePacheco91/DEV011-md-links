const path = require('path');
const fs = require('fs');
const {extencionArchive, extractLink, validateLinks, convertAbsolute } = require ('./function');


const  mdlinks = (path, validate) => new Promise((resolve, reject) => {
    const typeExtention = extencionArchive(path);
    
    if(typeExtention !== 'error') {
       
        const AbsolutePath = convertAbsolute(path);
        
            extractLink(AbsolutePath).then((data)=>{

                if(validate){
                    const arrayObjet = validateLinks(data).then(rest => rest).catch(err =>err);
                      return resolve (arrayObjet);
  
                  }else{
                      return resolve (data);
                  }

            }).catch((err) => reject(err)); 

    }else{
            return reject(typeExtention);
    }
});

module.exports = {
    mdlinks
}