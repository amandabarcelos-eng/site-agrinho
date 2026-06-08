function atualizar(slider) {
    const id = slider.id;
    let spanId = '';
    if (id === 'producao') spanId = 'val-p';
    if (id === 'agua') spanId = 'val-a';
    if (id === 'pesticidas') spanId = 'val-pe';
    document.getElementById(spanId).textContent = slider.value;
}

function calcular() {
    const p = parseInt(document.getElementById('producao').value);
    const a = parseInt(document.getElementById('agua').value);
    const pe = parseInt(document.getElementById('pesticidas').value);

    const score = Math.round((p * 0.4) + ((100 - a) * 0.35) + ((100 - pe) * 0.25));

    let msg = `<strong>Score de Sustentabilidade: ${score}/100</strong><br><br>`;
    if (score >= 80) msg += "🎉 Excelente! Fazenda sustentável.";
    else if (score >= 60) msg += "👍 Bom resultado!";
    else msg += "⚠️ Alto impacto ambiental.";

    document.getElementById('resultado').innerHTML = msg;
}
