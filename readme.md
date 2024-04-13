

### **SkCode** : Explorando a simplicidade de Programar em binário.


<p align="justify">
<br>
Esse pequeno projeto nasceu durante uma brincaderia com uma amiga, a qual falou que durante as férias iria se dedicar bastante nos estudos de programação, que teria como objetivo, voltar programando diretamente em binário por meio de fios, fechando curto direto na memória do computador.  Essa brincadeira me fez lembrar desse <a href="https://pt.m.wikipedia.org/wiki/Altair_8800">computador</a>, onde a programação desses equipamentos eram feitas atraves de chaves eletrônicas que representavam os bits; assim como ela disse na sua brincaderia. Confesso que como um programador com "sindrome de reinventar a roda", eu pensei: porque eu mesmo não faço um  "emulador" com essa abordagem, e a desafio à codar alguma coisa nele?. Então assim nasceu esse microprojeto. 
</p>

<br>

## Estrutura da "máquina" 

<p align="justify">
Se vc tem um pouco de conhecimento em estrutura de dados e conhecimento sobre arquitetura de computadores,  vc não terá dificuldade alguma para compreender e brincar no editor. 
</p>

<p align="justify">
O "hardware" do SkCode possue apenas um acumulador e suporte a instruções de 8 bits, sendo que os 4 bits a esquerda representam valores ou endereços, e os demais bits à direita, são para as instruções da máquina. Ela possue 2 memórias separadas<a href="https://www.google.com.br/search?q=arquitetura+de+harvard"> [ arquitetura harvard ] </a>,  data memory com 16 bytes, e Struction memory com 28 bytes. Note que o acumulador suporta 8 bits de informação, mesmo que você esteja limitado a acessar posições de 0:15 ou trabalhar com valores entre -16:15, você não terá essa limitação no acumulador se precisar salvar esse valor na data memory. Ao total a máquina é composta por um conjunto de 8 instruções sem <a href='https://www.google.com/search?q=mnem%C3%B4nicos+assembly'>mnemônicos </a>; Você precisará escrever diretamente em bínario:
</p>


## Instruções 


- IM Instruction memory 
- DM Data Memory 
- AC Acumulador 

<br>

|endereço |opcode| Descrição                                      |
|---------|------|------------------------------------------------|
| 0000    | 1010 | Salva o valor do acumulador na DM              |
| 0000    | 1111 | Carrega da DM para o acumulador                | 
| 0000    | 0101 | Soma o valor contido no endereço no acumulador |
| 0000    | 1110 | Pula para o endereço especificado no IM        |
| 0000    | 1011 | Pula, se o acumulador for igual (zero) 0       |
| 0000    | 1101 | Pula, se o acumulador for negativo             |
| 0000    | 1001 | Adiciona um valor de 4 bits no acumulador      |
| 0000    | 1100 | Negativa o valor do endereço na DM             |
  
<br>

## funcionamento
<p align="justify">
A SkCode é baseada na <a href='https://www.google.com/search?q=m%C3%A1quina+neande'>máquina neander</a> com poucas alterações em seu funcionamento, com relação a construção do "hardware", a grosso modo, seria uma versão simplificada quase nula, deixando de lado conceitos e estruturação de componentes eletrônicos <a href='https://www.google.com/search?q=sistemas+digitais'>ver</a>, aproveitando-se apenas de "como" os códigos são executados no hardware.
</p>

### **exemplo**: 6+3

<br>
<table width="100%" style="border-collapse: collapse; padding: 10px;" border>
    <th>opocodes</th>
    <th>Descrição</th>
    <tr><td>01101001</td><td>atribue 6 no AC</td></tr> 
    <tr><td>00011010</td><td>salva na DM no endereço 1</td></tr>
    <tr><td>00111001</td><td>atribue 3 no AC</td></tr>
    <tr><td>00101010</td><td>salva na DM no endereço 2</td></tr>
    <tr><td>00011111</td><td>carrega o valor 6 no AC</td></tr>
    <tr><td>00100101</td><td>soma 3 no AC</td></tr>
</table>
<br>

<p align="justify">
Muito código para quase nada! Em qualquer linguagem de programação, você pode simplesmente escrever "6+3", muito mais rápido e produtivo. É por isso que "ninguém" programa em baixo nível usando  diretamente binário. Em vez disso, utilizam linguagens de montagem como <a href='https://www.google.com/search?q=assembly'>assembly</a> que contam com um <a href='https://pt.stackoverflow.com/questions/178804/o-que-%C3%A9-assembler'>assembler</a> para fazer a "conversão" de texto para binário. Por exemplo, é possível escrever um assembler para SkCode que realize essas "conversões" seguindo os mnemônios propostos nessa tabela.
</p>

<table width="100%" style="border-collapse: collapse; padding: 10px;" border>
            <th>opocodes</th>
            <th>Descrição</th>
            <tr><td>1, 0000-1010</td><td>Salva o valor do acumulador na DM</td></tr>
            <tr><td>2, 0000-1111</td><td>Carrega da DM para o acumulador</td></tr>
            <tr><td>3, 0000-0101</td><td>Soma o valor contido no endereço no acumulador</td></tr>
            <tr><td>4, 0000-1110</td><td>Pula para o endereço especificado no IM</td></tr>
            <tr><td>5, 0000-1011</td><td>Pula, se o acumulador for igual (zero) 0</td></tr>
            <tr><td>6, 0000-1101</td><td>Pula, se o acumulador for negativo</td></tr>
            <tr><td>7, 0000-1001</td><td>Adiciona um valor de 4 bits no acumulador</td></tr>
            <tr><td>8, 0000-1100</td><td>Negativa o valor do endereço na DM</td></tr>
        </table>

<br>

<p align="justify">
O projeto está longe de ser algo com credibilidade real quanto ao funcionamento de uma CPU. No entanto, acredito que está simples o suficiente para abrir a mente de quem nunca teve contato com assembly ou mesmo com arquitetura de hardware, fornecendo insights e um norte sobre por onde começar. Por fim, quero deixar essa pequena contribuição para aqueles que gostam dessa área. 
</p>

<br>

## Considerações


<p align="justify">
Há também outras limitações que devem ser levadas em conta. Você só pode codificar 28 linhas, já que a memória de instruções é de apenas 224 bits. Em relação ao código, não espere um código bem organizado e com práticas de boa programação. Este projeto foi algo feito apenas por diversão; não pretendo, em nenhum momento, dar foco nele. Está funcionando e serve para seu propósito inicial. Agradeço se você leu o artigo até aqui e espero que tenha ganhado um pouco de conhecimento, por mínimo que seja. Thanks, see you later.
</p>

##

[acessar o editor](https://lucieudo-roberto.github.io/skcode/)
