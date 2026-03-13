<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creafida - Atelier de couture</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;0,6..96,700;1,6..96,400&family=Parisienne&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'Cormorant Garamond', serif;
        }
        
        .font-script {
            font-family: 'Parisienne', cursive;
        }
        
        /* Police pour le logo style Bodoni/Didot */
        .font-logo {
            font-family: 'Bodoni Moda', serif;
            font-optical-sizing: auto;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-left {
            animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
            animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
            animation: float 3s ease-in-out infinite;
        }
        
        /* Scroll animations */
        .scroll-hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        
        .scroll-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Hover effects */
        .hover-lift {
            transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        /* Button shine effect */
        .btn-shine {
            position: relative;
            overflow: hidden;
        }
        
        .btn-shine::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
        }
        
        .btn-shine:hover::after {
            left: 100%;
        }
        
        /* Image hover zoom */
        .img-zoom {
            overflow: hidden;
        }
        
        .img-zoom img {
            transition: transform 0.5s ease;
        }
        
        .img-zoom:hover img {
            transform: scale(1.1);
        }
        
        /* Stagger delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        /* Navigation */
        .nav-scrolled {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }
        
        /* Smooth scroll */
        html {
            scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        
        /* Modal styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 100;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            background-color: #fefefe;
            margin: 5% auto;
            padding: 30px;
            border-radius: 20px;
            width: 90%;
            max-width: 600px;
            position: relative;
            animation: modalSlideIn 0.3s ease-out;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .close {
            color: #aaa;
            float: right;
            font-size: 32px;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s;
        }
        
        .close:hover {
            color: #000;
        }
        
        /* Mobile menu styles */
        .mobile-menu {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.98);
            z-index: 99;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .mobile-menu.active {
            display: flex;
            opacity: 1;
        }
        
        .mobile-menu a {
            font-size: 2rem;
            color: #000;
            text-decoration: none;
            transition: all 0.3s;
            font-family: 'Parisienne', cursive;
        }
        
        .mobile-menu a:hover {
            transform: scale(1.1);
            color: #666;
        }
        
        .mobile-menu-close {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 2.5rem;
            cursor: pointer;
            color: #000;
        }

        /* Logo styles - TEXTE BODONI MODA */
        .logo-text-nav {
            font-family: 'Bodoni Moda', serif;
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: 0.15em;
            line-height: 1;
            color: #000;
        }
        
        .logo-text-nav .subtitle {
            font-size: 0.6rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            display: block;
            margin-top: 2px;
            font-weight: 400;
        }
        
        .logo-text-hero {
            font-family: 'Bodoni Moda', serif;
            font-size: 5rem;
            font-weight: 400;
            letter-spacing: 0.1em;
            line-height: 1;
            color: #000;
            text-align: center;
        }
        
        .logo-text-hero .subtitle {
            font-size: 1rem;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            display: block;
            margin-top: 1rem;
            font-weight: 400;
        }

        /* Service Icon Styles */
        .service-icon-wrapper {
            width: 120px;
            height: 120px;
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f5f5f5;
            border-radius: 16px;
            overflow: hidden;
            padding: 20px;
        }
        
        .service-icon-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: contrast(1.1);
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        }

        /* Map container styles */
        .map-container {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        
        .map-container iframe {
            width: 100%;
            height: 100%;
            min-height: 400px;
            border: none;
            filter: grayscale(20%);
            transition: filter 0.3s ease;
        }
        
        .map-container:hover iframe {
            filter: grayscale(0%);
        }

        /* Store image container */
        .store-image-wrapper {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
        }
        
        .store-image-container {
            position: relative;
            max-width: 600px;
            width: 100%;
            background: #1a1a1a;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .store-image-container img {
            width: 100%;
            height: auto;
            display: block;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        }

        /* Hero specialties list */
        .specialties-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .specialty-item {
            background: rgba(255,255,255,0.9);
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            font-size: 1.1rem;
            color: #333;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        @media (max-width: 768px) {
            .specialty-item {
                font-size: 1rem;
                padding: 0.5rem 1rem;
            }
            
            .logo-text-hero {
                font-size: 3rem;
            }
            
            .logo-text-hero .subtitle {
                font-size: 0.8rem;
            }
            
            .logo-text-nav {
                font-size: 1.2rem;
            }

            .service-icon-wrapper {
                width: 100px;
                height: 100px;
                padding: 15px;
            }
        }
    </style>
</head>
<body class="bg-white text-gray-800">

    <!-- Navigation -->
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-4 bg-white">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="animate-fade-in">
                <a href="#accueil" class="logo-text-nav">
                    CREAFIDA
                    <span class="subtitle">COUTURE</span>
                </a>
            </div>
            <div class="hidden md:flex space-x-8 animate-fade-in delay-200 text-lg font-semibold">
                <a href="#accueil" class="hover:text-gray-600 transition-colors relative group">
                    Accueil
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#services" class="hover:text-gray-600 transition-colors relative group">
                    Services
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#apropos" class="hover:text-gray-600 transition-colors relative group">
                    À propos
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" class="hover:text-gray-600 transition-colors relative group">
                    Contact
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <button id="mobileMenuBtn" class="md:hidden animate-fade-in delay-300 p-2">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="mobile-menu">
        <span class="mobile-menu-close" onclick="closeMobileMenu()">&times;</span>
        <a href="#accueil" onclick="closeMobileMenu()">Accueil</a>
        <a href="#services" onclick="closeMobileMenu()">Services</a>
        <a href="#apropos" onclick="closeMobileMenu()">À propos</a>
        <a href="#contact" onclick="closeMobileMenu()">Contact</a>
    </div>

    <!-- Hero Section - VERSION AVEC TEXTE LOGO -->
    <section id="accueil" class="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6 text-center">
            <div class="mb-12 animate-fade-in-up">
                <h1 class="logo-text-hero">
                    CREAFIDA
                    <span class="subtitle">COUTURE</span>
                </h1>
            </div>
            
            <!-- Spécialités mises en avant -->
            <p class="text-lg md:text-xl text-gray-600 mb-6 animate-fade-in-up delay-300 max-w-2xl mx-auto font-light">
                Atelier spécialisé en :
            </p>
            
            <div class="specialties-list animate-fade-in-up delay-400">
                <span class="specialty-item">Retouche</span>
                <span class="specialty-item">Transformation</span>
                <span class="specialty-item">Création sur mesure</span>
                <span class="specialty-item">Robes de cérémonie</span>
            </div>
            
            <div class="mt-12 animate-fade-in-up delay-500">
                <a href="#contact" class="btn-shine inline-block bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-all hover:scale-105 text-lg tracking-wide">
                    Prendre rendez-vous
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16 scroll-hidden">
                <h2 class="text-5xl font-bold mb-4 font-script">Mes Services</h2>
                <div class="w-16 h-1 bg-black mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <!-- Service 1: Retouches -->
                <div class="bg-gray-50 p-8 rounded-2xl hover-lift scroll-hidden cursor-pointer text-center" onclick="openDevisModal('Retouches')">
                    <div class="service-icon-wrapper">
                        <img src="https://i.ibb.co/zh0jhv6M/IMG-6339.jpg" alt="Retouches" loading="lazy">
                    </div>
                    <h3 class="text-2xl font-bold mb-3 font-script">Retouches</h3>
                    <p class="text-gray-600 text-lg">Ajustements précis pour un tombé parfait de vos vêtements.</p>
                </div>

                <!-- Service 2: Transformations -->
                <div class="bg-gray-50 p-8 rounded-2xl hover-lift scroll-hidden cursor-pointer text-center" onclick="openDevisModal('Transformations')">
                    <div class="service-icon-wrapper">
                        <img src="https://i.ibb.co/LXrGbvN0/IMG-6340.jpg" alt="Transformations" loading="lazy">
                    </div>
                    <h3 class="text-2xl font-bold mb-3 font-script">Transformations</h3>
                    <p class="text-gray-600 text-lg">Donnez une seconde vie à vos vêtements préférés.</p>
                </div>

                <!-- Service 3: Création sur mesure -->
                <div class="bg-gray-50 p-8 rounded-2xl hover-lift scroll-hidden cursor-pointer text-center" onclick="openDevisModal('Création sur mesure')">
                    <div class="service-icon-wrapper">
                        <img src="https://i.ibb.co/XZ9tLdTt/IMG-6341.jpg" alt="Création sur mesure" loading="lazy">
                    </div>
                    <h3 class="text-2xl font-bold mb-3 font-script">Création<br>sur mesure</h3>
                    <p class="text-gray-600 text-lg">Des pièces uniques confectionnées selon vos envies.</p>
                </div>

                <!-- Service 4: Patronage / modélisme -->
                <div class="bg-gray-50 p-8 rounded-2xl hover-lift scroll-hidden cursor-pointer text-center" onclick="openDevisModal('Patronage / modélisme')">
                    <div class="service-icon-wrapper">
                        <img src="https://i.ibb.co/zHtc7pjY/IMG-6342.jpg" alt="Patronage / modélisme" loading="lazy">
                    </div>
                    <h3 class="text-2xl font-bold mb-3 font-script">Patronage /<br>modélisme</h3>
                    <p class="text-gray-600 text-lg">Création de patrons sur mesure pour des pièces uniques.</p>
                </div>

                <!-- Service 5: Robes de cérémonie -->
                <div class="bg-gray-50 p-8 rounded-2xl hover-lift scroll-hidden cursor-pointer text-center" onclick="openDevisModal('Robes de cérémonie')">
                    <div class="service-icon-wrapper">
                        <img src="https://i.ibb.co/Cpwms2JK/IMG-6343.jpg" alt="Robes de cérémonie" loading="lazy">
                    </div>
                    <h3 class="text-2xl font-bold mb-3 font-script">Robes de<br>cérémonie</h3>
                    <p class="text-gray-600 text-lg">Mariage, soirée, événements : l'élégance sur mesure.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- À propos Section -->
    <section id="apropos" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/2 scroll-hidden">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Atelier" class="rounded-2xl shadow-xl hover-lift">
                    </div>
                </div>
                <div class="md:w-1/2 scroll-hidden">
                    <h2 class="text-5xl font-bold mb-6 font-script">À propos de moi</h2>
                    <div class="w-16 h-1 bg-black mb-6"></div>
                    <p class="text-gray-600 mb-4 text-xl leading-relaxed">
                        Passionnée par la couture depuis plus de 15 ans, j'ai développé une expertise pointue dans la retouche et la création sur mesure.
                    </p>
                    <p class="text-gray-600 mb-8 text-xl leading-relaxed">
                        Chaque pièce est travaillée avec minutie et passion pour garantir une qualité exceptionnelle et un résultat qui vous ressemble.
                    </p>
                    <div class="flex gap-8">
                        <div class="text-center">
                            <span class="block text-4xl font-bold animate-float font-script">15+</span>
                            <span class="text-gray-500 text-lg">Années d'expérience</span>
                        </div>
                        <div class="text-center">
                            <span class="block text-4xl font-bold animate-float font-script" style="animation-delay: 0.5s;">1000+</span>
                            <span class="text-gray-500 text-lg">Projets réalisés</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-900 text-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center mb-16 scroll-hidden">
                <h2 class="text-5xl font-bold mb-4 font-script">Contactez-moi</h2>
                <div class="w-16 h-1 bg-white mx-auto mb-4 opacity-50"></div>
                <p class="text-gray-400 text-lg">Discutons de votre projet</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div class="scroll-hidden">
                    <h3 class="text-3xl font-bold mb-6 font-script">Informations</h3>
                    <div class="space-y-6">
                        <div class="flex items-center gap-4 group hover-lift p-4 rounded-lg transition-all">
                            <div class="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold text-xl font-script">Adresse</p>
                                <p class="text-gray-400 text-lg">Rue de Liège, 153<br>4684 Haccourt, Belgique</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 group hover-lift p-4 rounded-lg transition-all">
                            <div class="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold text-xl font-script">Téléphone</p>
                                <p class="text-gray-400 text-lg">+32 484 61 31 25</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 group hover-lift p-4 rounded-lg transition-all">
                            <div class="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold text-xl font-script">Email</p>
                                <p class="text-gray-400 text-lg">creafida@gmail.com</p>
                            </div>
                        </div>
                        
                        <!-- Horaires -->
                        <div class="flex items-center gap-4 group hover-lift p-4 rounded-lg transition-all" onclick="showHoursModal()">
                            <div class="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold text-xl font-script">Horaires</p>
                                <p class="text-gray-400 text-lg">Mar, Mer, Ven, Sam</p>
                                <p class="text-gray-400">11h-13h & 16h-19h</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <form class="space-y-4 scroll-hidden" onsubmit="handleContactSubmit(event)">
                    <div>
                        <input type="text" placeholder="Votre nom" required class="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all placeholder-gray-500 text-white hover:bg-opacity-20 text-lg">
                    </div>
                    <div>
                        <input type="email" placeholder="Votre email" required class="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all placeholder-gray-500 text-white hover:bg-opacity-20 text-lg">
                    </div>
                    <div>
                        <textarea placeholder="Votre message" rows="4" required class="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all placeholder-gray-500 text-white resize-none hover:bg-opacity-20 text-lg"></textarea>
                    </div>
                    <button type="submit" class="btn-shine w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all hover:scale-[1.02] text-lg">
                        Envoyer le message
                    </button>
                    <button type="button" onclick="openDevisModal()" class="btn-shine w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-[1.02] text-lg">
                        Demander un devis
                    </button>
                </form>
            </div>
            
            <!-- Google Maps Section avec emplacement direct -->
            <div class="mt-16 max-w-5xl mx-auto scroll-hidden">
                <div class="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.6789654746567!2d5.686486315741123!3d50.73339497951384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e5e8f8f8f8f8%3A0x0!2sCreafida!5e0!3m2!1sfr!2sbe!4v1600000000000!5m2!1sfr!2sbe&q=Creafida%20Haccourt" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div class="text-center mt-4">
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Creafida,+Rue+de+Liège+153,+4684+Haccourt,+Belgique" 
                       target="_blank" 
                       class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        Itinéraire vers Creafida
                    </a>
                </div>
                
                <!-- Image de la devanture du magasin -->
                <div class="store-image-wrapper scroll-hidden">
                    <div class="store-image-container">
                        <img src="creafida-devanture.jpg"
                             alt="Devanture du magasin Creafida à Haccourt">
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white py-8 border-t border-white border-opacity-10">
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
                <div class="logo-text-nav" style="color: white;">
                    CREAFIDA
                    <span class="subtitle" style="color: rgba(255,255,255,0.7);">COUTURE</span>
                </div>
            </div>
            <div class="text-gray-400 text-base mb-4 md:mb-0">
                © 2026 Créafida. Tous droits réservés.
            </div>
            <div class="flex gap-4">
                <a href="https://instagram.com/creafida.be" target="_blank" class="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all hover:scale-110 hover:rotate-12">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
            </div>
        </div>
    </footer>

    <!-- Horaires Modal -->
    <div id="hoursModal" class="modal">
        <div class="modal-content text-center">
            <span class="close" onclick="closeHoursModal()">&times;</span>
            <h3 class="text-4xl font-bold mb-6 font-script">Horaires d'ouverture</h3>
            <div class="space-y-3 text-lg">
                <div class="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                    <span class="font-semibold text-xl">Mardi</span>
                    <span class="text-purple-600 font-semibold">11h - 13h & 16h - 19h</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                    <span class="font-semibold text-xl">Mercredi</span>
                    <span class="text-purple-600 font-semibold">11h - 13h & 16h - 19h</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-gray-200 rounded-lg opacity-50">
                    <span class="font-semibold text-xl">Jeudi</span>
                    <span>Fermé</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                    <span class="font-semibold text-xl">Vendredi</span>
                    <span class="text-purple-600 font-semibold">11h - 13h & 16h - 19h</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                    <span class="font-semibold text-xl">Samedi</span>
                    <span class="text-purple-600 font-semibold">11h - 13h & 16h - 19h</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-gray-200 rounded-lg opacity-50">
                    <span class="font-semibold text-xl">Dimanche & Lundi</span>
                    <span>Fermé</span>
                </div>
            </div>
            <button onclick="closeHoursModal()" class="mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all text-lg font-script">
                Fermer
            </button>
        </div>
    </div>

    <!-- Devis Modal -->
    <div id="devisModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeDevisModal()">&times;</span>
            <h3 class="text-4xl font-bold mb-6 text-center font-script">Demander un devis</h3>
            <form id="devisForm" onsubmit="handleDevisSubmit(event)">
                <div class="mb-4">
                    <label class="block text-left mb-2 font-semibold text-lg font-script">Service</label>
                    <select id="devisService" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg">
                        <option value="">Choisir un service</option>
                        <option value="Retouches">Retouches</option>
                        <option value="Transformations">Transformations</option>
                        <option value="Création sur mesure">Création sur mesure</option>
                        <option value="Patronage / modélisme">Patronage / modélisme</option>
                        <option value="Robes de cérémonie">Robes de cérémonie</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-left mb-2 font-semibold text-lg font-script">Description</label>
                    <textarea id="devisDescription" required placeholder="Décrivez votre projet..." rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"></textarea>
                </div>
                <div class="mb-4">
                    <label class="block text-left mb-2 font-semibold text-lg font-script">Votre nom</label>
                    <input type="text" id="devisName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg">
                </div>
                <div class="mb-4">
                    <label class="block text-left mb-2 font-semibold text-lg font-script">Email</label>
                    <input type="email" id="devisEmail" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg">
                </div>
                <button type="submit" class="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all text-lg font-script">
                    Envoyer le devis par email
                </button>
            </form>
        </div>
    </div>

    <script>
        // Navigation scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });

        // Intersection Observer pour les animations au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));

        // Smooth scroll pour les ancres
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Horaires Modal
        function showHoursModal() {
            document.getElementById('hoursModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeHoursModal() {
            document.getElementById('hoursModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Devis Modal
        function openDevisModal(service = '') {
            document.getElementById('devisModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
            if (service) {
                document.getElementById('devisService').value = service;
            }
        }

        function closeDevisModal() {
            document.getElementById('devisModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Handle contact form submit
        function handleContactSubmit(e) {
            e.preventDefault();
            const form = e.target;
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            const subject = `Contact depuis le site - ${name}`;
            const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            window.location.href = `mailto:creafida@gmail.com?subject=${subject}&body=${body}`;
        }

        // Handle devis form submit
        function handleDevisSubmit(e) {
            e.preventDefault();
            const service = document.getElementById('devisService').value;
            const description = document.getElementById('devisDescription').value;
            const name = document.getElementById('devisName').value;
            const email = document.getElementById('devisEmail').value;
            
            const subject = `Demande de devis - ${service}`;
            const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0A%0D%0ADescription:%0D%0A${description}`;
            window.location.href = `mailto:creafida@gmail.com?subject=${subject}&body=${body}`;
            
            closeDevisModal();
            document.getElementById('devisForm').reset();
        }

        // Close modals on outside click
        window.onclick = function(event) {
            const hoursModal = document.getElementById('hoursModal');
            const devisModal = document.getElementById('devisModal');
            if (event.target == hoursModal) {
                closeHoursModal();
            }
            if (event.target == devisModal) {
                closeDevisModal();
            }
        }
    </script>
</body>
</html>
