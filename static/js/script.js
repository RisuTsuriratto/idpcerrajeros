/**
 * General script file.
 * Defined functionalities:
 *  - Icon changes
 *  - Img replacements
 */

/**
 * Splits a given string (URL) and returns it's last element.
 * 
 * @param {String} str - String to be operated, expects a URL/path.
 * @param {String} splitChar - Character to be used for the split operation.
 */
const getLastItemFromSplit = function(str, splitChar) {
    return str.split(splitChar).slice(-1)[0];
}

let imgMallorca = document.getElementById("imgMallorca");
let cleanUrl = imgMallorca.src.split(getLastItemFromSplit(imgMallorca.src, "/"))[0];


let comarcas = document.getElementsByClassName("comarcas");
for (let comarca of comarcas) {
    let titulo = comarca.childNodes[0].textContent.trim();
    comarca.addEventListener("click", function() {
        // ** Imagen *
        switch(titulo) {
            case "Serra de Tramuntana":
                if ("Tramuntana.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                    imgMallorca.src = cleanUrl + "Tramuntana.png";
                }
                else {
                    imgMallorca.src = cleanUrl + "MapaMallorca.png";
                }
                break;
            case "Palma de Mallorca":
                if ("Palma.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                    imgMallorca.src = cleanUrl + "Palma.png";
                }
                else {
                    imgMallorca.src = cleanUrl + "MapaMallorca.png";
                }
                break;
            case "Comarca del Raiguer":
                if ("Raiguer.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                    imgMallorca.src = cleanUrl + "Raiguer.png";
                }
                else {
                    imgMallorca.src = cleanUrl + "MapaMallorca.png";
                }
                break;
            case "Pla de Mallorca":
                if ("Pla.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                    imgMallorca.src = cleanUrl + "Pla.png";
                }
                else {
                    imgMallorca.src = cleanUrl + "MapaMallorca.png";
                }
                break;
            case "Comarca de Migjorn":
                if ("Mitjorn.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                    imgMallorca.src = cleanUrl + "Mitjorn.png";
                }
                else {
                    imgMallorca.src = cleanUrl + "MapaMallorca.png";
                }
                break;
            case "Comarca de Llevant":
                if ("Llevant.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                    imgMallorca.src = cleanUrl + "Llevant.png";
                }
                else {
                    imgMallorca.src = cleanUrl + "MapaMallorca.png";
                }
                break;
            default:
                imgMallorca.src = cleanUrl + "MapaMallorca.png";
        }

    });
}
