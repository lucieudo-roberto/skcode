

#### uma pequena história

Esse pequeno projeto nasceu durante uma brincaderia com uma amiga, a qual falou que durante as férias iria se dedicar bastante nos estudos de programação, que teria como objetivo, voltar programando diretamente em binário por meio de fios, fechando curto direto na memória do computador.  Essa brincadeira me fez lembrar desse [COMPUTADOR](https://pt.m.wikipedia.org/wiki/Altair_8800), a programação desses equipamentos eram feitas atraves de chaves eletrônicas que representavam os bits; assim como ela indagou na sua brincaderia. Confesso que como um programador com sindrome de reinventar a roda, eu pensei: porque eu mesmo não faço um  "emulador" com essa abordagem e a desafio à codar alguma coisa nele?. Então assim nasceu esse microprojeto. 

> obs: ele está cheio de falhas e o códico está porco, mas está funcional. :) 

#### como programar em skCode 

> obs: SkCode foi um nome pensando as pressas, surgio apenas para por algo na tag `<title>`.


Se vc sabe um pouco de estrutura de dados e tem um pouco de conhecimento sobre arquitetura de computadores, vc não terá dificuldade alguma para brincar no editor.  O "hardware" do SkCode possue apenas um ``acumulador/registrador`` e suporte a instruções de 8 bits, sendo que os 4 bits a esquerda representam ``valores&endereços``, e o demais bits são para as instruções, possue 2 memórias separadas [arquitetura harvard ](https://pt.m.wikipedia.org/wiki/Arquitetura_Harvard#:~:text=%C3%89%20uma%20arquitetura%20de%20computador,rela%C3%A7%C3%A3o%20%C3%A0%20mem%C3%B3ria%20de%20programa.
),  ( data memory: 16 bytes ) e Struction memory ( 28 bytes ). Vale resaltar que o ``acumulador`` suporta 8 bits/1 byte , no qual não te limita a trabalhar com valores de 0-16, mas de 0-32, só ter cuidado com o uso da memória, já que você só pode ter 16 endereços mapeados nas instruções.

#### instruções 

> **00001010** 
> Esse opcode aloca a valor contido no acumulador no endereço presente na proxima linha .
> 
   **00001111**
> Opcode para carregar o valor contido no endereço passado da proxima linha, no acumulador.
> 
   **00000101**
> Soma o valor contido no endereço 
> 
   **00001110**
>Faz um jump para um endereço 
>
   **00001011**
> Faz um jump se o acumulador tiver valor igual a zero
> 
   **00001101**
>jump se o acumulador for negativo
>
> **00001001**
> Esse opcode aloca o valor da proxima instrução ao acumulador,  vale notar, que, apesar do acumulador suporta 8bits, essa instrução adiciona apenas valores de 4bits no acumulador. 
>
> **00001100**
> Esse opcode faz a negação do valor que está no endereço apontando, 2 -> -1, 4 -> -3 


###
#### Considerações

Há tambem outras limitações que devem ser levadas em conta. Você so pode codificar 28 linhas, já que a memoria de instruções é de apenas 224 bits . 

Quero reforçar que esse projeto, em nenhum momento foi considerado algo consiso e que va trazer algum tipo de benefício intelectual para quem usar ou ler esse "artigo", dito isso, se "divirta" e explore o códico e veja da maneira mais simples possível de como uma cpu funciona . 


[Abrir o projeto](url)
