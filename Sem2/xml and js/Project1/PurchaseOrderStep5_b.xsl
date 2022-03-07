<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Purchase Order XSLT</title>
            </head>
            <body>
                <h2>All Item's Details</h2>
                <h5 style="color:red"><i>Red color part numbers are indicating items, which are not shipped yet</i></h5>
                <table border="2" cellpadding="3" cellspacing="3">
                    <tr>
                        <td>PurchaseOrderNumber</td>
                        <td>OrderDate</td>
                        <td>PartNumber</td>
                    </tr>
                    <xsl:for-each select="//PurchaseOrder">
                        <tr>
                            <td><xsl:value-of select="@PurchaseOrderNumber" /></td>
                            <td><xsl:value-of select="@OrderDate" /></td>
                            <td>
                                <xsl:for-each select="./Items/Item">
                                    <ul>
                                        <xsl:choose>
                                            <xsl:when test="Status!=' Shipped '">
                                                <li style="color:red">
                                                    <xsl:value-of select="./@PartNumber" />
                                                </li>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <li>
                                                    <xsl:value-of select="./@PartNumber" />
                                                </li>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </ul>
                                </xsl:for-each>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>