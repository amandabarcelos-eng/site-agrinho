// Toggle Tema Claro/Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Simulador
function calcularImpacto() {
    const producao = parseInt(document.getElementById('producao').value);
    const agua = parseInt(document.getElementById('agua').value);
    const pesticidas = parseInt(document.getElementById('pesticidas').value);

    let sustentabilidade = Math.round((producao * 0.4) + ((100 - agua) * 0.3) + ((100 - pesticidas) * 0.3));

    let mensagem = `
        <strong>Score de Sustentabilidade: ${sustentabilidade}/100</strong><br>
    `;

    if (sustentabilidade >= 80) mensagem += "🎉 Excelente! Sua fazenda está em equilíbrio sustentável.";
    else if (sustentabilidade >= 60) mensagem += "👍 Bom, mas ainda dá para melhorar o uso de recursos.";
    else mensagem += "⚠️ Atenção! É preciso reduzir o impacto ambiental.";

    document.getElementById('resultado').innerHTML = mensagem;
}

// Quiz simples
let perguntaAtual = 0;
const quiz = [
    {
        q: "Qual é a principal vantagem da rotação de culturas?",
        a: ["Aumentar o uso de agrotóxicos", "Melhorar a saúde do solo e reduzir pragas", "Diminuir a produção"],
        correta: 1
    },
    {
        q: "O que significa agricultura sustentável?",
        a: ["Produzir o máximo possível sem se preocupar com o futuro", "Equilibrar produção e preservação ambiental", "Só plantar soja"],
        correta: 1
    }
];

function iniciarQuiz() {
    perguntaAtual = 0;
    mostrarPergunta();
}

function mostrarPergunta() {
    const container = document.getElementById('quiz-container');
    const p = quiz[perguntaAtual];

    let html = `<h3>${p.q}</h3>`;
    p.a.forEach((resposta, i) => {
        html += `<button onclick="responder(${i})">${resposta}</button><br><br>`;
    });
    container.innerHTML = html;
}

window.responder = function(escolha) {
    if (escolha === quiz[perguntaAtual].correta) {
        alert("✅ Correto!");
    } else {
        alert("❌ Errado!");
    }
    perguntaAtual++;
    if (perguntaAtual < quiz.length) {
        mostrarPergunta();
    } else {
        document.getElementById('quiz-container').innerHTML = "<h3>Parabéns! Você completou o Quiz.</h3>";
    }
};
