document.addEventListener("DOMContentLoaded", function () {
    const items = [
        { text: "Visite nosso site", url: "", img: "./img/logos/Logo_icon.png", subitems: [] },
        {
            text: "Redes",
            url: "#",
            img: "./img/logos/arroba.png",
            subitems: [
                { text: "Instagram", url: "", img: "./img/logos/instagram.png" },
                { text: "Telegram", url: "", img: "./img/logos/trofeu.png" },
                { text: "Facebook", url: "", img: "./img/logos/facebook.png" },
                { text: "Whatsapp", url: "", img: "./img/logos/whatsapp.png" },
                { text: "X", url: "", img: "./img/logos/logo_x.png" },
            ]
        },
        { text: "Ebooks", url: "", img: "./img/logos/Ebook.png", subitems: [] },
        
    ];

    console.log(`Feito por: -----------    -------------------
        █▀▀ ▄▀█ █▄▄ █▀█ █ █▀▀ █░░ █▄▀ █▀█ █▀ ▀█▀ ▄▀█
        █▄█ █▀█ █▄█ █▀▄ █ ██▄ █▄▄ █░█ █▄█ ▄█ ░█░ █▀█ `)

    const Buttons = document.getElementById('Buttons');

    // Função para criar botões com links e subitens
    function CriarBotao() {
        items.forEach(function (item) {
            // Criar um novo botão como link
            const NovoBotao = document.createElement('a');
            NovoBotao.className = 'dynamic-button';
            NovoBotao.href = item.url;
            NovoBotao.target = '_blank';

            // Adicionar a imagem do botão, se existir
            if (item.img) {
                const imageLogo = document.createElement('img');
                imageLogo.className = 'LogoPNG';
                imageLogo.src = item.img;
                imageLogo.alt = item.text;
                NovoBotao.appendChild(imageLogo);
            }

            const buttonText = document.createElement('span');
            buttonText.className = 'button-text';
            buttonText.textContent = item.text;

            // Adicionar o texto ao botão
            NovoBotao.appendChild(buttonText);

            // Adicionar os dots ao botão
            /*
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'dots-container';
            
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('span');
                dot.className = 'dot';
                dotsContainer.appendChild(dot);
            }
            NovoBotao.appendChild(dotsContainer);
            */

            // Adicionar o botão ao contêiner
            Buttons.appendChild(NovoBotao);

            // Criar e adicionar o contêiner para subitens
            if (item.subitems.length > 0) {
                NovoBotao.addEventListener('click', function (e) {
                    e.preventDefault();
                    const subitemsContainer = this.nextElementSibling;
                    if (subitemsContainer.style.display === 'none' || subitemsContainer.style.display === '') {
                        subitemsContainer.style.display = 'block';
                    } else {
                        subitemsContainer.style.display = 'none';
                    }
                });

                const subitemsContainer = document.createElement('div');
                subitemsContainer.style.display = 'none';
                subitemsContainer.className = 'subitems-container';

                item.subitems.forEach(function (subitem) {
                    const subitemButton = document.createElement('a');
                    subitemButton.className = 'dynamic-button subitem';
                    subitemButton.href = subitem.url;
                    subitemButton.target = '_blank';

                    const subitemText = document.createElement('span');
                    subitemText.className = 'button-text';
                    subitemText.textContent = subitem.text;

                    const subitemImageLogo = document.createElement('img');
                    subitemImageLogo.className = 'LogoPNG';
                    subitemImageLogo.src = subitem.img;

                    // Adicionar o texto e a imagem do subitem
                    subitemButton.appendChild(subitemText);
                    if (subitem.img) {
                        subitemButton.appendChild(subitemImageLogo);
                    }

                    subitemsContainer.appendChild(subitemButton);
                });

                Buttons.appendChild(subitemsContainer);
            }
        });
    }

    // Chamar a função para criar botões
    CriarBotao();
});
