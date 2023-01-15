<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <table class="parts_list">
      <tr>
        <th>Ref</th>
        <th>Description</th>
        <th>Part Number</th>
        <th>Quantity</th>
        <th>Catalog</th>
        <th>DIN</th>
        <th>Size</th>
        <th>Finish</th>
      </tr>
      <xsl:for-each select="partslist/part">
        <tr class="row" id="{ref}">
          <td><xsl:value-of select="ref"/></td>
          <td id="decription"><xsl:value-of select="description"/></td>
          <td><xsl:value-of select="partno"/></td>
          <td><xsl:value-of select="qty"/></td>
          <td><xsl:value-of select="catalog"/></td>
          <td><xsl:value-of select="DIN"/></td>
          <td><xsl:value-of select="size"/></td>
          <td><xsl:value-of select="finish"/></td>
        </tr>
        <tr>
          <td colspan="8" style="background-color:#BBC7CD"><xsl:value-of select="note"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>
</xsl:stylesheet>
