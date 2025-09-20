const dateFormater = new Intl.DateTimeFormat("fr",{dateStyle: "full"});
document.querySelectorAll('time').forEach(e => {
    const t = e.getAttribute('datetime');
    if (t === null || t === "" || t === "0") {
        return;
    }
    e.innerHTML = dateFormater.format(new Date(t));
});