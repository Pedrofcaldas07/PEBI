function declararAmor() {
    let mensagem = "";
    for (let te_amo = 1; te_amo <= 100; te_amo++) {
        if (te_amo === 100) {
            mensagem += `Te amo Bibia, pra sempre 💖 (${te_amo})<br><br>
                <button onclick="this.parentElement.remove()" style='padding:12px 24px; font-size:1.1rem; border-radius:8px; border:none; background:#ff5e62; color:#fff; cursor:pointer;'>
                    Voltar para a página
                </button>`;
        } else {
            mensagem += `Te amo Bibia, pra sempre 💖 (${te_amo})<br>`;
        }
    }
    const div = document.createElement('div');
    div.innerHTML = mensagem;
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100vw";
    div.style.height = "100vh";
    div.style.background = "rgba(0,0,0,0.85)";
    div.style.color = "#fff";
    div.style.fontSize = "2rem";
    div.style.overflowY = "auto";
    div.style.zIndex = "9999";
    div.style.textAlign = "center";
    div.style.paddingTop = "40px";
    document.body.appendChild(div);
}