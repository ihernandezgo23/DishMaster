<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="LANGILEAK">
        <html>
            <style>
                @font-face {
                font-family: MonoBold;
                src: url(/fonts/SpaceMono-Bold.ttf);
                }
                @font-face {
                font-family: MonoBoldItalic;
                src: url(/fonts/SpaceMono-BoldItalic.ttf);
                }
                @font-face {
                font-family: MonoItalic;
                src: url(/fonts/SpaceMono-Italic.ttf);
                }
                @font-face {
                font-family: MonoRegular;
                src: url(/fonts/SpaceMono-Regular.ttf);
}
                html{
                    background-color: #FFBD59;
                    font-family: MonoRegular;
                }
                h1{
                    font-family: MonoBold;
                    font-size: 2.7em;
                }
                table{
                    background-color: white;
                    border: 2px solid black;
                    border-radius: 15px;
                }
                #izena{
                    color: white;
                    background-color: #222222;
                }
            </style>
            <head>
                <title>LANGILEAK</title>
            </head>
            <body>
                <center>
                    <h1 style="background-color: #FFBD59; border-radius: 10px; width:50%; color: black;">DISH MASTER - LANGILEEN TAULA</h1>
                    <table style="width:50%; text-align:center">
                        <xsl:for-each select="DATA_RECORD">
                        <tr bgcolor="#a2ab6f">
                            <td rowspan="2"  bgcolor="white" ><img style="border: 1px solid black; width: auto;" src="{./ARGAZKIA}" width="80" height="100"/></td>
                            <td id="izena"><xsl:value-of select="./IZENA"/></td>
                            <td id="izena"><xsl:value-of select="./ABIZENA"/></td>
                        </tr>
                        <tr>
                            <td><xsl:value-of select="SEXUA"/></td>
                            <td><b>Jaiotze data: </b><xsl:value-of select="JAIOTZE_DATA"/></td>
                        </tr>
                        <tr bgcolor="#ffffff">
                        </tr>
                        <tr>
                            <td>Lana: <xsl:value-of select="MOTA"/>a</td>
                        </tr>
                        <tr bgcolor="#ffffff">
                            <td>Soldata: <xsl:value-of select="SOLDATA"/>€</td>
                        </tr>
                        <tr bgcolor="#FFBD59" ><td colspan="3" height="7px"></td></tr>
                    </xsl:for-each>
                    </table>
                </center>
                <p style="text-align: center;">Apirila 24 - 13:55 Bertsioa</p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>