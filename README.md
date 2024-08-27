# Challenge---Decodificador

## Autor 

Vitor Silva 

### Descrição

   Site simples que criptografa e descriptografa textos de acordo com o input do usuário. Utiliza-se a linguagem javascript para desenvolvimento das funções lógicas, html para a organização dos elementos visuais, e css para estilização.


### Funcionalidades

- Criptografia : Ao clicar no botão "criptografar" com o input já digitado pelo usuário, o texto será substituido por palavras chave associadas á letras específicas sendo:

   - "e" por "enter"
   - "i" por "imes"
   - "a" por "ai"
   - "o" por "ober"
   - "u" por "ufat"
 
- Descriptografia : Ao clicar no botão "descriptografar" com o input já digitado pelo usuário, palavras chave de do texto criptografado retornarão ao seu estado normal:

   - "enter" por "e"
   - "imes" por "i"
   - "ai" por "a"
   - "ober" por "o"
   - "ufat" por "u"

 - Copia do resultado : Ao criptografar ou descriptografar o texto, aparecerá no campo de output o botão "copiar" que resgata o valor referente a descriptografia ou criptografia e guarda na área de transferencia para colagem. Pra isso se utiliza a API Clipboard.


### Relato sobre desenvolvimento do projeto

Em geral não tive muitos momentos aonde fiquei travado, os poucos que eu tive, consegui sair rapidamente com a ajuda do chatgpt, pesquisando sobre a documentação das linguagens ou apenas me dando mais tempo pra pensar fora da caixa, sair do estado de foco para um estado mais relaxado, limpando os vieses para explorar novas possibilidades para a resolução dos problemas.

Além de coisas como não conseguir ajustar o campo de output exatamente como estava no figma, criar as funções de criptografia e descriptografia e descobrir como implementar a função de copia, creio que por conta de ser algo que não foi desenvolvido nos outros projetos, o que mais tive dificuldade nesse site foi desenvolver o campo de output alternando entre o estado padrão e o novo ao clicar nos botões, não sabia exatamente como que eu colocaria dois outputs no mesmo lugar, pensava em pra mim parecia impossível, até que eu fui consultar o chat gpt e aprendi a usar o display none pra esconder o campo de output novo e mudar para display flex ao clicar em um dos botões e adicionar o display none ao campo de output inicial. 

