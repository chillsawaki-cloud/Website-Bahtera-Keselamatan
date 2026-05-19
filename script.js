function pesan() {

    const tombol = document.querySelector("button");

    tombol.innerHTML = "Loading...";

    setTimeout(() => {

        tombol.innerHTML = "Gabung Sekarang";

        alert("Terima kasih sudah tertarik bergabung!");

    }, 2000);

}
const topBtn = document.getElementById("topBtn");

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};
window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.backgroundColor = "rgba(0, 0, 139, 0.9)";

    } else {

        nav.style.backgroundColor = "darkblue";

    }

});
const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", function () {

    hiddenElements.forEach(el => {

        const posisi = el.getBoundingClientRect().top;

        if (posisi < window.innerHeight - 100) {

            el.classList.add("show");

        }

    });

});