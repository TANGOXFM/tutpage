const btn4 = document.querySelector(`.btn4`);



btn4.addEventListener(`click`, () => {
    alert('you are about to download "bot scripts.zip" click "ok" to download this file');
    btn4.style.backgroundColor = `#fa120a`;
    btn4.style.boxShadow = `0 0 50px #fa120a`;
    btn4.style.transition = `.8s ease `;
    btn4.textContent = "file downloaded";
    btn4.text.transition = ".6s ease"
});

