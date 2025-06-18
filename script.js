
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
            const imgElement = document.querySelector(`.solution-item img[src*="${item.image.split('/').pop()}"]`);
            if (imgElement) {
                imgElement.src = item.image;
            }
        });

        document.getElementById('fleet-intro-title').innerText = siteContent.home.fleet.introTitle;
        document.getElementById('fleet-intro-text').innerText = siteContent.home.fleet.introText;

        siteContent.home.fleet.items.forEach(item => {
            document.getElementById(`drone-${item.id}-title`).innerText = item.title;
            document.getElementById(`drone-${item.id}-description`).innerText = item.description;
            const imgElement = document.querySelector(`.fleet-item img[src*="${item.image.split('/').pop()}"]`);
            if (imgElement) {
                imgElement.src = item.image;
            }
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

function loadAboutUsPageContent() {
    if (document.body.classList.contains('about-us-page')) {
        document.getElementById('about-us-title').innerText = siteContent.aboutUsPage.title;
        document.getElementById('about-us-intro').innerText = siteContent.aboutUsPage.introText;

        document.getElementById('about-us-mission-title').innerText = siteContent.aboutUsPage.missionTitle;
        document.getElementById('about-us-mission-text').innerText = siteContent.aboutUsPage.missionText;

        document.getElementById('about-us-vision-title').innerText = siteContent.aboutUsPage.visionTitle;
        document.getElementById('about-us-vision-text').innerText = siteContent.aboutUsPage.visionText;

        document.getElementById('about-us-values-title').innerText = siteContent.aboutUsPage.valuesTitle;
        document.getElementById('about-us-values-text').innerText = siteContent.aboutUsPage.valuesText;

        document.getElementById('leadership-title').innerText = siteContent.aboutUsPage.leadership.title;
        const leadershipGrid = document.getElementById('leadership-grid-container');
        if (leadershipGrid) {
            leadershipGrid.innerHTML = '';
            siteContent.aboutUsPage.leadership.members.forEach(member => {
                const leaderCard = document.createElement('div');
                leaderCard.classList.add('leader-card');
                leaderCard.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <span class="title">${member.title}</span>
                    <p>${member.description}</p>
                `;
                leadershipGrid.appendChild(leaderCard);
            });
        }
    }
}

function loadSolutionsPageContent() {
    if (document.body.classList.contains('solutions-page')) {
        document.getElementById('solutions-page-title').innerText = siteContent.solutionsPage.title;
        document.getElementById('solutions-page-intro-text').innerText = siteContent.solutionsPage.introText;

        const solutionDetailContainer = document.getElementById('solution-detail-container');
        if (solutionDetailContainer) {
            solutionDetailContainer.innerHTML = '';
            siteContent.solutionsPage.sections.forEach((section, index) => {
                const solutionItem = document.createElement('div');
                solutionItem.classList.add('solution-detail-item');
                solutionItem.innerHTML = `
                    <img src="${section.image}" alt="${section.title}">
                    <div class="solution-detail-content">
                        <h3>${section.title}</h3>
                        <p>${section.description}</p>
                    </div>
                `;
                solutionDetailContainer.appendChild(solutionItem);
            });
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
    const fileName = path.split('/').pop();

    if (fileName === 'index.html' || fileName === '') {
        document.body.classList.add('home-page');
        loadHomePageContent();
    } else if (fileName === 'drones.html') {
        document.body.classList.add('drones-page');
        loadDronesPageContent();
    } else if (fileName === 'cadastro.html') {
        document.body.classList.add('cadastro-page');
        populateCadastroForm();
        const cadastroForm = document.getElementById('contactForm');
        if (cadastroForm) {
            cadastroForm.addEventListener('submit', handleCadastroSubmit);
        }
    } else if (fileName === 'cotacao.html') {
        document.body.classList.add('cotacao-page');
        populateCotacaoForm();
        const cotacaoForm = document.getElementById('quoteForm');
        if (cotacaoForm) {
            cotacaoForm.addEventListener('submit', handleCotacaoSubmit);
        }
    } else if (fileName === 'sobre-nos.html') {
        document.body.classList.add('about-us-page');
        loadAboutUsPageContent();
    } else if (fileName === 'solucoes.html') {
        document.body.classList.add('solutions-page');
        loadSolutionsPageContent();
    }

    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        const linkFileName = link.getAttribute('href').split('/').pop();
        if (linkFileName === fileName || (fileName === '' && linkFileName === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});