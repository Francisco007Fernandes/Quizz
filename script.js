const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Qual a melhor forma de se preparar para uma prova?",
        alternativas: [
            {
                texto: "Estudo e se esforçar!",
                afirmacao: "Parabens! Seu esforço valeu a pena. Não pare agora, continue se dedicando!"
            },
            {
                texto: "Chutar tudo e depender da sorte.",
                afirmacao: "Puts! Não foi o sdeu dia de sorte. Tente novamente ou procure um trevo de quatro folhas."
            }
        ]
    },
    {
        enunciado: "Esta chegando um importânte trabalho valendo nota, porém você tem que tomar uma difícil decisão.",
        alternativas: [
            {
                texto: "Fazer o trabalho sozinho e ter a garantia de uma boa nota?",
                afirmacao: "Antes só do que bem reprovado"
            },
            {
                texto: "Juntar com os amigos do fundão e depender dps esforços deles",
                afirmacao: "Deixe as diversões para o final. Sua história é você quem escreve, não seus colégas."
            }
        ]
    },
    {
        enunciado: "Na prova final, seus clégas estão pedindo cola, o que você fará?",
        alternativas: [
            {
                texto: "Não passar a cola e não correr o risco",
                afirmacao: "Parabéns! foi a melhor escolha"
            },
            {
                texto: "Passar a cola e correr o risco!",
                afirmacao: "Essa prova era muito importânte e bem vogiada... Você foi pego...F"
            }
        ]
    },
      
];
let atual=0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
mostraPergunta();
let atual=0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
mostraPergunta();