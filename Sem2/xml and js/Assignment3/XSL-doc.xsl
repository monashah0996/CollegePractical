<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- ITC5202 - Your name : Mona -->
<!--/*********************************************************************************
ITC5202 – Assignment 3 * I declare that this assignment is my own work in accordance with Humber Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* ITC5202: XML and JavaScript Professor: /Shahdad 
* Name: Mona Shah Student ID: N01479948 Date: 07/02/2022
********************************************************************************/ -->

   <xsl:template match="/">

      <html>
         <head>
            <title>Assignment-3</title>
         </head>

         <body>
            <h1>Mona Shah - N01479948</h1>
            <table border="2">
               <tr>
                  <td><b>ISBN</b></td>
                  <td><b>Title</b></td>
                  <td><b>Author</b></td>
                  <td><b>Type</b></td>
                  <td><b>Publisher</b></td>
                  <td><b>SellPrice</b></td>
                  <td><b>Categories</b></td>
               </tr>
               <xsl:for-each select="//books/book">
               <xsl:sort select="@ISBN" order="descending"/>
                  <tr>
                    <td><xsl:value-of select="@ISBN"/></td>
                     <td><xsl:value-of select="title"/></td>
                     <td><xsl:value-of select="author"/></td>
                     <td><xsl:value-of select="type"/></td>
                     <td><xsl:value-of select="publisher"/></td>
                     <td><xsl:value-of select="sellPrice"/></td>
                     <td><xsl:value-of select="categories"/></td>
                  </tr>
               </xsl:for-each>
            </table>
         </body>

      </html>
   </xsl:template>

</xsl:stylesheet>
