const englishCode = "en-UK";
const frenchCode = "es-FS";

function getAboutUsLink(language){
    switch(language.toLowerCase()){
        case englishCode.toLowerCase():
            return '/about-us';

        case frenchCode.toLowerCase():
            return '/-a props de nous';
    }
    return ''
}

module.exports = getAboutUsLink;