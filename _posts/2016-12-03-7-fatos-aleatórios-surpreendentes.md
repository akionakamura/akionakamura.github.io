---
title: '7 Fatos Aleatórios Surpreendentes!'
date: 2016-12-03
permalink: /posts/2016/12/03/7-fatos-aleatórios-surpreendentes-db5ba0084950
tags:
  - math
  - statistics
  - fun
---

This post was originally posted on my [Medium](https://medium.com/@akionakas/7-fatos-aleat%C3%B3rios-surpreendentes-db5ba0084950).

Headings are cool
======

You can have many headings
======

Aren't headings cool?
------

Vamos começar com uma brincadeira rápida. Escolha uma das cores abaixo:

![Choose a color](/images/p1-cores.png)

E agora um número:

![Choose a number](/images/p1-numeros.png)

Pronto? Ótimo, agora se divirta com essa charge do Calvin :)

![Charge](/images/p1-charge.png)

Legal, né? Enfim, se fosse pra adivinhar, eu diria que você escolheu a cor azul e o número 7. Eu posso até errar, mas a estatística está do meu lado.

Recentemente compartilhei no Facebook um daqueles clássicos formulários de pesquisa do Google para que meus amigos me ajudassem em um trabalho para a faculdade. A pergunta era ainda mais simples, pedia apenas um número aleatório de 1 a 100, e muita gente ficou curiosa pra saber do que se tratava, mas eu não podia revelar para não atrapalhar o experimento. O trabalho era para uma disciplina de testes estatísticos, e nos propusemos a descobrir se humanos são bons em criar número aleatórios conscientemente ou não, para exercitar o que aprendemos durante o semestre. Achei a coisa toda tão legal que também resolvi escrever este post (prometo que não incluí nada complicado aqui). Então vamos aos fatos!

#1 Fenômeno azul-sete
------
Existe um fenômeno psicológico chamado, em inglês, Blue-seven phenomena referenciado por vários estudos, que indicam que ao serem dadas opções semelhantes às que te dei acima, as pessoas consistentemente preferem a cor azul e o número sete, bem mais do que o esperado pelo acaso.

Os primeiros estudos foram realizados na década de 70, mas até hoje não se sabe exatamente o porquê dessa preferência universal. Algumas explicações dizem que o azul é a cor favorita mais comum e uma cor neutra e “tranquilizante” em muitas culturas, enquanto o número sete é comumente considerado um número de sorte.

#2 Humanos são péssimos em gerar números aleatórios
------
Esta foi a primeira resposta que tivemos ao analisar os dados coletados para o trabalho (foram 626 observações, para o mais detalhistas). Ao gerar números realmente aleatórios entre 1 e 100, era de se esperar uma distribuição uniforme, onde todos os números fossem escolhidos um números igual (ou, pelo menos, aproximado) de vezes.

![Distribuição dos números](/images/p1-g1.png)

Veja acima como os números escolhidos ficaram distribuídos. O histograma mostra claramente uma não uniformidade e uma maior concentração nos números menores. O gráfico da direita ilustra um teste estatístico com nome de vodka, chamado Kolmogorov-Smirnov, onde quanto maior a distância entre a distribuição empírica (vermelha) da uniforme (azul), piores são os humanos em gerar números aleatórios.

#3 O 7 é o número mais aleatório de todos!
------
Nós pedimos números entre 1 e 100, e não somente até 10, mas semelhante ao Blue-seven phenomena, números terminados em 7 também foram os favoritos.

![Últimos dígito](/images/p1-g21.png)

Em 24% das vezes o número escolhido pelos voluntário terminou em 7, comparado com os 10% esperados. Vejam também que o primeiro final par aparece só em quinto na lista (o número 6), de forma que 65% dos números são ímpares. Claramente, o 7 é o número mais aleatório de todos!

#4 O seu dia de nascimento é mais importante que o ano
------
Não, não tem nada a ver com as bobagens dos horóscopos. É que por algum motivo (talvez tão misteriosos quanto a astrologia), as pessoas preferem escolher o dia em que nasceram, mas o mesmo não parece ocorrer para o ano (sim, nós também perguntamos a data de nascimento dos voluntários).

![Relação com as datas](/images/p1-g3.png)

Em 13% dos casos o número que a pessoa escolheu bateu com dia do nascimento dela, enquanto somente 1% (o que está dentro do esperado para o acaso) coincidiu com o ano de nascimento (os últimos 2 dígitos).

#5 Homens são mais aleatórios que mulheres
------
Comparando homens e mulheres, elas escolheram o próprio dia de aniversário com mais frequência que eles.


![Gênero](/images/p1-g4.png)

E com mais uma dose de vodka Kolmogorov-Smirnov, no gráfico do meio a gente vê que os homens são mais aleatórios que as mulheres (embora não com significância estatística).

#6 Paradoxo do Aniversário
------
Com as datas de aniversário de 626 pessoas em mãos, existem outros experimentos legais a fazer também. Das 626 observações que coletamos, 512 (ou 81,7%) não faziam aniversário sozinhos, um número que parece ser bem dentro do esperado.

Mas pensando ao contrário, qual o tamanho um grupo de pessoas deve ter para que, com 50% de chance, duas pessoas façam aniversário no mesmo dia? 100? 50? Apenas 23. Este é o paradoxo do aniversário, pois 23 é um número bem baixo se comparado aos 365 dias do ano. Em um grupo de 57 pessoas, a probabilidade já é de mais de 99%.

#7 Números aleatórios no título do seu post aumentam o número de clicks
------
Se você clickou nesse post esperando algo super legal e se deparou com um post de matemática, você foi uma vítima do chamado clickbaiting. Três das técnicas mais comuns de clickbaiting são posts do tipo lista e uso de números (principalmente ímpares) e de adjetivos nos títulos. Este post, afinal, não foi tão aleatório assim, mas este último item da lista, por outro lado, foi.

-----

Espero os mais math savvy me perdoem por algumas licenças poéticas matemáticas, e se quiser mais detalhes, só pedir que encaminho o trabalho de verdade :)

Acknowledgements
------
Agradeço aos meus colegas de grupo que ajudaram na tarefa.