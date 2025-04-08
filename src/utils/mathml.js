function convertMathMLStringToElement(mathMLString) {
    const sanitizedMathML = mathMLString
        .replace(/«/g, '<')
        .replace(/¨/g, '"')
        .replace(/»/g, '>');

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(sanitizedMathML, "application/xml");
    return xmlDoc.documentElement;
}

// Function to convert a text string with MathML substrings to HTML
function convertTextWithMathML(textWithMathML) {
    const mathMLRegex = /«math[^»]*»(.*?)«\/math»/g;

    const htmlString = textWithMathML.replace(mathMLRegex, (match, mathMLContent) => {
        const mathMLElement = convertMathMLStringToElement(" «math xmlns=¨http://www.w3.org/1998/Math/MathML¨»" +mathMLContent + "«/math»");
        if (mathMLElement) {
            const tempDiv = document.createElement('div');
            tempDiv.appendChild(mathMLElement.cloneNode(true));
            return tempDiv.innerHTML;
        } else {
            return match; // Return the original string if MathML conversion fails
        }
    });

    return htmlString;
}

export default convertTextWithMathML;
