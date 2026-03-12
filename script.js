<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creafida - Atelier de Couture</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'Inter', sans-serif;
        }
        h1, h2, h3 {
            font-family: 'Playfair Display', serif;
        }
        
        /* Animations personnalisées */
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
        
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(0,0,0,0.1); }
            50% { box-shadow: 0 0 40px rgba(0,0,0,0.2); }
        }
        
        @keyframes stitch {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
        }
        
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
            animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
            animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        
        /* Effet de survol sur les cartes */
        .service-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .service-card:hover .icon-wrapper {
            transform: scale(1.1) rotate(5deg);
        }
        
        /* Bouton Portfolio spécial */
        .portfolio-btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .portfolio-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
        }
        
        .portfolio-btn:hover::before {
            left: 100%;
        }
        
        .portfolio-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        /* Navigation sticky avec effet */
        .nav-scrolled {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }
        
        /* Effet de couture */
        .stitch-border {
            background-image: repeating-linear-gradient(
                90deg,
                transparent,
                transparent 10px,
                #000 10px,
                #000 12px
            );
            height: 2px;
            opacity: 0.3;
        }
        
        /* Loader */
        .loader {
            border-top-color: #000;
            -webkit-animation: spinner 1.5s linear infinite;
            animation: spinner 1.5s linear infinite;
        }
        
        @keyframes spinner {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Effet de texte qui se révèle */
        .reveal-text {
            background: linear-gradient(to right, #000 50%, transparent 50%);
            background-size: 200% 100%;
            background-position: 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: background-position 0.5s ease;
        }
        
        .reveal-text:hover {
            background-position: 0%;
        }
        
        /* Smooth scroll */
        html {
            scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    </style>
</head>
<body class="bg-stone-50 text-gray-800 overflow-x-hidden">

    <!-- Navigation -->
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-4">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="text-2xl font-bold tracking-tighter opacity-0 animate-fade-in-left" style="animation-delay: 0.1s;">
                CREAFIDA
            </div>
            <div class="hidden md:flex space-x-8 opacity-0 animate-fade-in-up" style="animation-delay: 0.2s;">
                <a href="#accueil" class="hover:text-gray-600 transition-colors relative group">
                    Accueil
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </a>
                <a href="#services" class="hover:text-gray-600 transition-colors relative group">
                    Services
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </a>
                <a href="#apropos" class="hover:text-gray-600 transition-colors relative group">
                    À propos
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </a>
                <a href="#contact" class="hover:text-gray-600 transition-colors relative group">
                    Contact
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </a>
            </div>
            <!-- Bouton Portfolio -->
            <a href="#portfolio" class="portfolio-btn bg-black text-white px-6 py-2 rounded-full opacity-0 animate-fade-in-right" style="animation-delay: 0.3s;">
                Portfolio
            </a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-20 w-64 h-64 border-2 border-black rounded-full animate-float"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 border border-black rounded-full animate-float" style="animation-delay: 2s;"></div>
        </div>
        
        <div class="container mx-auto px-6 text-center relative z-10">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up" style="animation-delay: 0.4s;">
                Créafida
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 mb-4 opacity-0 animate-fade-in-up" style="animation-delay: 0.6s;">
                Atelier de couture
            </p>
            <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style="animation-delay: 0.8s;">
                Spécialisé dans la retouche, la transformation, le modélisme, la finition et la conception
            </p>
            <div class="flex justify-center gap-4 opacity-0 animate-fade-in-up" style="animation-delay: 1s;">
                <a href="#contact" class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                    Me contacter
                </a>
                <a href="#portfolio" class="portfolio-btn border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all">
                    Voir le Portfolio
                </a>
            </div>
        </div>
        
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </section>

    <!-- Section Services -->
    <section id="services" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16 scroll-trigger opacity-0">
                <h2 class="text-4xl font-bold mb-4">Mes Services</h2>
                <div class="stitch-border w-24 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="service-card bg-stone-50 p-8 rounded-2xl scroll-trigger opacity-0">
                    <div class="icon-wrapper w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 transition-transform duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Retouche</h3>
                    <p class="text-gray-600">Ajustements précis pour un tombé parfait de vos vêtements.</p>
                </div>

                <!-- Service 2 -->
                <div class="service-card bg-stone-50 p-8 rounded-2xl scroll-trigger opacity-0" style="animation-delay: 0.1s;">
                    <div class="icon-wrapper w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 transition-transform duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Transformation</h3>
                    <p class="text-gray-600">Donnez une seconde vie à vos vêtements préférés.</p>
                </div>

                <!-- Service 3 -->
                <div class="service-card bg-stone-50 p-8 rounded-2xl scroll-trigger opacity-0" style="animation-delay: 0.2s;">
                    <div class="icon-wrapper w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 transition-transform duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Modélisme</h3>
                    <p class="text-gray-600">Création de patrons sur mesure pour des pièces uniques.</p>
                </div>

                <!-- Service 4 -->
                <div class="service-card bg-stone-50 p-8 rounded-2xl scroll-trigger opacity-0" style="animation-delay: 0.3s;">
                    <div class="icon-wrapper w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 transition-transform duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Finition</h3>
                    <p class="text-gray-600">Finitions haut de gamme pour des créations impeccables.</p>
                </div>

                <!-- Service 5 -->
                <div class="service-card bg-stone-50 p-8 rounded-2xl scroll-trigger opacity-0" style="animation-delay: 0.4s;">
                    <div class="icon-wrapper w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 transition-transform duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Conception</h3>
                    <p class="text-gray-600">Design et création de vêtements personnalisés.</p>
                </div>

                <!-- Service 6 -->
                <div class="service-card bg-stone-50 p-8 rounded-2xl scroll-trigger opacity-0" style="animation-delay: 0.5s;">
                    <div class="icon-wrapper w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 transition-transform duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Conseil</h3>
                    <p class="text-gray-600">Accompagnement personnalisé pour vos projets couture.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Portfolio -->
    <section id="portfolio" class="py-20 bg-stone-100">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16 scroll-trigger opacity-0">
                <h2 class="text-4xl font-bold mb-4">Portfolio</h2>
                <div class="stitch-border w-24 mx-auto mb-4"></div>
                <p class="text-gray-600">Découvrez mes dernières créations</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="group relative overflow-hidden rounded-xl aspect-square scroll-trigger opacity-0 cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=600&fit=crop" alt="Création 1" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <span class="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-lg font-semibold">Robe de soirée</span>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl aspect-square scroll-trigger opacity-0 cursor-pointer" style="animation-delay: 0.1s;">
                    <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop" alt="Création 2" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <span class="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-lg font-semibold">Veste sur mesure</span>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl aspect-square scroll-trigger opacity-0 cursor-pointer" style="animation-delay: 0.2s;">
                    <img src="https://images.unsplash.com/photo-1551488852-0801751ac1f4?w=600&h=600&fit=crop" alt="Création 3" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <span class="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-lg font-semibold">Transformation</span>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl aspect-square scroll-trigger opacity-0 cursor-pointer" style="animation-delay: 0.3s;">
                    <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=600&fit=crop" alt="Création 4" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <span class="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-lg font-semibold">Costume</span>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl aspect-square scroll-trigger opacity-0 cursor-pointer" style="animation-delay: 0.4s;">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop" alt="Création 5" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <span class="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-lg font-semibold">Haute couture</span>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl aspect-square scroll-trigger opacity-0 cursor-pointer" style="animation-delay: 0.5s;">
                    <img src="https://images.unsplash.com/photo-1550614000-4b9519e02a48?w=600&h=600&fit=crop" alt="Création 6" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <span class="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-lg font-semibold">Accessoires</span>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="portfolio-btn bg-black text-white px-8 py-3 rounded-full text-lg">
                    Voir tout le portfolio
                </button>
            </div>
        </div>
    </section>

    <!-- Section À propos -->
    <section id="apropos" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/2 scroll-trigger opacity-0">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Atelier" class="rounded-2xl shadow-2xl">
                        <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-stone-200 rounded-2xl -z-10"></div>
                        <div class="absolute -top-6 -left-6 w-32 h-32 border-2 border-black rounded-2xl -z-10"></div>
                    </div>
                </div>
                <div class="md:w-1/2 scroll-trigger opacity-0">
                    <h2 class="text-4xl font-bold mb-6">À propos de moi</h2>
                    <div class="stitch-border w-24 mb-6"></div>
                    <p class="text-gray-600 mb-4 text-lg leading-relaxed">
                        Passionnée par la couture depuis plus de 15 ans, j'ai développé une expertise pointue dans la retouche et la création sur mesure.
                    </p>
                    <p class="text-gray-600 mb-6 text-lg leading-relaxed">
                        Chaque pièce est travaillée avec minutie et passion pour garantir une qualité exceptionnelle et un résultat qui vous ressemble.
                    </p>
                    <div class="flex gap-8">
                        <div class="text-center">
                            <span class="block text-3xl font-bold">15+</span>
                            <span class="text-gray-500">Années d'expérience</span>
                        </div>
                        <div class="text-center">
                            <span class="block text-3xl font-bold">1000+</span>
                            <span class="text-gray-500">Projets réalisés</span>
                        </div>
                        <div class="text-center">
                            <span class="block text-3xl font-bold">100%</span>
                            <span class="text-gray-500">Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Contact -->
    <section id="contact" class="py-20 bg-stone-900 text-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center mb-16 scroll-trigger opacity-0">
                <h2 class="text-4xl font-bold mb-4">Contactez-moi</h2>
                <div class="w-24 h-0.5 bg-white mx-auto mb-4 opacity-30"></div>
                <p class="text-gray-400">Discutons de votre projet</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div class="scroll-trigger opacity-0">
                    <h3 class="text-2xl font-bold mb-6">Informations</h3>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4 group cursor-pointer">
                            <div class="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold">Adresse</p>
                                <p class="text-gray-400">Rue de Liège, 153<br>4684 Haccourt, Belgique</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 group cursor-pointer">
                            <div class="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold">Téléphone</p>
                                <p class="text-gray-400">+32 484 61 31 25</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 group cursor-pointer">
                            <div class="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-semibold">Email</p>
                                <p class="text-gray-400">contact@creafida.be</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <form class="space-y-4 scroll-trigger opacity-0">
                    <div>
                        <input type="text" placeholder="Votre nom" class="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all placeholder-gray-500">
                    </div>
                    <div>
                        <input type="email" placeholder="Votre email" class="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all placeholder-gray-500">
                    </div>
                    <div>
                        <textarea placeholder="Votre message" rows="4" class="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all placeholder-gray-500 resize-none"></textarea>
                    </div>
                    <button type="submit" class="portfolio-btn w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                        Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white py-8 border-t border-white border-opacity-10">
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div class="text-2xl font-bold tracking-tighter mb-4 md:mb-0">
                CREAFIDA
            </div>
            <div class="text-gray-400 text-sm">
                © 2026 Créafida. Tous droits réservés.
            </div>
            <div class="flex gap-4 mt-4 md:mt-0">
                <a href="#" class="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
            </div>
        </div>
    </footer>

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
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-trigger').forEach((el) => observer.observe(el));

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

        // Effet de parallaxe subtil sur les éléments flottants
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.animate-float');
            parallaxElements.forEach((el, index) => {
                const speed = 0.5 + (index * 0.1);
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    </script>
</body>
</html>
