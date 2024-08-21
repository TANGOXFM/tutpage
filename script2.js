const btn2 = document.querySelector(`.btn2`);



btn2.addEventListener(`click`, () => {
    alert('click "ok" to continue to "https://code.visualstudio.com/" \n \n (link will be opened in a new tab)');
    btn2.style.backgroundColor = `#fa120a`;
    btn2.style.boxShadow = `0 0 50px #fa120a`;
    btn2.style.transition = `.8s ease `;
    btn2.textContent = "website opened in new tab..";
    btn2.text.transition = ".6s ease"
});

