<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="parts-catalog">
        <xsl:for-each select="group">
            <li>
                <a href="#">
                    <xsl:value-of select="@title" />
                </a>
                <ul>
                    <xsl:for-each select="section">
                        <li>
                            <a class="vw menu-item">
                                <xsl:attribute name="title">
                                    <xsl:value-of select="@title" />
                                </xsl:attribute>
                                <xsl:attribute name="data-dir">
                                    <xsl:value-of select="@data-dir" />
                                </xsl:attribute>
                                <xsl:attribute name="data-img">
                                    <xsl:value-of select="diagram" />
                                </xsl:attribute>
                                <xsl:attribute name="data-overlay">
                                    <xsl:value-of select="areaFile" />
                                </xsl:attribute>
                                <xsl:attribute name="data-partslist">
                                    <xsl:value-of select="partslist" />
                                </xsl:attribute>
                                <span class="label">
                                    <xsl:value-of select="@title" />
                                </span>
                            </a>
                        </li>
                    </xsl:for-each>
                </ul>
            </li>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>