// Alterna a exibição do bloco de imagens
function toggleImagem(id) {
    const elemento = document.getElementById(id);
    if (!elemento) return;

    // alterna classe principal
    elemento.classList.toggle("mostrar");

    // animação quando abrir
    if (elemento.classList.contains("mostrar")) {

        const imgs = elemento.querySelectorAll("img");
        
        imgs.forEach((img, index) => {
            // estado inicial para entrada
            img.style.opacity = "0";
            img.style.transform = "translateY(20px) scale(0.95)";

            // animação com delay leve entre imagens
            setTimeout(() => {
                img.style.transition = "all 0.45s ease";
                img.style.opacity = "1";
                img.style.transform = "translateY(0) scale(1)";
            }, index * 80);
        });

    } else {
        // animação suave ao fechar
        const imgs = elemento.querySelectorAll("img");

        imgs.forEach(img => {
            img.style.transition = "all 0.35s ease";
            img.style.opacity = "0";
            img.style.transform = "translateY(10px) scale(0.96)";
        });

        // limpa animações após sumir
        setTimeout(() => {
            imgs.forEach(img => {
                img.style.opacity = "";
                img.style.transform = "";
                img.style.transition = "";
            });
        }, 350);
    }
}
