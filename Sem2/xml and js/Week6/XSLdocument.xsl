<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head></head>
            <body>
                <table border="1">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                    <xsl:for-each select="/bookstore/book">
                        <tr>
                            <td>
                                <xsl:value-of select="title" />
                            </td>
                            <td>
                                <xsl:for-each select="author">
                                    <xsl:value-of select="."></xsl:value-of>
                                    <br></br>
                                </xsl:for-each>

                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>