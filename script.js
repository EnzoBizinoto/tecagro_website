import { db } from './assets/data/firebaseConfig.js'; 
import { collection, addDoc, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js"; // Adicionado 'getDoc' para buscar o tipo de usuário
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js"; // Adicionado 'onAuthStateChanged' para verificar o estado da autenticação

const auth = getAuth(); // Inicializa o Firebase Auth

// Função para verificar o tipo de usuário e adaptar a UI (ex: menu de admin)
function checkUserRole() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userRef = doc(db, 'users', user.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const userData = userSnap.data();
                console.log("Usuário logado:", user.email, "Tipo:", userData.userType);
                // Exemplo: Mostrar/esconder um link de painel de administrador
                // const adminLink = document.getElementById('admin-dashboard-link');
                // if (adminLink) {
                //     if (userData.userType === 'administrador') {
                //         adminLink.style.display = 'block';
                //     } else {
                //         adminLink.style.display = 'none';
                //     }
                // }
            } else {
                console.log("Documento de usuário não encontrado no Firestore para UID:", user.uid);
                // Se o documento não existe, significa que foi um login social inicial
                // ou um usuário antigo que não tem userType. Pode-se criar aqui.
                setDoc(userRef, {
                    email: user.email,
                    userType: 'cliente', // Define como cliente por padrão se não existir
                    createdAt: new Date()
                }, { merge: true }).then(() => {
                    console.log("Documento de usuário criado com tipo padrão 'cliente'.");
                });
            }
        } else {
            console.log("Nenhum usuário logado.");
            // Esconder elementos de admin se ninguém estiver logado
            // const adminLink = document.getElementById('admin-dashboard-link');
            // if (adminLink) {
            //     adminLink.style.display = 'none';
            // }
        }
    });
}

// Chame checkUserRole no carregamento da página para verificar o estado de autenticação
checkUserRole();


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
    event.preventDefault(); // Evita o recarregamento da página

    const form = event.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        serviceOfInterest: form.serviceOfInterest.value,
        message: form.message.value,
    };

    
    addDoc(collection(db, 'users'), formData)
        .then((docRef) => {
            console.log("Dados do formulário de Cadastro enviados ao Firestore com ID:", docRef.id, formData);
            alert('Formulário de Cadastro enviado com sucesso!');
            form.reset(); 
        })
        .catch((error) => {
            console.error("Erro ao enviar dados do Cadastro:", error);
            alert('Erro ao enviar formulário. Tente novamente.');
        });


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

       addDoc(collection(db, 'budget'), formData)
        .then((docRef) => {
            console.log("Dados do formulário de cotação enviados ao Firestore com ID:", docRef.id, formData);
            alert('Formulário de cotação enviado com sucesso!');
            form.reset(); 
        })
        .catch((error) => {
            console.error("Erro ao enviar dados de cotação:", error);
            alert('Erro ao enviar formulário. Tente novamente.');
        });

    alert('Formulário de Cotação enviado! Verifique o console para os dados.');
    form.reset();

    
}

