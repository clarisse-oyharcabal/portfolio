document.addEventListener('DOMContentLoaded', () => {
    // Configuration de particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ff9d'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff9d',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Menu burger
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });

        // Fermer le menu en cliquant sur un lien
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });
    }

    // Animation de typing pour le texte de présentation
    const text = "je suis passionnée par l'intelligence artificielle et la science des données. Je souhaite allier mes compétences en informatique et mes études en Sociologie et Psychologie afin de développer des solutions innovantes.";
    let index = 0;
    const typingText = document.querySelector('.typing-text');

    function typeText() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    setTimeout(typeText, 1000);

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation des cartes de projet au scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Envoi du formulaire via Formspree
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Si la soumission réussit
                    console.log('Réponse de Formspree:', response);
                    if (response.ok || response.status === 202 || response.status === 201) {
                        alert('Message envoyé avec succès, merci !');
                        contactForm.reset();
                    }
                } else {
                    // Si la soumission échoue (erreur côté serveur)
                    console.error('Erreur de soumission : ', response.status);
                    alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
                }
            })
            .catch(error => {
                // Erreur réseau ou autre
                console.error('Erreur réseau:', error);
                alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            });
        });
    }

        // Gestion des boutons "Voir plus"
        document.querySelectorAll('.see-more').forEach(button => {
            button.addEventListener('click', () => {
                // Trouver le contenu détaillé associé à ce bouton
                const details = button.previousElementSibling;
    
                // Basculer l'affichage du contenu détaillé
                if (details.style.display === 'none' || details.style.display === '') {
                    details.style.display = 'block';
                    button.textContent = 'Voir moins';
                } else {
                    details.style.display = 'none';
                    button.textContent = 'Voir plus';
                }
            });
        });
    });