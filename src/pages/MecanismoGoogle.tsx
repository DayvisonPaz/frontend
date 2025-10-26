import Comments from "../comments";

function MecanismoGoogle(props: any) {
  return (
    <>
      <div className="prose text-justify prose-lg text-justify flex flex-col mt-28 w-[90%] m-auto 2xl:w-[60%] xl:w-[60%]">
        
        <img
          src="https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/old%20google.avif?updatedAt=1753831831192"
          alt="Imagem antiga do Google"
          className="rounded-lg shadow-md mb-6"
        />

        <h1>Google – Ensinando a Pesquisar</h1>
        <p>
          Atualmente, o Google se tornou sinônimo de pesquisa na internet.
          Expressões como <em>“dar um Google”</em> se popularizaram,
          refletindo sua penetração cultural. No entanto, o que hoje parece
          simples era, há alguns anos, um verdadeiro desafio. Antes do Google,
          encontrar algo na internet era extremamente difícil.
        </p>

        <h2>A espinha dorsal da internet (1983)</h2>
        <p>
          A internet moderna nasceu em 1983, com a introdução do protocolo
          <strong> TCP/IP </strong>, que se tornou o padrão global de
          comunicação entre computadores. Esse protocolo permitiu a
          transferência de pacotes entre redes diferentes e possibilitou a
          conexão entre máquinas de todos os tipos.
        </p>

        <h2>DNS e URLs – Nomeando o caos (anos 80)</h2>
        <p>
          Inicialmente, acessar servidores exigia decorar endereços IP, como
          <code>192.168.1.1</code>. Para simplificar, surgiu o{" "}
          <strong>DNS (Domain Name System)</strong> e as{" "}
          <strong>URLs (Uniform Resource Locators)</strong>, permitindo que
          digitássemos{" "}
          <a href="http://www.google.com">www.google.com</a> em vez de uma
          sequência de números.
        </p>

        <h2>O surgimento do Gopher (1991)</h2>
        <img
          src="https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/gohper.png?updatedAt=1753783707751"
          alt="Sistema Gopher"
          className="my-6 rounded-md shadow"
        />
        <p>
          Criado na Universidade de Minnesota por Mark P. McCahill, o
          <strong> Gopher </strong> foi um dos primeiros sistemas de navegação
          e organização de conteúdo da internet antes da World Wide Web ganhar
          tração. Ele funcionava como uma lista hierárquica (menus em árvore),
          organizando conteúdos como:
        </p>
        <ul>
          <li>Artigos científicos</li>
          <li>Notícias</li>
          <li>Repositórios de software</li>
          <li>Diretórios de universidades</li>
        </ul>
        <p>
          Cada item do menu podia apontar para:
        </p>
        <ul>
          <li>Um arquivo de texto</li>
          <li>Um novo menu</li>
          <li>Um servidor remoto</li>
          <li>Um arquivo binário para download</li>
        </ul>

        <p>Exemplo de requisição do cliente Gopher:</p>
        <pre className="bg-gray-100 p-2 rounded-md text-green-700">
GET /artigos/historia.txt [CRLF]
        </pre>

        <p>Exemplo de resposta tabular:</p>
        <pre className="bg-gray-100 p-2 rounded-md text-green-700">
0História da Computação   /artigos/historia.txt   gopher.exemplo.com   70{"\n"}
1Artigos Recentes         /artigos/recentes/     gopher.exemplo.com   70
        </pre>

        <p>
          O Gopher representou a primeira tentativa de navegação organizada e
          semi-automatizada de recursos na internet. Ainda hoje, servidores
          Gopher continuam ativos, mantidos por entusiastas da computação retrô.
        </p>
        <h2>World Wide Web – A Web é criada (1991)</h2>
        <img
          src="https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/dns.jpg?updatedAt=1753831267397"
          alt="Primeiros conceitos da Web"
          className="my-6 rounded-md shadow"
        />
        <p>
          Embora a internet já existisse, ela era técnica, textual e restrita a
          universidades e centros de pesquisa. Isso mudou em 1991, com a
          invenção da <strong>World Wide Web</strong> por Tim Berners-Lee no CERN.
        </p>
        <p>
          Pela primeira vez, documentos puderam ser acessados por meio de{" "}
          <strong>hiperlinks</strong>, conectando informações de maneira
          intuitiva e navegável. Isso abriu a internet para além dos círculos
          acadêmicos.
        </p>

        <h2>O Archie – Primeiro mecanismo de busca (1990)</h2>
        <img
          className="w-1/2 m-7 rounded-md shadow"
          src="https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/archie.jpeg?updatedAt=1753783708207"
          alt="Primeiro buscador Archie"
        />
        <p>
          Criado por Alan Emtage na Universidade de McGill (Canadá), o{" "}
          <strong>Archie</strong> foi o primeiro sistema automatizado de
          indexação de arquivos públicos disponíveis via FTP.
        </p>
        <ul>
          <li>Indexava apenas nomes de arquivos (não o conteúdo completo).</li>
          <li>Armazenava os resultados em um banco de dados.</li>
          <li>
            Permitindo buscas por texto simples, ainda sem interface gráfica.
          </li>
        </ul>
        <p>
          Embora rudimentar, o Archie foi considerado o <em>avô</em> dos
          buscadores modernos.
        </p>

        <h2>A explosão dos navegadores (anos 90)</h2>
        <p>
          Nos anos 80 e 90, com o surgimento do <strong>Macintosh</strong> e as
          interfaces gráficas, deixou-se de depender apenas de comandos no
          teclado. Agora era possível clicar e navegar de forma mais intuitiva.
        </p>
        <p>
          Com isso, surgiu a linguagem <strong>HTML</strong>, que permitia
          estruturar documentos para exibição em navegadores.
        </p>
        <p>
          Navegadores como <strong>Mosaic</strong>, <strong>Netscape</strong> e
          <strong> Internet Explorer</strong> popularizaram a web. Pela primeira
          vez, a informação estava a um clique de distância e qualquer pessoa
          podia publicar páginas acessíveis mundialmente.
        </p>
        <p>
          O crescimento foi exponencial: de algumas dezenas de sites em 1993, a
          web passou a ter milhares e, pouco depois, milhões de páginas. Mas um
          problema surgiu: <em>como encontrar algo relevante nesse oceano de
          informação?</em>
        </p>
        <h2>Wandex – O primeiro Web Crawler (1993)</h2>
        <p>
          Em 1993, Matthew Gray (MIT) criou o <strong>Wandex</strong>, o primeiro
          robô de navegação automática (<em>crawler</em>). Seu sistema, chamado{" "}
          <em>World Wide Web Wanderer</em>, visitava sites e coletava URLs
          automaticamente, sem depender de cadastros manuais.
        </p>
        <p>
          Isso foi um avanço gigantesco: pela primeira vez, era possível{" "}
          <strong>indexar a web inteira de forma programática</strong>.
        </p>

        <h2>WebCrawler – Busca de texto completo (1994)</h2>
        <img
          src="https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/webcrawler.png?updatedAt=1753783708139"
          alt="WebCrawler"
          className="my-6 rounded-md shadow"
        />
        <p>
          Criado por Brian Pinkerton, da Universidade de Washington, o{" "}
          <strong>WebCrawler</strong> foi o primeiro buscador a indexar{" "}
          <em>todo o conteúdo das páginas HTML</em>, e não apenas títulos ou
          metadados.
        </p>
        <p>
          Pela primeira vez, era possível pesquisar palavras dentro de páginas
          completas. Isso mudou o paradigma da busca online.
        </p>
        <ul>
          <li>Interface baseada em formulários HTML.</li>
          <li>Resultados ordenados por frequência de palavras-chave.</li>
          <li>
            Introduziu o conceito de <strong>ranking</strong> baseado em
            relevância textual.
          </li>
        </ul>

        <h2>Lycos – Rankeamento estatístico (1994)</h2>
        <img
          src="https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/lycos.jpg?updatedAt=1753833420850"
          alt="Lycos"
          className="my-6 rounded-md shadow"
        />
        <p>
          Criado por Michael Mauldin na Carnegie Mellon, o{" "}
          <strong>Lycos</strong> foi pioneiro no uso de algoritmos
          estatísticos para classificar resultados.
        </p>
        <p>
          Ele atribuía pontuações com base em:
        </p>
        <ul>
          <li>Frequência de termos.</li>
          <li>Posição da palavra (título, primeiro parágrafo, etc.).</li>
          <li>Tamanho do documento.</li>
          <li>Proximidade entre palavras-chave.</li>
        </ul>
        <p>
          Foi também um dos primeiros buscadores a monetizar com publicidade,
          exibindo anúncios nas páginas de resultados.
        </p>

        <h2>Infoseek – Busca literal e direta (1994)</h2>
        <p>
          O <strong>Infoseek</strong> focava na rapidez e simplicidade.
          Funcionava por correspondência exata de termos, favorecendo:
        </p>
        <ul>
          <li>Títulos e metadados (<code>&lt;title&gt;</code>,
              <code>&lt;meta&gt;</code>).</li>
          <li>Proximidade exata das palavras.</li>
          <li>Atualização de conteúdo mais recente.</li>
        </ul>
        <p>
          Também introduziu suporte a operadores booleanos (AND, OR, NOT),
          permitindo buscas mais refinadas.
        </p>

        <h2>AltaVista – Indexação profunda (1995)</h2>
        <img
          src="https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/altavista.png?updatedAt=1753783708578"
          alt="AltaVista"
          className="my-6 rounded-md shadow"
        />
        <p>
          O <strong>AltaVista</strong> trouxe técnicas mais robustas de
          indexação e ranking, tornando-se muito popular.
        </p>
        <p>Critérios usados:</p>
        <ul>
          <li>Distribuição de palavras-chave no conteúdo.</li>
          <li>
            Peso extra para palavras em títulos, cabeçalhos e âncoras de links.
          </li>
          <li>Posicionamento e distância entre termos.</li>
          <li>Popularidade da página (estatísticas de acesso e links internos).</li>
          <li>Prioridade para páginas mais recentes e atualizadas.</li>
        </ul>

        <h2>Yahoo! – Diretório humano</h2>
        <p>
          Diferente dos anteriores, o <strong>Yahoo!</strong> começou como um
          diretório organizado manualmente por pessoas, funcionando quase como
          uma enciclopédia da web por categorias.
        </p>
        <p>
          Durante alguns anos, foi o principal portal de entrada para a
          internet. Mas, com o crescimento exponencial da web, tornou-se
          impossível manter esse sistema manual.
        </p>

        <p>
          Esses buscadores prepararam o terreno para o Google. Cada um resolvia
          parte do problema: localizar arquivos (Archie), navegar em redes
          (Gopher), rastrear páginas (Wandex), buscar por conteúdo (WebCrawler),
          classificar por relevância (Lycos, AltaVista), ou organizar por
          categorias (Yahoo!).
        </p>
        <h2>O nascimento do Google</h2>
        <p>
          Na metade dos anos 90, Larry Page e Sergey Brin, estudantes de
          Stanford, perceberam que a web funcionava como uma rede de citações,
          semelhante a artigos científicos.
        </p>
        <p>
          Em ciência, a relevância de um pesquisador não está na quantidade de
          artigos publicados, mas em quantas vezes seus trabalhos são citados.
          Page e Brin aplicaram essa lógica à web: páginas com muitos links de
          outras páginas importantes deveriam ter mais relevância.
        </p>

        <h2>PageRank – A inovação matemática</h2>
        <p>
          O <strong>PageRank</strong> foi um algoritmo baseado em{" "}
          <strong>álgebra linear</strong> e{" "}
          <strong>cadeias de Markov</strong>, que atribuía um “peso” a cada
          página de acordo com a estrutura de links da web.
        </p>

        <blockquote>
          <p>
            Uma página da web é tão relevante quanto a quantidade e qualidade
            das páginas que apontam para ela.
          </p>
        </blockquote>

        <p>De forma resumida, o cálculo era:</p>
        <pre className="bg-gray-100 p-2 rounded-md text-green-700">
PR(A) = (1 – d) + d * Σ [ PR(Ti) / C(Ti) ]
        </pre>
        <ul>
          <li><strong>PR(A):</strong> PageRank da página A.</li>
          <li><strong>d:</strong> fator de amortecimento (≈0.85).</li>
          <li><strong>Ti:</strong> páginas que apontam para A.</li>
          <li><strong>C(Ti):</strong> número de links de saída de Ti.</li>
        </ul>

        <h3>Como funcionava na prática?</h3>
        <ol>
          <li>Todas as páginas começavam com o mesmo valor inicial.</li>
          <li>Cada página redistribuía sua “importância” entre os links que continha.</li>
          <li>Após várias iterações, os valores estabilizavam.</li>
        </ol>

        <p>
          Isso dificultava manipulações: não bastava criar milhares de links
          falsos, era preciso que páginas relevantes apontassem para você.
        </p>

        <h2>Por que o Google venceu?</h2>
        <ul>
          <li>Interface limpa, sem anúncios invasivos.</li>
          <li>Carregava rapidamente, mesmo em conexões discadas.</li>
          <li>Resultados mais relevantes que os concorrentes.</li>
          <li>Escalabilidade: usava clusters baratos e eficientes.</li>
        </ul>

        <img
          src="https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/sites%20full%20of%20ads.jpg?updatedAt=1753783708941"
          alt="Concorrentes cheios de anúncios"
          className="my-6 rounded-md shadow"
        />

        <p>
          Enquanto Yahoo!, Lycos e Excite tentavam ser portais “tudo em um”
          (notícias, chat, jogos, e-mail), o Google seguiu o lema:
        </p>
        <blockquote>
          <p>“Faça uma coisa, e faça muito bem.”</p>
        </blockquote>

        <h2>SEO – Quando o mundo começou a pensar como o Google</h2>
        <p>
          Com o Google se tornando a principal porta de entrada da internet,
          surgiu o <strong>SEO (Search Engine Optimization)</strong>.
        </p>
        <p>
          Desenvolvedores e empresas precisavam adaptar seus sites para serem
          bem ranqueados:
        </p>
        <ul>
          <li>Uso correto de títulos e subtítulos (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>).</li>
          <li>URLs legíveis e otimizadas.</li>
          <li>Sitemaps e robots.txt para crawlers.</li>
          <li>Velocidade de carregamento.</li>
          <li>Conteúdo original e relevante.</li>
        </ul>

        <h2>A evolução algorítmica</h2>
        <p>
          O Google refinou constantemente seus algoritmos. Alguns marcos:
        </p>
        <table className="table-auto border-collapse border border-gray-400 my-4">
          <thead>
            <tr>
              <th className="border px-3 py-1">Nome</th>
              <th className="border px-3 py-1">Ano</th>
              <th className="border px-3 py-1">Inovação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-1">Panda</td>
              <td className="border px-3 py-1">2011</td>
              <td className="border px-3 py-1">Penalizou conteúdo duplicado e de baixa qualidade.</td>
            </tr>
            <tr>
              <td className="border px-3 py-1">Penguin</td>
              <td className="border px-3 py-1">2012</td>
              <td className="border px-3 py-1">Combateu práticas abusivas de backlink.</td>
            </tr>
            <tr>
              <td className="border px-3 py-1">Hummingbird</td>
              <td className="border px-3 py-1">2013</td>
              <td className="border px-3 py-1">Introduziu compreensão semântica.</td>
            </tr>
            <tr>
              <td className="border px-3 py-1">RankBrain</td>
              <td className="border px-3 py-1">2015</td>
              <td className="border px-3 py-1">Primeira aplicação de IA na busca.</td>
            </tr>
            <tr>
              <td className="border px-3 py-1">BERT</td>
              <td className="border px-3 py-1">2019</td>
              <td className="border px-3 py-1">Entendimento de frases com NLP.</td>
            </tr>
            <tr>
              <td className="border px-3 py-1">MUM</td>
              <td className="border px-3 py-1">2021</td>
              <td className="border px-3 py-1">IA multimodal (texto, imagem, línguas).</td>
            </tr>
          </tbody>
        </table>

        <h2>O Google hoje</h2>
        <p>
          O buscador deixou de ser apenas um índice de páginas para se tornar
          quase uma <strong>extensão da mente humana</strong>. Ele interpreta
          intenção, contexto e até comportamento do usuário.
        </p>
        <p>
          Com a integração de IA, pesquisas por voz e buscas sem clique
          (zero-click), o futuro da busca é cada vez mais contextual e
          preditivo.
        </p>

        <p className="mt-6 italic">
          Assim como o ENIAC foi a base da computação, o Google é a base da
          informação moderna. Ele conecta a mente humana ao oceano caótico de
          dados da internet em milissegundos.
        </p>

        <h2>Conclusão</h2>
        <p>
          O Google não apenas organizou a web: ele redefiniu como pensamos,
          produzimos e acessamos informação. Do Archie ao MUM, a história dos
          buscadores mostra a evolução da humanidade no desafio de organizar o
          conhecimento coletivo.
        </p>

        <p className="font-semibold">
          Se encontrou erros, imprecisões ou quer complementar, deixe seu
          comentário abaixo 👇
        </p>
      </div>

      <Comments comments={4} {...props} />
    </>
  );
}

export default MecanismoGoogle;
