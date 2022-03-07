<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/">

      <html>
         <head>
            <title>Purchase Order XSLT</title>
         </head>

         <body>
            <table border="2">
               <tr>
                    <td>PartNumber</td>
                    <td>ProductName</td>
                    <td>Quantity</td>
                    <td>curr</td>
                    <td>Price</td>
                    <td>Comment</td>
                    <td>ShipDate</td>
                    <td>Status</td>
               </tr>
               <xsl:for-each select="//PurchaseOrder/Items">
                    <xsl:for-each select="./Item">
                        <tr>
                        <td><xsl:value-of select="@PartNumber"/></td>
                        <td><xsl:value-of select="ProductName"/></td>
                        <td><xsl:value-of select="Quantity"/></td>
                        <td><xsl:value-of select="Price/@curr"/></td>
                        <td><xsl:value-of select="Price"/></td>
                        <td><xsl:value-of select="Comment"/></td>
                        <td><xsl:value-of select="ShipDate"/></td>
                        <td><xsl:value-of select="Status"/></td>
                        </tr>
                    </xsl:for-each>
               </xsl:for-each>
            </table>
         </body>

      </html>
   </xsl:template>

</xsl:stylesheet>
