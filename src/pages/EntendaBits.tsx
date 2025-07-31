import Comments from "../comments";
import Header from "../header";
function EntendaBits(props:any) {

  return (
    <>
    <Header></Header>
      <div className="text-justify flex items-center flex-col mt-11 w-[90%] m-auto 2xl:w-[60%] xl:w-[60%]"> 
      
      <div className="prose max-w-3xl mx-auto p-6">
      <h1>Entendendo Bits</h1>
      <p>
        O <strong>bit</strong> é o item mais importante de toda a computação.
      </p>
      <p>
        Todo sistema, por mais complexo que seja, é sustentado por unidades fundamentais:
      </p>
      <ul>
        <li>Na biologia, temos a célula.</li>
        <li>Na química, o átomo.</li>
        <li>Na computação, temos o bit.</li>
      </ul>
      <p>
        Ele não ocupa espaço visível, não tem forma reconhecível e, isoladamente, parece insignificante. 
        Mas é o tijolo digital com o qual todos os edifícios computacionais são construídos.
      </p>
      <p>
        O bit foi a resposta para uma dúvida que se buscava há muito tempo. Sua simplicidade e eficiência 
        foram tão bem colocadas que, mesmo após décadas, continuam altamente relevantes.
      </p>
      <p>
        Mas afinal: <strong>o que é um bit?</strong> Como ele é representado fisicamente? 
        Como carrega informação? Como forma, com outros bits, estruturas complexas capazes de armazenar, 
        processar e transmitir dados?
      </p>

      <h2>Lógica Booleana: a Origem de Tudo</h2>
      <p>
        A <strong>Lógica Booleana</strong>, ou <strong>Álgebra Booleana</strong>, é um pilar da ciência da 
        computação e da eletrônica digital. Suas raízes estão na matemática e na filosofia.
      </p>
      <p>
        Em 1847, George Boole publicou <em>The Mathematical Analysis of Logic</em>, propondo um sistema 
        lógico que utilizava símbolos e operações algébricas para representar proposições e inferências. 
        Antes dele, a lógica era estudada na filosofia, com base em argumentos verbais. 
        Boole revolucionou esse campo ao mostrar que a lógica poderia ser tratada matematicamente, 
        abrindo caminho para os sistemas digitais.
      </p>

      <h2>Como funciona o sistema booleano?</h2>
      <p>
        Também conhecido como <strong>sistema binário lógico</strong>, ele trabalha com dois valores principais:
      </p>
      <ul>
        <li>Sim / Não</li>
        <li>Verdadeiro / Falso</li>
        <li>Ligado / Desligado</li>
      </ul>

      <h3>O operador AND (E)</h3>
      <p>
        A resposta só é <strong>verdadeira</strong> se <strong>todas as condições forem verdadeiras</strong>.
      </p>
      <p>
        Exemplo: Você pede à sua mãe para ir ao cinema. Ela diz: 
        <em>“Se você tiver feito suas tarefas <strong>e</strong> limpado seu quarto, pode ir.”</em>
      </p>

      <table className="table-auto border-collapse border border-gray-400 my-4">
        <thead>
          <tr>
            <th className="border px-2">Fiz as Tarefas?</th>
            <th className="border px-2">Limpei o Quarto?</th>
            <th className="border px-2">Posso sair?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">Sim</td><td className="border px-2">Sim</td><td className="border px-2">Sim</td></tr>
          <tr><td className="border px-2">Sim</td><td className="border px-2">Não</td><td className="border px-2">Não</td></tr>
          <tr><td className="border px-2">Não</td><td className="border px-2">Sim</td><td className="border px-2">Não</td></tr>
          <tr><td className="border px-2">Não</td><td className="border px-2">Não</td><td className="border px-2">Não</td></tr>
        </tbody>
      </table>

      <h3>O operador OR (Ou)</h3>
      <p>
        A resposta é <strong>verdadeira</strong> se pelo menos <strong>uma condição for verdadeira</strong>.
      </p>
      <p>
        Exemplo: A mãe agora diz: 
        <em>“Você pode ir se terminar suas tarefas <strong>ou</strong> se limpar o quarto.”</em>
      </p>

      <table className="table-auto border-collapse border border-gray-400 my-4">
        <thead>
          <tr>
            <th className="border px-2">Fiz as Tarefas?</th>
            <th className="border px-2">Limpei o Quarto?</th>
            <th className="border px-2">Posso sair?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2">Sim</td><td className="border px-2">Sim</td><td className="border px-2">Sim</td></tr>
          <tr><td className="border px-2">Sim</td><td className="border px-2">Não</td><td className="border px-2">Sim</td></tr>
          <tr><td className="border px-2">Não</td><td className="border px-2">Sim</td><td className="border px-2">Sim</td></tr>
          <tr><td className="border px-2">Não</td><td className="border px-2">Não</td><td className="border px-2">Não</td></tr>
        </tbody>
      </table>

      <h3>O operador NOT (Não)</h3>
      <p>
        Ele inverte o valor lógico:
      </p>
      <ul>
        <li>NOT Verdadeiro → Falso</li>
        <li>NOT Falso → Verdadeiro</li>
      </ul>

      <h2>Bits e o Sistema Binário</h2>
      <p>
        O salto fundamental ocorreu quando o <strong>bit</strong> foi usado para cálculos. 
        Enquanto o sistema decimal usa 10 símbolos (0 a 9), o sistema binário usa apenas <strong>0 e 1</strong>.
      </p>
      <p>Cada posição representa uma potência de 2:</p>
      <p>1 | 2 | 4 | 8 | 16 | 32 | 64 | 128</p>
      <p>
        Assim, com 8 bits (um <strong>byte</strong>), é possível representar os números de 0 a 255.
      </p>
      <p><strong>3 em binário:</strong> 00000011</p>
      <p><strong>9 em binário:</strong> 00001001</p>

      <h2>Representando Letras</h2>
      <p>
        Não bastava representar apenas números: era preciso representar letras e símbolos. 
        Para isso, foi criada a <strong>tabela ASCII</strong> (1960):
      </p>
      <ul>
        <li>A = 65 = 01000001</li>
        <li>B = 66 = 01000010</li>
        <li>a = 97 = 01100001</li>
        <li>! = 33 = 00100001</li>
      </ul>
      <p>
        Exemplo: a palavra <strong>“Oi”</strong> no computador é:
      </p>
      <ul>
        <li>O = 01001111</li>
        <li>i = 01101001</li>
      </ul>
      <p>
        Mais tarde, surgiu o <strong>Unicode</strong>, que expandiu a representação para todos os idiomas, 
        emojis e símbolos especiais, usando 16 ou 32 bits.
      </p>

      <p className="mt-6 font-semibold">
        Esse é o poder do bit: com apenas dois estados, ele permite construir números, palavras, imagens 
        e até mundos digitais inteiros.
      </p>
    </div>

</div>

      <Comments comments={2} {...props} />
    </>
  );
}

export default EntendaBits;