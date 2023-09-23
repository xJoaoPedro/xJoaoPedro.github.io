# Pet Friends
Repositório de versionamento do Pet Friends Divina.
---
# 07/08/2023
Edições na header, mapeamento leve e inserção de dropdown e collapse

---
# 08/08/2023
Mais edições na header: sombras leves, hovers, troca da logo, adição de ícone de usuário junto com a seta, adição do arquivo script com as animações para a seta.
Poucas edições no collapse de navegação, estilização provisória do dropdown do usuário.

---
# 09/08/2023
Edições na navegação, cores, tamanhos, bordas e letras. Ainda não finalizado.

---
# 13/08/2023
Criação da branch *"stickyPos"* - destinada à feature de colocar a header e a navegação com posição sticky (se mantém no topo da tela conforme o scroll).

---
# 18/08/2023
Efetuado o merge da branch stickyPos com sucesso, exceto alguns bugs de largura que já foram corrigidos¹. adicionado opções novas na aba de navegação, início de implementação dos ícones. Alteraçõs no z-index da header². 

###### 1- Largura do html, body, header e main ficavam incongruentes, com uma sobra de largura de uma scrollbar na direita da página. até agora não sei dizer ao certo qual foi a causa do problema até esta altura nunca antes visto, mas foi corrigido alterando o width de todos os elementos que possuiam 100vw para 100%.

###### 2- Alteração feita por conta da aba collapse de navegação ficar na frente do dropdown do usuário. Mudar o z-index somente do dropdown-menu não foi suficiente, foi necessário alterar da header toda. sem problemas até o momento.

---
# 20/08/2023
Adição dos ícones ao lado dos nomes dos animais, ainda não adicionado links. Estilização dos hovers dos botões da navegação.

* IMPORTANTE: início do levantamento da hipótese de trocar a parte da navegação de um collapse básico para accordion. 

    Por que? <br>
    Para que ao abrir uma opção de navegação, as outras se fechem, fazendo com que a aba de navegação não tome tanto espaço na tela.

    Dificuldades na implementação? <br>
    Pelo fato de o collapse estar altamente estilizado e ter a funcionalidade de sumir o display, algo que o accordion não tem, por isso talvez tenha de implementar ambos para que funcione.

    Talvez precise de um collapse para abrir um accordion* anotar para usar como ideia

---
# 21/08/2023
Criação da branch *"accordion"* para a funcionalidade levantada no dia *20/08/2023*.
* feito conforme especulado, um accordion dentro de um collapse, de forma mais simplificada do que o exemplo no W3School, e estilização do mesmo. alteração nos estilos do dropdown de usuário. ainda sem as opções que haviam e sem os ícones também, pois o estilo da navegação foi feita do 0, com exceção da div *"navigation"*.

---
# 22/08/2023
Estilização da navegação:
hovers, backgrounds, espaçamentos e transitions para deixar o hover mais suave

---
# 23/08/2023
Adição de mais opções nas navegações, link de Whatsapp funcionando, opções de adoção com ícones. estilização do dropdown para retirar o padding de cima e de baixo.

---
# 28/08/2023
Início da implementação do site para tamanho de tela desktop¹, navegação feita em accordion quase pronta, falta apenas as opções de trocas. tamanhos estão sendo adaptados para melhor implementação possível.

##### 1 - A implementação para desktop acabou gerando alguns problemas em medidas e proporções nos objetos da header, o que me fez optar por abandonar este passo por ora e tentar implementar posteriormente junto com a padronização dos tamanhos e objetos.

---
# 02/09/2023
Merge da branch *"setaAnimacao"* na branch accordion, para junção de ícones e funcionalidades.

### Conclusão da implementação do accordion. 
### °°°·.°·..·°¯°·._.· Merge na main!! ·._.·°¯°·.·° .·°°°

---
# 09/09/2023
Criada a branch *"desktopPort"* para fazer a adaptação e responsividade do site para telas de computador, com 120% mais sucesso do que da primeira tentativa. algumas estilizações (principalmente de navegação) estão diferentes do port para mobile, fiz propositalmente para chamar a atenção nas diversidades de telas. Header e Navegação estão praticamente prontas, falta apenas popular o corpo do site e fazer as demais páginas de visitação.

---
# 18/09/2023
Criada a página de login do site, início de estilização. hipótese: fazer um código em JS para poder validar email e senha. focar na estilização desta parte visto que faltam ideias do que botar no corpo da principal. sem portabilidade de telas, apenas desktop. Focar em fazer a adaptação.

---
# 23/09/2023
Relação das adaptações de tela das páginas:
* index : desktop, intermediária e mobile
* login : desktop, intermediária

Adição do background da página de login, alterações de cores, tamanhos e centralizações da página de login.

falta: port mobile da página de login, não tenho nem ideia de como vou fazer.