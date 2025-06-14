import Comments from "../comments";
function EntendaBits(props:any) {

  return (
    <>
      <div className="text-justify flex items-center flex-col mt-11 w-[90%] m-auto 2xl:w-[60%] xl:w-[60%]"> 
      
      <h1 className="text-2xl m-9">Entendendo Bits</h1>
     <p><strong>Bit o item mais importante de toda computa&ccedil;&atilde;o.</strong></p>
<p><strong>Todo sistema, por mais complexo que seja, &eacute; sustentado por unidades fundamentais.</strong><strong><br /></strong><strong> Na biologia, temos a c&eacute;lula.</strong><strong><br /></strong><strong> Na qu&iacute;mica, o &aacute;tomo.</strong><strong><br /></strong><strong> E na computa&ccedil;&atilde;o, temos o bit.</strong></p>
<p><strong>Ele n&atilde;o ocupa espa&ccedil;o vis&iacute;vel, n&atilde;o tem forma reconhec&iacute;vel e, isoladamente, parece insignificante. Mas &eacute; o tijolo digital com o qual todos os edif&iacute;cios computacionais s&atilde;o constru&iacute;dos.</strong></p>
<p><strong>O bit &eacute; a resposta de uma d&uacute;vida que se procurava a muito tempo, foi uma resposta t&atilde;o bem colocada que mesmo ap&oacute;s d&eacute;cadas de sua descoberta continua tendo uma relev&acirc;ncia altamente importante.</strong></p>
<p><strong>Mas o que &eacute;, afinal, um bit?</strong><strong><br /></strong><strong> Como ele &eacute; representado fisicamente? Como carrega informa&ccedil;&atilde;o? Como forma, com outros bits, estruturas complexas capazes de armazenar, processar e transmitir dados?</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>L&oacute;gica Booleana&nbsp; a Origem de Tudo</strong></p>
<p><strong>A L&oacute;gica Booleana, ou &Aacute;lgebra Booleana, &eacute; um pilar fundamental da ci&ecirc;ncia da computa&ccedil;&atilde;o e da eletr&ocirc;nica digital, mas suas ra&iacute;zes s&atilde;o profundas na matem&aacute;tica e na filosofia.</strong> <strong>Em 1847, ele publicou sua obra seminal, "The Mathematical Analysis of Logic", onde prop&ocirc;s um sistema l&oacute;gico que utilizava s&iacute;mbolos e opera&ccedil;&otilde;es alg&eacute;bricas para representar proposi&ccedil;&otilde;es e infer&ecirc;ncias l&oacute;gicas. Antes dele, a l&oacute;gica era tradicionalmente estudada dentro da filosofia, com base em argumentos verbais. Boole revolucionou essa abordagem ao demonstrar que a l&oacute;gica poderia ser tratada de forma matem&aacute;tica, abrindo caminho para o desenvolvimento de sistemas l&oacute;gicos mais complexos.</strong></p>
<p><strong>&nbsp;</strong></p> 
<p><strong>Como funciona o sistema Booleano?</strong></p>
<p><strong>Tamb&eacute;m conhecido como sistema bin&aacute;rio ele tinha como regra dois valores Principais</strong></p>
<p><strong>Sim e N&atilde;o, ou verdadeiro e falso, ligado e desligado, sempre um lado oposto do outro.</strong></p>
<p><strong>Exemplo :</strong></p>
<p><strong>Sim, conclui que a resposta &eacute; verdadeiro</strong></p>
<p><strong>N&atilde;o, conclui que a resposta &eacute; falsa</strong></p>
<p><strong>Esses m&eacute;todos simples foram importantes de forma que cada valor teria apenas um tipo de valor, algo n&atilde;o poderia ser verdadeiro e falso ao mesmo tempo, apenas um tipo.</strong></p>
<p><strong>Mas voc&ecirc; deve estar se perguntando qual a import&acirc;ncia disso?</strong></p>
<p><strong>Eu responderei.</strong></p>
<p><strong>Com esse dois tipo de senten&ccedil;a &eacute; poss&iacute;vel criar um universo gigante de escolhas, por exemplo</strong></p>
<p><strong>Considera que voce tem quatro sequ&ecirc;ncias:</strong></p>
<p><strong>Sim e N&atilde;o</strong></p>
<p><strong>Sim e Sim</strong></p>
<p><strong>N&atilde;o e Sim</strong></p>
<p><strong>N&atilde;o e N&atilde;o</strong></p>
<p><strong>&Eacute; o mesmo m&eacute;todo anterior, s&oacute; que uma senten&ccedil;a a mais,&nbsp; mas voc&ecirc; pode pensar da seguinte forma</strong></p>
<p><strong>Sim e Sim, a resposta &eacute; verdadeira se as duas senten&ccedil;as forem verdadeiras</strong></p>
<p><strong>Sim e N&atilde;o, a resposta &eacute; falsa&nbsp; se uma for falsa</strong></p>
<p><strong>N&atilde;o e Sim a resposta &eacute; falsa se uma for falsa</strong></p>
<p><strong>N&atilde;o e N&atilde;o, a resposta &eacute; falsa se as duas senten&ccedil;as foram falsas</strong></p>
<p><strong>Ok, mas isso n&atilde;o ajuda muito n&eacute;? &Eacute; um pouco entender de primeira, mas j&aacute; vou esclarecer a ideia.</strong></p>
<p><strong>Imagine que voc&ecirc; pede sua m&atilde;e para ir ao cinema e ela fala a seguinte coisa: &ldquo; Se voce tiver feitos suas tarefas e limpando seu quarto sim&rdquo;</strong></p>
<p><strong>Tenho estes 2 par&acirc;metros podemos usar o m&eacute;todo acima:</strong></p>
<p><strong>Fiz as Tarefas&nbsp; | Limpei o Quarto |&nbsp; Posso sair?</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong> <strong>sim&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>sim &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>sim</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;</strong> <strong>nao &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>sim &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>nao</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;</strong> <strong>sim&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>nao &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>nao</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;</strong> <strong>nao &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>nao &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>nao</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>Essa &eacute; a l&oacute;gica booleana E tamb&eacute;m conhecida como AND, que recebe como resposta apenas se as duas op&ccedil;&otilde;es forem verdadeiras.</strong></p>
<p><strong>Existem tamb&eacute;m o modelo Ou</strong></p>
<p><strong>Que retorna verdadeiro caso uma das op&ccedil;&otilde;es seja verdadeira, exemplo:</strong></p>
<p><strong>Vamos pedir novamente a m&atilde;e para ir ao cinema, s&oacute; que agora ela est&aacute; menos rigorosa, ela diz: &ldquo;Voc&ecirc; pode ir se terminar suas tarefa ou se limpar seu quarto&rdquo;</strong></p>
<p><strong>Ent&atilde;o podemos criar a seguinte tabela</strong></p>
<p><strong>Fiz as Tarefas&nbsp; | Limpei o Quarto |&nbsp; Posso sair?</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong> <strong>sim&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>sim &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>sim</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;</strong> <strong>nao &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>sim &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>sim</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;</strong> <strong>sim&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>nao &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>sim</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;</strong> <strong>nao &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>nao &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong> <strong>nao</strong></p>
<p><strong>Esse &eacute; o sistema Ou tamb&eacute;m conhecido como OR.</strong></p>
<p><strong>Existe tamb&eacute;m o Sistema&nbsp; Not, mas &eacute; um caso espec&iacute;fico.</strong></p>
<p><strong>Ele retorna o oposto do que foi proposto, exemplo:</strong></p>
<p><strong>Not verdadeiro: retornaria falso</strong></p>
<p><strong>Not falso:&nbsp; retornaria verdadeiro</strong></p>
<p><strong>Ok, voc&ecirc; aprendeu os principais elementos do sistema booleano agora, como isso foi chegar aos computadores?</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>A quest&atilde;o primordial &eacute; quando o bit foi usado para c&aacute;lculo, inicialmente a soma.</strong></p>
<p><strong>O exemplo antes dos bits pode ser a soma de l&acirc;mpadas acesas, se voc&ecirc; tem 8 fileiras de l&acirc;mpadas, voc&ecirc; pode representar 8 n&uacute;meros se for usar apenas a contagem como argumento, agora usando o sistema bin&aacute;rio voc&ecirc; pode representar at&eacute; 255 n&uacute;meros e todas as letras do alfabeto.</strong></p>
<p><strong>Enquanto o sistema decimal usa 10 s&iacute;mbolos (de 0 a 9), o sistema bin&aacute;rio usa apenas dois: 0 e 1. Mas o princ&iacute;pio &eacute; o mesmo: cada posi&ccedil;&atilde;o representa uma pot&ecirc;ncia da base usada.</strong></p>
<p><strong>nos n&uacute;meros decimais como de 0 a 9, pense no 1 como uma l&acirc;mpada&nbsp;</strong></p>
<p><strong>Voc&ecirc; representaria&nbsp; 3 com 3 l&acirc;mpadas acesas</strong></p>
<p><strong>O 9 com 9 l&acirc;mpadas acesas</strong></p>
<p><strong>No sistema bin&aacute;rio, as casas s&atilde;o pot&ecirc;ncias de 2 ou seja:</strong></p>
<p><strong>O primeiro n&uacute;mero &eacute; 2⁰, o segundo 2&sup1;, terceiro 2&sup2;&hellip; assim adiante:</strong></p>
<p><strong>Em um sistema com 8 algoritmos ter&iacute;amos:</strong></p>
<p><strong>1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |</strong></p>
<p><strong>Assim tendo a liberdade de representar os n&uacute;meros de 0 a 255, e sendo capaz de se representar ainda mais com a adi&ccedil;&atilde;o de mais elementos.</strong></p>
<p><strong>Como representar o 3?</strong></p>
<p><strong>&nbsp;1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |</strong></p>
<p><strong>X &nbsp; X</strong></p>
<p><strong>E o 9 ?&nbsp;</strong></p>
<p><strong>&nbsp;1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |</strong></p>
<p><strong>&nbsp;X &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; X</strong></p>
<p><strong>Com isso, &eacute; poss&iacute;vel representar qualquer n&uacute;mero que conhecemos com apenas 0s e 1s, desde que usemos mais bits.</strong></p>
<table>
<tbody>
<tr>
<td>
<p><strong>Decimal</strong></p>
</td>
<td>
<p><strong>Bin&aacute;rio</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>0</strong></p>
</td>
<td>
<p><strong>0000</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>1</strong></p>
</td>
<td>
<p><strong>0001</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>2</strong></p>
</td>
<td>
<p><strong>0010</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>3</strong></p>
</td>
<td>
<p><strong>0011</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>4</strong></p>
</td>
<td>
<p><strong>0100</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>5</strong></p>
</td>
<td>
<p><strong>0101</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>...</strong></p>
</td>
<td>
<p><strong>...</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>255</strong></p>
</td>
<td>
<p><strong>11111111</strong></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Com 8 bits, conseguimos representar de 0 a 255&nbsp; o que chamamos de byte. E com mais bytes, mais n&uacute;meros, mais palavras, mais tudo.</strong></p>
<h3><strong>E as letras? Como representar palavras com n&uacute;meros bin&aacute;rios?</strong></h3>
<p><strong>A pr&oacute;xima quest&atilde;o era: como representar letras, sinais e textos com 0s e 1s?</strong></p>
<p><strong>A resposta foi criar tabelas de codifica&ccedil;&atilde;o, associando n&uacute;meros bin&aacute;rios a caracteres do alfabeto. A primeira grande padroniza&ccedil;&atilde;o foi a tabela ASCII (American Standard Code for Information Interchange), criada nos anos 1960.</strong></p>
<p><strong>Na tabela ASCII:</strong></p>
<p>&nbsp;</p>
<ul>
<li><strong><strong>A = 65 = 01000001</strong><strong><br /><br /></strong></strong></li>
</ul>
<ul>
<li><strong>B = 66 = 01000010</strong><strong><br /><br /></strong></li>
</ul>
<ul>
<li><strong>a = 97 = 01100001</strong><strong><br /><br /></strong></li>
</ul>
<ul>
<li><strong>! = 33 = 00100001</strong><strong><br /><br /></strong></li>
</ul>
<p>&nbsp;</p>
<p><strong>Assim, escrever a palavra &ldquo;Oi&rdquo; no computador &eacute;, na verdade, armazenar dois n&uacute;meros bin&aacute;rios: 01001111 (para O) e 01101001 (para i).</strong></p>
<p><strong>Mais tarde, o ASCII foi expandido para o Unicode, que suporta s&iacute;mbolos de todos os idiomas do mundo, emojis e outros caracteres especiais. Ele faz isso usando mais bits at&eacute; 16 ou 32 bits por s&iacute;mbolo.</strong></p>
<p>&nbsp;</p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>&nbsp;</strong></p>
<p>Bom, para finalizar espero que tenha aproveitado, se contém imprecisões, erros de gramáticas ou outros, comente abaixo.</p>

</div>

      <Comments comments={0} {...props} />
    </>
  );
}

export default EntendaBits;