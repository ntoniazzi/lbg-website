(() => {
    const server = "submit-form.com";
    const code = "8By3kH9LV";
    const form = document.querySelector("form.contact-form");
    if (null === form) {
        return;
    }

    const dialogSuccess = document.getElementById('message-sent');
    const dialogError = document.getElementById('message-sent');
    if (null === dialogSuccess || null === dialogError) {
        return;
    }

    const button = form.querySelector('[type="submit"]');
    const label = button.innerHTML;
        
    dialogSuccess.addEventListener('close', () => {
        button.removeAttribute('disabled');
        button.innerHTML = label;
        form.reset();
    });

    dialogError.addEventListener('close', () => {
        button.removeAttribute('disabled');
        button.innerHTML = label;
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        button.setAttribute("disabled", "disabled");
        button.innerHTML = "Envoi en cours…";

        const url = `https://${server}/${code}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: form.elements.nom.value,
                    email: form.elements.email.value,
                    message: form.elements.message.value,
                    _honeypot: form.elements._honeypot.value,
                    _email: {
                        from: form.elements.nom.value,
                        subject: '[lavalbournygym] Contact - Nouvel envoi',
                    }
                })
            });


            if (!response.ok) {
                throw new Error();
            }

            dialogSuccess.showModal();
        } catch (error) {
            dialogError.showModal();
        };
    });
})();