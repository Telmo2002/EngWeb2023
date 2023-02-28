import json


def ordcidade (cidade):
    return cidade['nome']

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

for c in cidades:
    pagHTML += f"<li><a href='{c['id']}'>{c['nome']}</a></li>"


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
                    <a name="#{c['id']}"/>
                    <h3>{c['nome']}</h3>
                    <p><b>Distrito:</b> {c['distrito']}</p>
                    <p><b>População:</b> {c['população']}</p>
                    <p><b>Descrição:</b>{c['descrição']}</p>
                    <p><b>Destinos Possíveis:</b></p>
    """

    for l in ligacoes:
        if c['id'] == l["origem"]:
            for city in cidades:
                if city['id'] == l["destino"]:
                    pagHTML += f"""
                                <p><b>{city['nome']}:</b> {l['distância']}km</p>   
                """
                    break
            

    pagHTML += f"""
                    <adress>[<a href='#indice'>Voltar ao Índice</a>]</adress>
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

    print(pagHTML)




