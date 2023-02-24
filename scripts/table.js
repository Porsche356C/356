const xmlDins = "xml/din_specs.xml";
const xslPartsList = "xml/parts_table.sef.json";
const xslVwParts = "xml/vw_parts_table.sef.json";


function generateTable(xmlPartsList, xslPartsList, xmlDins) {
  
  var parameters = [{name: "din-file", value: xmlDins}];
  SaxonJS.setLogLevel(10);

  var result = SaxonJS.transform({
    stylesheetLocation: xslPartsList,
    sourceLocation: xmlPartsList
    // ,parameters: parameters
    // ,destination: "document"
    ,logLevel: 10
  });
  
  console.log(result);
  var fragment = result.principalResult;
  console.log(fragment);

 
    // Create an XSLT processor
    // var xsltProcessor = new XSLTProcessor();
    // var fragment = processor.transformToFragment(xmlPartsList, xslPartsList, xmlDins);
    // var fragment = SaxonJS.transform(xmlPartsList, xslPartsList, xmlDins);
    

  
    // Import the stylesheet into the processor
    // xsltProcessor.importStylesheet(xsl);
  
    // Transform the XML data using the stylesheet
    // var fragment = xsltProcessor.transformToFragment(xml, document);

    // const resultDocument = xsltProcessor.transformToDocument(xml);
    // const serializer = new XMLSerializer();
    // const fragment = serializer.serializeToString(resultDocument);
  
  
    // Insert the HTML into the page
    // document.getElementById("table-partslist").replaceChildren();
    // document.getElementById("table-partslist").appendChild(fragment);
}
  

function loadPartsList(menuItem) {
  const dir = menuItem.getAttribute("data-dir");
  const xmlPartsList = dir + menuItem.getAttribute("data-partslist");
 
  if ( menuItem.classList.contains("vw") ) {
    console.log("VW menu item");
    generateTable(xmlPartsList, xslVwParts);
  } else {
    console.log("parts list menu item");
    generateTable(xmlPartsList, xslPartsList, xmlDins);
  }
 
  // Load the XML and XSL files, then generate the table
  // loadXML(xmlPartsList, function(xml) {
    // loadXML(xslPartsList, function(xsl) {
  // generateTable(xmlPartsList, xslPartsList, xmlDins);
    // });
  // });
}  
  
  
  