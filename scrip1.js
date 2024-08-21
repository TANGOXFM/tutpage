const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, () => {
    alert('click "ok" to continue to "https://nodejs.org/en" \n \n (link will be opened in a new tab)');
    btn.style.backgroundColor = `#fa120a`;
    btn.style.boxShadow = `0 0 50px #fa120a`;
    btn.style.transition = `.8s ease `;
    btn.textContent = "website opened in new tab.. ";
    btn.text.transition = ".6s ease"
});

