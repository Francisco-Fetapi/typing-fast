# Ideias da Aplicação

- [x] Deve ter uma página apenas.
- [x] Deve ter um header com as info do jogo: Tempo, letras apanhadas, hight score(num de letras apanhadas)
- [x] Timer antes do comeco do jogo. `O jogo comeca em: 3,2,1`
- [x] As cores devem ser geradas aleatoriamente. Use as do MUI.
- [x] Deve ter um limite de letras caidas, depoi GAMEOVER.
- [x] As letras devem cair em momentos aleatorios.
- [] Ao clicar numa letra eliminar a correspondente na tela.
- [] Deve ter um sistema de score.
- [x] A velocidade de queda deve aumentar com o tempo.
- [] As informações secundárias, como o new score, por exemplo devem ser exibidas em um backdrop
- [x] O jogo deve ser infinito, nunca deve chegar ao fincal.
- [x] O único evento que deve finalizar o jogo é se o úsuario atingir o limite máximo de letras caídas.
- [] Aumentar numero de bubbles a cair a cada minuto.
- [] O jogo deve ter alguns eventos de recompensa.
- [] Deve ter um hook para monitorar os eventos especiais. useSpecialBubblesAndEvents.

1. Letras mágicas e Eventos especiais
   1.1 Quando clicada resetar tela (apagar todas as bubbles)

   1.2 Quando clicada pausar jogo durante 5s, as letras param de cair.

   1.3 Se as vogais aeiou estiverem na tela apagar todas as vogais presentes.

   1.4 Quando clicada criar uma linha e diminuir a velocidade do tempo das teclas que a atravessarem

   1.5 Quando clicada criar uma linha na parte inferior da tela e impedir que as teclas caiam.

   1.6 Quando clicada resetar numero de letras caidas.

   1.7 Uma ball que muda a sua letra 3 a 3 segundos.

[] - Qtd balls apanhadas num segundo em real time. clean per second.

## NOTAS

`NOTA 1:`: As constantes do jogo devem estar no store para que possam ser alteraveis por qualquer componente, assim, os efeitos serão mais fáceis de serem implementados. Coisas como _tempo de queda_,_lista de letras na tela_,_timer_,_timer paused_,_letras caidas_ e mais devem estar no store.
