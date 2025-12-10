// ----------------menu----------------

const icon = document.querySelector(".img-mobile");
const menu = document.querySelector(".header-menu");

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// --------------------zoom salas-----------------------

function abrirZoom(img) {
    document.getElementById("imagemZoom").src = img.src;
    document.getElementById("zoom").style.display = "flex";
}

function fecharZoom() {
    document.getElementById("zoom").style.display = "none";
}