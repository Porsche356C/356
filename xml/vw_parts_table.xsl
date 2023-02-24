<?xml version="1.0" encoding="UTF-8"?><xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ixsl="http://saxonica.com/ns/interactiveXSLT" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" extension-element-prefixes="ixsl" version="2.0">

  <xsl:param name="din-file" select="'din_specs.xml'"/>
  <!-- <xsl:param name="din-file"/> -->
  <xsl:variable name="dins" select="document($din-file)/dins"/>
              

   <xsl:template match="/">
   <xsl:result-document href="#table-partslist" method="ixsl:replace-content"> 
 
    <table class="parts_list" id="partslist">
      <tr>
        <th>Ref</th>
        <th>Description</th>
        <th>Part Number</th>
        <th>Quantity</th>
        <th>Website</th>
        <th>Image</th>
      </tr>
          
      <xsl:for-each select="partslist/part">
        <tr class="row" id="{ref}">
          <td><xsl:value-of select="ref"/></td>
          <td id="decription"><xsl:value-of select="description"/></td>
          <td><xsl:value-of select="partno"/></td>
          <td class="centre"><xsl:value-of select="qty"/></td>
          <td><a href="{website}" target="_blank">website</a></td>
          <td id="image"><img src="{image}"></img></td>
        </tr>
        <tr>
          <td colspan="6" style="background-color:#BBC7CD">note: <xsl:value-of select="note"/></td>
        </tr>
        <tr><td colspan="6"></td></tr>
      </xsl:for-each>
    </table>
  </xsl:result-document>
  </xsl:template>
</xsl:transform>
