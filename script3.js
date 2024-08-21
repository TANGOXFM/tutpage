const btn3 = document.querySelector(`.btn3`);



btn3.addEventListener(`click`, () => {
    alert('click "ok" to continue to "https://discord.com/developers/applications/" \n \n (link will be opened in a new tab)');
    btn3.style.backgroundColor = `#fa120a`;
    btn3.style.boxShadow = `0 0 50px #fa120a`;
    btn3.style.transition = `.8s ease `;
    btn3.textContent = "website opened in new tab.. ";
    btn3.text.transition = ".6s ease"
});

