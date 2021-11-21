const headParts = document.querySelectorAll(".paraHead");
headParts.forEach(headPart => {
    headPart.addEventListener("click",event => {
        headPart.classList.toggle("active");

    });
});