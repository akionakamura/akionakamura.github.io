---
title: 'Finalmente uma Aplicação Realmente Útil de Deep Learning!'
date: 2017-05-29
permalink: /posts/2017/05/29/finalmente-uma-aplicação-realmente-útil-de-deep-learning-dffdb8e66f82
tags:
  - deep learning
  - machine learning
  - beer
  - fun
---

O tal do Deep Learning tem vivido um [hype](https://medium.com/@willjack/deep-learning-the-truth-behind-the-hype-7872d8aa49b9) muito grande recentemente e ele realmente tem [algumas aplicações incríveis](http://www.yaronhadad.com/deep-learning-most-amazing-applications/). Mas chegou a hora de usarmos deep learning para resolver problemas reais de pessoas reais!

![Nuvem de palavras com nomes de cervejas.](/images/p2-cloud.png)

Como alguns devem saber, eu sou cervejeiro caseiro e embora tudo ainda seja relativamente amador aqui em casa, nós gostamos de dar [nomes legais](https://untappd.com/b/why-not-brewery-banzai/1476743) às [nossas cervejas](https://untappd.com/b/why-not-brewery-belo-horizonte-at-night/1476685) e, quando possível, um [rótulo bonito](https://untappd.com/b/why-not-brewery-maracujapa/1591453). Bom, ultimamente tem faltado criatividade e está sendo difícil criar um nome pra nossa mais nova criação. Um desses dias, li um [artigo legal](http://gizmodo.com/the-first-ai-generated-paint-names-include-homestar-bro-1795367644) de uma rede neural treinada para criar nomes de tintas. Logo, eu pensei: “Pô, vamos usar o deep learning para uma **aplicação realmente** útil e criar um nome de cerveja pra mim”. Este blog post é o resultado dessa ideia.

Os Dados
------
Como em qualquer aplicação de aprendizado de máquina, ter bastante dado é fundamental. Eu tinha esperanças que seria fácil coletar dados de cerveja pela internet, mas como sempre, conseguir dados nunca é fácil. Alguns dos maiores portais de cerveja da internet como [RateBeer](https://www.ratebeer.com/), [BeerAdvocate](https://www.beeradvocate.com/) e [Untappd](https://untappd.com/user/akionakamura) não abrem seus dados ao público. Eu encontrei alguns scrapers em alguns repositórios do GitHub, mas todos desatualizados e não funcionais ou limitados apenas para coletar dados do próprio usuário. Eu iria precisar de bem mais dados do que meus próprios check-ins.

Eu encontrei dados do [CraftCans](http://craftcans.com/) com informações de 2410 cervejas em lata dos EUA, que por sorte já estão de fácil acesso no [Kaggle](https://www.kaggle.com/). Depois de algumas buscas mais profundas no Google, achei um [repositório antigo no GitHub](https://github.com/jweinstein92/Predictive_Beer_Analytics) com uma base de dados maior, com 58017 cervejas, retirados do Untappd, se não me engano. Isso seria o suficiente para começar a brincadeira.

Explorando e limpando os dados
------
A rede neural será treinada para criar o nome da cerveja um caracter por vez, considerando também o estilo da cerveja para a qual queremos criar o nome (mais detalhes da arquitetura da rede abaixo). Ao juntar os dados das duas bases encontradas, logo identifiquei dois problemas: 1) muitos nomes utilizam caracteres de alfabetos estrangeiros; 2) as bases utilizam nome de estilos levemente diferentes para um mesmo estilo de cerveja.

Tive, então, um trabalho significativo explorando os dados manualmente para identificar formas de simplificá-los. As principais limpezas foram:

1. Retirar todo o conteúdo entre parênteses dos nomes, que ajudou a tirar muitos caracteres estrangeiros e partes irrelevantes, por exemplo em “The Ugly Indian (ההודית המכוערת)”, “Crème Brûlée (2013)” e “Rail Ale Nut Brown (w/ Williamette)”.
2. Remoção de diacríticos como em “Krakonoš Světlý Ležák 12°”.
3. Algumas substituições como “w/” por “with” e vírgulas por pontos.
4. Remoção simples de alguns caracteres como <>=, etc.
5. Inspeção manual de alguns estilos de cervejas eliminando duplicatas como “American Ipa” e “American IPA”.

Por fim, o número de caracteres que compõem os nomes reduziu de 338 para 76, e um total de 52519 cervejas distribuídos em 174 estilos. Uma nuvem de palavras com os nomes das cervejas ilustra o início deste post e a seguir todos caracteres presentes na base de dados.

	!#%&'*+-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

A seguir um plot com a distribuição do número de caracteres dos nomes das cervejas [link para plot interativo](https://plot.ly/~akionakas/204/):

![Número de caracteres nos nomes das cervejas.](/images/p2-distribution.png)

Arquitetura da Rede
------
A rede neural foi criada e treinada com o [Keras](https://keras.io/) e foi inspirada na arquitetura [*char-rnn*](https://github.com/karpathy/char-rnn) que se mostra [*unreasonably efficient*](http://karpathy.github.io/2015/05/21/rnn-effectiveness/) (leia!) para problemas semelhantes. A ideia é que a rede tenta prever qual o próximo caracter dado a sequencia anterior. Suponha uma cerveja chamada “MaracuJAPA”, ao receber na entrada a sequencia “Mar” a rede deve tentar prever “a”. A previsão é retro-alimentada na rede e a sequência “ara” deve levar a rede a prever “c”. Na realidade, a sequência de entrada utilizada possui tamanho 30. A camada LSTM da rede é a principal responsável por aprender sequências.

Além disso, entramos também com a informação do estilo da cerveja. Queremos que ela sugira nomes relativamente diferentes para uma IPA e para uma Hefeweizen. Esta informação entra conectada a uma camada densa e depois concatenada com o resultado da LSTM para a posterior predição. Veja a arquitetura final da rede a seguir:

![Arquitetura da rede neural.](/images/p2-arquitetura.png)

Resultados
------
O treinamento levou 60 épocas para estabilizar, durando cerca de 350 segundos por época rodando em uma GPU GeForce GTX-650. A seguir uma tabela com alguns nomes gerados para alguns estilos de cervejas ao longo de algumas épocas para alguns níveis de “criatividade” da rede:

![Amostras de nomes.](/images/p2-sample.png)

Podemos ver que logo no começo, já após a primeira época, a rede já sabe criar alguns nomes razoáveis e com espaçamento correto, mas com erros de digitação como “Berrel” e “Imperiel” ou palavras completamente malucas como “Coueacdacillod”.

Com 20 épocas a rede já aprendeu a escrever e cria nomes interessantes como “Dead Beer” e “Spock Pog Ale”. O avanço nas épocas 40 e 60 é sutil, talvez os nomes começam a se enquadrar melhor no estilo e algumas associações comuns aparecem, como a significativa frequência do uso de café nas Porters e envelhecimento em barril das Dubbels.

É interessante notar como os nomes de “baixa criatividade” tendem a parecer com nome de estilos de cervejas, isso deve refletir o fato de que muitas cervejas utilizam o estilo no nome. Já usando uma criatividade maior, a rede gera nomes diferentes que parecem ser nomes próprios, que muitas vezes refletem nomes de cervejarias, pessoas, lugares, lúpulos.

Lembrando que a saída da rede neural é um vetor de probabilidades para cada caracter de onde amostramos aleatoriamente o próximo com esses pesos, portanto a cada rodada o nome gerado provavelmente será diferente.

Conclusão
------
Sem dúvidas a rede aprendeu a gerar nomes genéricos de cervejas, entretanto a distinção de estilo ainda não é bem definida se vermos apenas os nomes. Isso pode simplesmente ser um reflexo dos dados, talvez realmente seja difícil classificar o estilo de uma cerveja vendo apenas seu nome, principalmente em cervejas que não levam o estilo no nome (talvez um problema futuro interessante) ou o volume de dados é insuficiente para distinguir nome de cervejas em tantos estilos diferentes. Eu tinha expectativas de ver um nome “mais alemão” para uma Hefeweizen e “mais belga” para uma Dubbel, o que não foi observado. Novamente, pode ser um viés nos dados, talvez a grande maioria das cervejas dos dados seja americana, independente de seu estilo. Talvez utilizar o país em que a cerveja foi produzida como uma entrada também dê resultados interessantes (mas vai requerer ainda mais dados).

Finalmente, a ideia era dar uma nome para a nossa última criação. A cerveja é uma New England IPA, que não existe na nossa base de dados. Demos para a rede neural o mais próxima, uma American IPA. E este é o nome da nossa próxima cerveja:

	Rest In The Brew

This post was originally posted on my [Medium](https://medium.com/@akionakas/finalmente-uma-aplica%C3%A7%C3%A3o-realmente-%C3%BAtil-de-deep-learning-dffdb8e66f82).