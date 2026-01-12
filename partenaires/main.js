const container = document.createElement('div');
document.querySelector('hr').insertAdjacentElement('afterend', container);

/**
 * @typedef {Object} Partner 
 * @property {string} id
 * @property {string} nom
 * @property {int} formule
 * @property {string} description
 * @property {string} url
 * @property {string} raison
 * @property {string} adresse
 * @property {int} code
 * @property {string} ville
 * @property {string} image
 */
fetch('/partenaires/liste.json', { mode: 'no-cors' })
.then(response => response.json())
.then(
    /** @param {Partner[]} partners */
    (partners) => {
        let cnt = document.createElement('section');
        cnt.classList.add('flexbox');
        container.appendChild(cnt);

    // premium
    partners
        .filter(p => p.formule !== 1)
        .forEach(p => {
            const card = document.createElement('div');
            card.classList.add('media-card');
            cnt.appendChild(card);

            const img = document.createElement('img');
            img.setAttribute('src', p.image);
            card.appendChild(img);

            const title = document.createElement('h3');
            title.innerText = p.nom;
            card.appendChild(title);

            const desc = document.createElement('p');
            desc.innerHTML = p.description;
            card.appendChild(desc);
        })
    ;

    // calendrier
    cnt = document.createElement('section');
    cnt.classList.add('flexbox', 'partners');
    container.appendChild(cnt);
    partners
        .filter(p => p.formule === 1)
        .forEach(p => {
            const link = document.createElement('a');
            link.setAttribute('href', p.url ?? '#');
            link.setAttribute('title', p.nom);
            cnt.appendChild(link);

            const img = document.createElement('img');
            img.setAttribute('src', p.image);
            link.appendChild(img);
        })
    ;
})
