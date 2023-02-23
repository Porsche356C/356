

function onLinkClick (menuItem) {
    console.log("menu item: ", menuItem);
    const pages = document.querySelectorAll(".page");
    pages.forEach((page => {
        page.classList.remove("active");
    }))

    const items = document.querySelectorAll(".menu-item");
    items.forEach((item => {
        item.classList.remove("active");
    }))
    menuItem.classList.add("active");

    if ( menuItem.classList.contains("home-btn") ) {
        const selectedPage = [...pages].find(page=>page.classList.contains("home"));
        selectedPage.classList.add("active");
    } else {
        const selectedPage = [...pages].find(page=>page.classList.contains("diagram"));
        selectedPage.classList.add("active");
        loadAreaMap(menuItem).then(
            loadPartsList(menuItem)
        );
    }
};


function addMenuEventListeners() {
    const menuItems = document.getElementsByClassName("menu-item");
    console.log("menu: ", menuItems);
    // const menuItems = menu.getElementsByTagName("a");
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function (event) {
            event.preventDefault();
            onLinkClick(this);
            // loadAreaMap(this).then(
            //     loadPartsList(this)
            // );
        });
    }
}

function generateMenu(xml, xsl, menuID) {
    // Create an XSLT processor
    var xsltProcessor = new XSLTProcessor();
  
    // Import the stylesheet into the processor
    xsltProcessor.importStylesheet(xsl);
  
    // Transform the XML data using the stylesheet
    var fragment = xsltProcessor.transformToFragment(xml, document);
  
    // Insert the HTML into the page
    // document.getElementsByClassName("menu")[0].appendChild(fragment);
    const target = document.getElementById(menuID);
    console.log("target: ", target);
    target.appendChild(fragment);
    
}
  
  
// Load the partslist XML and XSL files, then generate the menu
const xmlMenu="xml/menu_partslist.xml";
const xslMenu="xml/menu_partslist.xsl"
loadXML(xmlMenu, function(xml) {
    loadXML(xslMenu, function(xsl) {
        generateMenu(xml, xsl, "bolt-menu");
        addMenuEventListeners();
    });
});

// Load the vw parts XML and XSL files, then generate the menu
const xmlVwMenu="xml/menu_vw.xml";
const xslVwMenu="xml/menu_vw.xsl"
loadXML(xmlVwMenu, function(xml) {
    loadXML(xslVwMenu, function(xsl) {
        generateMenu(xml, xsl, "vw-menu");
        addMenuEventListeners();
    });
});
