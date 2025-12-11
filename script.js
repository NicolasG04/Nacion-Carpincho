
const header = document.querySelector("header");
const sectionNav = document.querySelector(".sectionNav");
const img = header.querySelector("img");

img.addEventListener("click", ()=> {
    if (sectionNav.classList.contains("hide")) {
        header.classList.add("fondo");
        setTimeout(() => {
            sectionNav.classList.remove("hide");
        }, 500);
    } 
    else {
        sectionNav.classList.add("hide");
        setTimeout(() => {
            header.classList.remove("fondo");
        }, 400);
    }

});


document.getElementById("top").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const orden = ["info", "not", "cont"];
function seccionActual() {
    let actual = null;
    for (let id of orden) {
        const elem = document.getElementById(id);
        const rect = elem.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            actual = id;
            break;
        }
    }
    return actual;
}
document.getElementById("pp").addEventListener("click", () => {
    const actual = seccionActual();
    let index = orden.indexOf(actual);
    index = (index - 1 + orden.length) % orden.length;
    const objetivo = document.getElementById(orden[index]);
    objetivo.scrollIntoView({ behavior: "smooth" });
});


document.getElementById("primera").addEventListener("click", ()=> {
    window.location.href = "https://www.greenpeace.org/argentina/blog/problemas/bosques/sobre-los-carpinchos-en-nordelta/?gad_source=1&gad_campaignid=22595848755&gbraid=0AAAAAD-1QVg9s59soaUmGhWVrBp0WfsJn&gclid=EAIaIQobChMIgrmmq5OukQMVAB5ECB3eDiUfEAMYAiAAEgJsT_D_BwE";
});

document.getElementById("segunda").addEventListener("click", ()=> {
    window.location.href = "https://www.clarin.com/zonales/carpinchos-nordelta-jueza-prohibio-castraciones-freno-medidas-protegerlos_0_KIjN1c0HPH.html";
});

document.getElementById("tercera").addEventListener("click", ()=> {
    window.location.href = "https://www.avnordelta.com/novedades/archivado/cómo-trabajamos-en-nordelta-para-mejorar-la-convivencia-entre-personas-y-carpinchos/";
});

document.getElementById("cuarta").addEventListener("click", ()=> {
    window.location.href = "https://www.pagina12.com.ar/871975-denuncian-envenenamiento-de-crias-de-carpinchos-en-nordelta/";
});

document.getElementById("quinta").addEventListener("click", ()=> {
    window.location.href = "https://www.lanacion.com.ar/sociedad/carpinchos-en-nordelta-una-denuncia-de-maltrato-tensiona-un-conflicto-que-lleva-anos-y-no-para-de-nid03062025/";
});

document.getElementById("sexta").addEventListener("click", ()=> {
    window.location.href = "https://www.infobae.com/sociedad/2025/07/15/por-que-los-carpinchos-viven-en-nordelta-y-como-buscan-controlar-la-cantidad-de-ejemplares/";
});