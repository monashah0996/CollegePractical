<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:template match="/">

      <html>
         <head>
            <title>Title of the page</title>
         </head>

         <body>
            <h1>My name is Mona Shah</h1>
            <table border="2">
               <tr>
                  <td>Name</td>
                  <td>City</td>
                  <td>State</td>
               </tr>
               <xsl:for-each select="//customers/customer">
                  <tr>
                     <td><xsl:value-of select="name"/></td>
                     <td><xsl:value-of select="city"/></td>
                     <td><xsl:value-of select="state"/></td>
                  </tr>
               </xsl:for-each>
            </table>
         </body>

      </html>
   </xsl:template>

</xsl:stylesheet>
