# overview of site structure.

The source content for the site comprises images and excel files all stored in /source_documents.
1. parts diagrams organised to replicate the factory parts manual
2. a html overlay file that defines the label locations
3. excel files that define the parts list for each diagram and DIN specs


# Config Files
## Diagram image
the source image is taken from the 356C partns manaual available at [porsche356registry.org](https://porsche356registry.org).  This image is edited to remove the labels not required and missing labels are added.

Porsche parts manuals  are updates to previous manuals, so if a part label is missing form the 356C factory manaual it is becuase it is defined in the 356B T6 parts manual, or more likely the 356B parts manual.

source file:  /config/diagrams.pptx

## HTML overlay file
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

# process to udpate
Python scripts convert the excel files into XML files and place in the appropriate locations.  python files are located in /config/make/

Currently this is done on the local machine and pushed to Github

# ToDo
1. convert python scripts to GitHub actions



