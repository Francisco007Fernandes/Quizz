const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Qual a melhor forma de se preparar para uma avaliação?",
        alternativas: [
            {
                texto: "Estudo e se esforçar",
                afirmacao: "Os Estudos, o Esforço e a Dedicação é o melhor caminho"
            },
            {
                texto: "Chutar tudo e depender da sorte.",
                afirmacao: "Talvez você poderia pensar um pouco melhor"
            }
        ]
    },
    {
        enunciado: "Esta chegando um importânte trabalho valendo nota, porém você tem que tomar uma difícil decisão.",
        alternativas: [
            {
                texto: "Você fará o trabalho antes de tudo e ter a garantia de uma boa nota?",
                afirmacao: "Sempre avante!"
            },
            {
                texto: "Você ira deixar para ultima hora?",
                afirmacao: "Deixe as diversões para o final. Faça seus deveres antes de tudo."
            }
        ]
    },
    {
        enunciado: "Na prova final, seus colégas estão pedindo cola, o que você fará?",
        alternativas: [
            {
                texto: "Não passar a cola e não correr o risco",
                afirmacao: "Parabéns! foi a melhor escolha"
            },
            {
                texto: "Passar a cola e correr o risco!",
                afirmacao: "Não foi dessa vez."
            }
        ]
    },
      
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Vamos ver seus resultados";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();