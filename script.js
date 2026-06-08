document.addEventListener('DOMContentLoaded', () => {
    // Atualiza valores dos sliders em tempo real
    const sliders = ['producao', 'agua', 'pesticidas'];
    sliders.forEach(id => {
        const slider = document.getElementById(id);
        const span = document.getElementById(`val-${id}`);
        if (slider && span) {
            slider.addEventListener('input', () => {
                span.textContent = slider.value;
            });
        }
    });
});

function calcularImpacto() {
    const producao = parseInt(document.getElementById('producao').value);
    const agua = parseInt(document.getElementById('agua').value);
    const pesticidas = parseInt(document.getElementById('pesticidas').value);

    const score = Math.round((producao * 0.4) + ((100 - agua) * 0.35) + ((100 - pesticidas) * 0.25));

    let msg = `<strong>Score de Sustentabilidade: ${score}/100</strong><br><br>`;

    if (score >= 80) msg += "🎉 Excelente! Fazenda em equilíbrio perfeito.";
    else if (score >= 60) msg += "👍 Bom resultado, mas ainda pode melhorar.";
    else msg += "⚠️ Atenção! Alto impacto ambiental.";

    document.getElementById('resultado').innerHTML = msg;
}
