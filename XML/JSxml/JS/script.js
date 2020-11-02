window.onload = function () {
    let xmlDoc = parseXMLFile(readXMLFile("../XML/Compositori.xml"));
    let Nodes = xmlDoc.documentElement.getElementsByTagName("compositore");
}

function readXMLFile(URI) {
    try {
        let xmlHTTPreq = new XMLHttpRequest()
        xmlHTTPreq.open("GET", URI, false);
        xmlHTTPreq.send();
        return xmlHTTPreq.responseText.replace(/>\s+</g, "><");
    } catch (error) {
        console.error(error);
    }
}

function parseXMLFile(txtXML) {
    try {
        let objParser = new DOMParser();
        return objParser.parseFromString(txtXML, "text/xml");
    } catch (error) {
        console.error(error);
    }
}

function createTable(Nodes) {
    try {
        document.body.innerHTML = "<table><tr></tr></table>";
        for (let obj of Nodes[0].childNodes) {
            let td = document.createElement("td");
            td.innerText = obj.nodeName.replace("_", " ");
            document.getElementsByTagName("tr")[0].appendChild(td);
        }
    } catch (error) {
        console.error(error);
    }
}

function populateTable(Nodes) {
    try {
        for (let obj of Nodes) {
            let tr = document.createElement("tr");
            document.getElementsByTagName("table")[0].appendChild(tr);
        }
    } catch (e) {
    }
}