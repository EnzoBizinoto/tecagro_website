function loadHomePageContent() {
    if (document.body.classList.contains('home-page')) {
        document.getElementById('hero-title').innerText = siteContent.home.hero.title;
        document.getElementById('hero-description').innerText = siteContent.home.hero.description;

        document.getElementById('mission-title').innerText = siteContent.home.mission.title;
        document.getElementById('mission-text').innerText = siteContent.home.mission.text;

        document.getElementById('solutions-intro-title').innerText = siteContent.home.solutions.introTitle;
        document.getElementById('solutions-intro-text').innerText = siteContent.home.solutions.introText;

        siteContent.home.solutions.items.forEach(item => {
            document.getElementById(`${item.id}-title`).innerText = item.title;
            document.getElementById(`${item.id}-description`).innerText = item.description;
            document.querySelector(`.solution-item img[alt*="${item.title.split(' ')[0]}"]`).src = item.image;
        });

        document.getElementById('fleet-intro-title').innerText = siteContent.home.fleet.introTitle;
        document.getElementById('fleet-intro-text').innerText = siteContent.home.fleet.introText;

        siteContent.home.fleet.items.forEach(item => {
            document.getElementById(`drone-${item.id}-title`).innerText = item.title;
            document.getElementById(`drone-${item.id}-description`).innerText = item.description;
            document.querySelector(`.fleet-item img[alt*="${item.title.split(' ')[2]}"]`).src = item.image;
        });
    }
}

function loadDronesPageContent() {
    if (document.body.classList.contains('drones-page')) {
        const ourFleetSection = document.querySelector('.our-fleet');
        if (ourFleetSection) {
            let htmlContent = `
                <div class="container">
                    <h2 id="drones-page-title">${siteContent.dronesPage.title}</h2>
                    <p id="drones-page-intro">${siteContent.dronesPage.introText}</p>
                    <div class="fleet-grid">
            `;

            siteContent.dronesPage.drones.forEach(drone => {
                htmlContent += `
                    <div class="fleet-item">
                        <img src="${drone.image}" alt="${drone.name}">
                        <h3>${drone.name}</h3>
                        <p>${drone.description}</p>
                        <ul class="drone-specs">
                `;
                drone.specifications.forEach(spec => {
                    htmlContent += `<li><strong>${spec.label}:</strong> ${spec.value}</li>`;
                });
                htmlContent += `
                        </ul>
                    </div>
                `;
            });
            htmlContent += `
                    </div>
                </div>
            `;
            ourFleetSection.innerHTML = htmlContent;
        }
    }
}

function populateCadastroForm() {
    if (document.body.classList.contains('cadastro-page')) {
        const serviceSelect = document.getElementById('serviceOfInterest');
        if (serviceSelect) {
            formOptions.services.forEach(service => {
                const option = document.createElement('option');
                option.value = service.value;
                option.innerText = service.text;
                serviceSelect.appendChild(option);
            });
        }
    }
}

function populateCotacaoForm() {
    if (document.body.classList.contains('cotacao-page')) {
        const cropTypeSelect = document.getElementById('cropType');
        const defenseTypeSelect = document.getElementById('agriculturalDefenseType');
        const sprayingTimeSelect = document.getElementById('preferredSprayingTime');
        const flowRateSelect = document.getElementById('sprayingFlowRate');

        if (cropTypeSelect) {
            formOptions.cropTypes.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.innerText = optionData.text;
                cropTypeSelect.appendChild(option);
            });
        }
        if (defenseTypeSelect) {
            formOptions.defenseTypes.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.innerText = optionData.text;
                defenseTypeSelect.appendChild(option);
            });
        }
        if (sprayingTimeSelect) {
            formOptions.sprayingTimes.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.innerText = optionData.text;
                sprayingTimeSelect.appendChild(option);
            });
        }
        if (flowRateSelect) {
            formOptions.flowRates.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.innerText = optionData.text;
                flowRateSelect.appendChild(option);
            });
        }
    }
}

function handleCadastroSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        serviceOfInterest: form.serviceOfInterest.value,
        message: form.message.value
    };

    console.log("Dados do formulário de Cadastro (JSON):", formData);

    alert('Formulário de Cadastro enviado! Verifique o console para os dados.');
    form.reset();
}

function handleCotacaoSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = {
        cropType: form.cropType.value,
        agriculturalDefenseType: form.agriculturalDefenseType.value,
        areaSizeHectares: form.areaSizeHectares.value,
        preferredSprayingTime: form.preferredSprayingTime.value,
        sprayingFlowRate: form.sprayingFlowRate.value
    };

    console.log("Dados do formulário de Cotação (JSON):", formData);

    alert('Formulário de Cotação enviado! Verifique o console para os dados.');
    form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/') {
        document.body.classList.add('home-page');
        loadHomePageContent();
    } else if (path.includes('drones.html')) {
        document.body.classList.add('drones-page');
        loadDronesPageContent();
    } else if (path.includes('cadastro.html')) {
        document.body.classList.add('cadastro-page');
        populateCadastroForm();
        const cadastroForm = document.getElementById('contactForm');
        if (cadastroForm) {
            cadastroForm.addEventListener('submit', handleCadastroSubmit);
        }
    } else if (path.includes('cotacao.html')) {
        document.body.classList.add('cotacao-page');
        populateCotacaoForm();
        const cotacaoForm = document.getElementById('quoteForm');
        if (cotacaoForm) {
            cotacaoForm.addEventListener('submit', handleCotacaoSubmit);
        }
    }

    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            if (window.location.pathname === '/' && link.getAttribute('href').includes('index.html')) {
                link.classList.add('active');
            }
        }
    });

    const sobreNosLink = document.querySelector('.nav a[href="#"]');
    if(sobreNosLink) {
        sobreNosLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Página "Sobre nós" em construção!');
        });
    }
    const solucoesLink = document.querySelector('.nav a[href="#"]');
    if(solucoesLink && solucoesLink.nextElementSibling !== null) {
        solucoesLink.nextElementSibling.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Página "Soluções" em construção!');
        });
    }
});