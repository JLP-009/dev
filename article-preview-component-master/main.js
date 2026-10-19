const shareButton = document.querySelector(".contact");
const personInfo = document.querySelector(".person-info");

shareButton.addEventListener("click", () => {
    const isActive = personInfo.classList.toggle("active");

    shareButton.setAttribute("aria-expanded", isActive);
});