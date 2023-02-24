# overview of site structure.

The source content for the site comprises images and excel files all stored in /source_documents.
1. parts diagrams organised to replicate the factory parts manual
2. a html overlay file that defines the label locations
3. excel files that define the parts list for each diagram and DIN specs


# Config Files
## Diagram images
the source image is taken from the 356C partns manaual available at [porsche356registry.org](https://porsche356registry.org).  This image is edited to remove the labels not required and missing labels are added.

Porsche parts manuals  are updates to previous manuals, so if a part label is missing form the 356C factory manaual it is becuase it is defined in the 356B T6 parts manual, or more likely the 356B parts manual.

source file:  /config/diagrams.pptx

## HTML overlay files
This is an image/diagram overlay file to make the image clickable.  The image is loaded into an online site to map locations.  For example: [image-map.net](https://www.image-map.net)

Circle overlays are created for each label with the **title as the label number** (e.g. 12B).  Once complete can save the generated html code as overlay.html in the same directory as the image.

locations:
/catalog/group../Section../overlay.html
/vw_parts/group../Section../overlay.html

## Excel files
/config/partslist.xls  *defines the part finish and DIN specs*
/config/vw_parts.xls *lists VW substitue parts*

The worksheet name defines the catalog section and the Diagram label number links to the part.

/config/din_urls.xls *lists DIN specs*

# convert Excel to xml files used by javascript
`pip install -r requirements.txt`
activate env if using.  e.g. `source 356parts/bin/activate`   

source files:/conifg/make/
`xml_partslist.py`  converts /config/partslists.xlsx into catalog files & menu
`xml_vwparts.py`    converts /config/vs_parts.xslx into catalog files and menu
`xml_DINurls.py`    converts /config/din_urls.xslx into DIN references xml file

Currently this is done on the local machine and pushed to Github

# xml and xsl files
xml files are generated from excel using make files above
xsl files are the templates for xml -> html.  these are used by javascript to generate html pages from the xml, and they will not require updating unless there is web structure changes.

note:  the parts_table.xsl file needs to be compiled for browser compatibility using:
`node ~/node_modules/xslt3/xslt3.js -t -xsl:xml/parts_table.xsl -export:xml/parts_table.sef.json -nogo "-ns:##html5" -relocate:on`




# ToDo
1. convert python scripts to GitHub actions
2. convert saxton node compile to GitHub actions
s