function loadAuthPageContent() {
    if (document.body.classList.contains('auth-page')) {
        const authForm = document.getElementById('authForm');
        const authTitle = document.getElementById('auth-title');
        const authSubmitButton = document.getElementById('auth-submit-button');
        const switchToRegisterLink = document.getElementById('switch-to-register');
        const errorMessage = document.getElementById('error-message');
        const userTypeGroup = document.getElementById('userType-group'); // O novo grupo de campo
        const userTypeSelect = document.getElementById('userType'); // O select dentro do grupo

        let isLogin = true; // Estado para rastrear se o formulário atual é de login ou registro

        const toggleForm = () => {
            isLogin = !isLogin;
            authTitle.innerText = isLogin ? 'Login' : 'Cadastro';
            authSubmitButton.innerText = isLogin ? 'Entrar' : 'Cadastrar';
            switchToRegisterLink.innerText = isLogin ? 'Cadastre-se' : 'Fazer Login';
            errorMessage.innerText = ''; // Limpa a mensagem de erro ao trocar de formulário

            // Mostra ou esconde o campo de seleção de userType
            if (isLogin) {
                userTypeGroup.style.display = 'none';
                userTypeSelect.removeAttribute('required'); // Remove required quando escondido
            } else {
                userTypeGroup.style.display = 'block';
                userTypeSelect.setAttribute('required', 'required'); // Adiciona required quando visível
            }
        };

        // Chama toggleForm uma vez para garantir o estado inicial correto (esconder userType)
        toggleForm(); 

        switchToRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForm();
        });

        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = authForm.email.value;
            const password = authForm.password.value;
            errorMessage.innerText = ''; // Limpa o erro anterior

            if (isLogin) {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log("Usuário logado:", user);
                        alert('Login realizado com sucesso!');
                        window.location.href = 'index.html'; 
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessageText = error.message;
                        console.error("Erro de Login:", errorCode, errorMessageText);
                        errorMessage.innerText = 'Erro ao fazer login: ' + errorMessageText;
                    });
            } else {
                const selectedUserType = userTypeSelect.value; // Pega o valor selecionado
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log("Usuário cadastrado:", user);
                        
                        const userRef = doc(db, 'users', user.uid); 
                        setDoc(userRef, {
                            email: user.email,
                            userType: selectedUserType, // Usa o tipo selecionado
                            createdAt: new Date() 
                        }, { merge: true }) 
                        .then(() => {
                            console.log(`Tipo de usuário '${selectedUserType}' salvo no Firestore para:`, user.uid);
                            alert('Cadastro realizado com sucesso! Faça login para continuar.');
                            toggleForm(); 
                        })
                        .catch((firestoreError) => {
                            console.error("Erro ao salvar userType no Firestore:", firestoreError);
                            alert('Cadastro realizado, mas houve um erro ao salvar o tipo de usuário. Entre em contato com o suporte.');
                            toggleForm();
                        });

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessageText = error.message;
                        console.error("Erro de Cadastro:", errorCode, errorMessageText);
                        errorMessage.innerText = 'Erro ao cadastrar: ' + errorMessageText;
                    });
            }
        });

        const googleLoginBtn = document.getElementById('google-login');
        if (googleLoginBtn) {
            googleLoginBtn.addEventListener('click', () => {
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider)
                    .then((result) => {
                        const user = result.user;
                        console.log("Login com Google bem-sucedido:", user);

                        const userRef = doc(db, 'users', user.uid);
                        setDoc(userRef, {
                            email: user.email,
                            userType: 'cliente', // Para logins sociais, mantenha como 'cliente' por padrão
                            createdAt: new Date() 
                        }, { merge: true }) 
                        .then(() => {
                            console.log("Tipo de usuário 'cliente' salvo no Firestore para Google User:", user.uid);
                            alert('Login com Google realizado com sucesso!');
                            window.location.href = 'index.html';
                        })
                        .catch((firestoreError) => {
                            console.error("Erro ao salvar userType no Firestore para Google User:", firestoreError);
                            alert('Login com Google realizado, mas houve um erro ao salvar o tipo de usuário. Entre em contato com o suporte.');
                            window.location.href = 'index.html'; 
                        });

                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessageText = error.message;
                        console.error("Erro de Login com Google:", errorCode, errorMessageText);
                        errorMessage.innerText = 'Erro ao fazer login com Google: ' + errorMessageText;
                    });
            });
        }

        const facebookLoginBtn = document.getElementById('facebook-login');
        if (facebookLoginBtn) {
            facebookLoginBtn.addEventListener('click', () => {
                const provider = new FacebookAuthProvider();
                signInWithPopup(auth, provider)
                    .then((result) => {
                        const user = result.user;
                        console.log("Login com Facebook bem-sucedido:", user);

                        const userRef = doc(db, 'users', user.uid);
                        setDoc(userRef, {
                            email: user.email,
                            userType: 'cliente', // Para logins sociais, mantenha como 'cliente' por padrão
                            createdAt: new Date() 
                        }, { merge: true }) 
                        .then(() => {
                            console.log("Tipo de usuário 'cliente' salvo no Firestore para Facebook User:", user.uid);
                            alert('Login com Facebook realizado com sucesso!');
                            window.location.href = 'index.html';
                        })
                        .catch((firestoreError) => {
                            console.error("Erro ao salvar userType no Firestore para Facebook User:", firestoreError);
                            alert('Login com Facebook realizado, mas houve um erro ao salvar o tipo de usuário. Entre em contato com o suporte.');
                            window.location.href = 'index.html'; 
                        });

                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessageText = error.message;
                        console.error("Erro de Login com Facebook:", errorCode, errorMessageText);
                        errorMessage.innerText = 'Erro ao fazer login com Facebook: ' + errorMessageText;
                    });
            });
        }
    }
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
    } else if (fileName === 'cadastro_e_login.html') { 
        document.body.classList.add('auth-page');
        loadAuthPageContent();
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