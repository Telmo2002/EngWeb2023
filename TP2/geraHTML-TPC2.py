import json
import sys  

def ordcidade (cidade):
    return cidade['distrito']

f = open("mapa.json",encoding = 'utf-8')
mapa = json.load(f)
cidades = mapa['cidades']
cidades.sort(key=ordcidade)
ligacoes = mapa['ligações']

pagHTML = """
<!DOCTYPE html>
<html> 
    <head>
        <title>Mapa Virtual</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        <h1>Mapa Virtual</h1>
        <table>
            <tr>
                <!--- Coluna do Índice -->
                <td width = "30%" valign ="top">
                    <a name= "indice"/>                            
                    <h3>Índice</h3>
                    <ol>
"""
distrito = ""
for c in cidades:
    if c['distrito'] != distrito:
        distrito = c['distrito']
        pagHTML += f"<p><b>Distrito:</b> {distrito} </p>"
    pagHTML += f"<li><a href='/{c['id']}'>{c['nome']}</a></li>"


pagHTML += """
</ol>
                </td>
                <!-- Coluna do conteúdo -->
                <td width = "70%">
"""
    
pagHTML += """
                </td>
            </tr>
        </table>
    </body>
</html>
"""

path = 'C:\\Users\\Utilizador\\Desktop\\Uni\\3ano\\2sem\\EW\\TPC2\\citys\\indice.html'
sys.stdout = open(path, 'w',encoding="utf-8")
print(pagHTML)


for c in cidades:
    pagHTML = """
<!DOCTYPE html>
<html>
    <head>
        <title>Mapa Virtual</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        <h1>Mapa Virtual</h1>
        <table>
            <tr>
                <!-- Coluna do índice -->
                <td width="30%" valign="top">
                    <a name="indice"/>
                    <ol>
"""
    pagHTML += f"""
                    <a name="{c['id']}"/>
                    <h3>{c['nome']}</h3>
                    <p><b>Distrito:</b> {c['distrito']}</p>
                    <p><b>População:</b> {c['população']}</p>
                    <p><b>Descrição:</b>{c['descrição']}</p>
    """
    dp = False
    for l in ligacoes:
        if c['id'] == l["origem"]:
            if dp == False:
                pagHTML += """ <p><b>Destinos Possíveis:</b></p> """
                dp = True
            for city in cidades:
                if city['id'] == l["destino"]:
                    pagHTML += f"""
                                <p><b><a href='/{city['id']}'>{city['nome']}</a>:</b> {l['distância']}km</p>   
                """
                    break
        
    if dp == False:
        pagHTML += """ <p><b>Não existem destinos disponíveis...</b></p> """  

    pagHTML += f"""
                    <adress>[<a href='/indice'>Voltar ao Índice</a>]</adress>
                    <center>
                        <hr width="80%"/>
                    </center>
    """

    pagHTML += """
                    </td>
                </tr>
            </table>
        </body>
    </html>
    """

    path = f"C:\\Users\\Utilizador\\Desktop\\Uni\\3ano\\2sem\\EW\\TPC2\\citys\\{c['id']}.html"
    sys.stdout = open(path, 'w',encoding="utf-8")
    print(pagHTML)




