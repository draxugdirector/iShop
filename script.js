// Product Data
const products = [
    {
        id: 1,
        name: "Chiq 270 Liters Water Dispenser",
        brand: "Chiq",
        category: "Home Appliances",
        currentPrice: "UGX 866,700",
        originalPrice: "UGX 1,600,000",
        discount: "46%",
        description: "The Chiq 270 Liters Water Dispenser is a high-capacity, energy-efficient appliance that provides both cooling and heating functions. With its sleek design and advanced features, it's perfect for offices and homes.",
        images: [
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600566752225-3f2b1a1b3ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 2,
        name: "Hisense 32 Inch HD LED TV",
        brand: "Hisense",
        category: "Electronics",
        currentPrice: "UGX 299,000",
        originalPrice: "UGX 550,000",
        discount: "46%",
        description: "Enjoy stunning HD picture quality with the Hisense 32 Inch LED TV. With multiple HDMI ports and built-in digital tuner, this TV offers great connectivity options for your entertainment needs.",
        images: [
            "https://images.unsplash.com/photo-1546538915-a9e2c8d0a0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 3,
        name: "Lato Milk Powder - 2.5kg",
        brand: "Lato",
        category: "Groceries",
        currentPrice: "UGX 83,000",
        originalPrice: "UGX 150,000",
        discount: "46%",
        description: "Lato Milk Powder is a premium quality dairy product packed with essential nutrients. Perfect for families, it's rich in calcium and vitamins for strong bones and healthy growth.",
        images: [
            "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 4,
        name: "Roch 175 Liters Double Door Refrigerator",
        brand: "Roch",
        category: "Home Appliances",
        currentPrice: "UGX 648,000",
        originalPrice: "UGX 1,150,000",
        discount: "44%",
        description: "The Roch 175L Double Door Refrigerator offers ample storage space with separate compartments for fridge and freezer. Energy efficient with frost-free technology for easy maintenance.",
        images: [
            "https://images.unsplash.com/photo-1584565068171-b1ac27b6a5a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1593990965215-075c1f918806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1567583295236-0a0a8df9045b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 5,
        name: "Redmi 14C - 6.88\" 8GB RAM 128GB Storage",
        brand: "Redmi",
        category: "Mobile Phones",
        currentPrice: "UGX 339,000",
        originalPrice: "UGX 480,000",
        discount: "30%",
        description: "The Redmi 14C features a large 6.88\" HD+ display, powerful octa-core processor, 8GB RAM and 128GB storage. With a 50MP triple camera system and 5000mAh battery, it's perfect for photography and long usage.",
        images: [
            "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 6,
        name: "Hikers 32 Inch Digital Frame",
        brand: "Hikers",
        category: "Electronics",
        currentPrice: "UGX 269,000",
        originalPrice: "UGX 550,000",
        discount: "51%",
        description: "Display your favorite memories with the Hikers 32\" Digital Frame. High-resolution display with multiple transition effects and support for various image formats. Connects via USB or WiFi for easy photo uploads.",
        images: [
            "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 7,
        name: "MacBook Pro 14\" M2 Chip 16GB RAM",
        brand: "Apple",
        category: "Electronics",
        currentPrice: "UGX 5,499,000",
        originalPrice: "UGX 6,200,000",
        discount: "11%",
        description: "The MacBook Pro 14\" with M2 chip delivers incredible performance with its 8-core CPU and 10-core GPU. Featuring a stunning Liquid Retina XDR display, 16GB unified memory, and 512GB SSD storage.",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 8,
        name: "Samsung Galaxy S23 Ultra 5G",
        brand: "Samsung",
        category: "Mobile Phones",
        currentPrice: "UGX 4,299,000",
        originalPrice: "UGX 5,050,000",
        discount: "15%",
        description: "The Samsung Galaxy S23 Ultra 5G features a 6.8\" Dynamic AMOLED 2X display, 200MP camera system, and S Pen support. Powered by Snapdragon 8 Gen 2 with 12GB RAM and 256GB storage.",
        images: [
            "https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 9,
        name: "LG 8kg Front Load Washing Machine",
        brand: "LG",
        category: "Home Appliances",
        currentPrice: "UGX 2,199,000",
        originalPrice: "UGX 2,930,000",
        discount: "25%",
        description: "The LG 8kg Front Load Washing Machine features AI Direct Drive, Steam Technology, and 6 Motion DD for superior cleaning. Energy efficient with TurboWash for faster washing cycles.",
        images: [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1626808642875-0e545b6c39c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    },
    {
        id: 10,
        name: "Sony WH-1000XM5 Wireless Headphones",
        brand: "Sony",
        category: "Electronics",
        currentPrice: "UGX 1,199,000",
        originalPrice: "UGX 1,500,000",
        discount: "20%",
        description: "The Sony WH-1000XM5 headphones feature industry-leading noise cancellation, 30-hour battery life, and touch controls. With premium sound quality and comfortable over-ear design for all-day listening.",
        images: [
            "https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ]
    }
];

// Delivery Fees
const deliveryFees = {
    kampala: 15000,
    entebbe: 20000,
    jinja: 25000,
    mbarara: 40000,
    gulu: 45000,
    other: 60000
};

// DOM Elements
const productModal = document.getElementById('product-modal');
const cartModal = document.getElementById('cart-modal');
const authModal = document.getElementById('auth-modal');
const closeModalBtns = document.querySelectorAll('.close-modal, .close-cart');
const cartBtn = document.getElementById('cart-btn');
const loginBtn = document.getElementById('login-btn');
const cartCount = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartSummary = document.getElementById('cart-summary');
const checkoutBtn = document.getElementById('checkout-btn');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const goToRegister = document.getElementById('go-to-register');
const goToLogin = document.getElementById('go-to-login');
const locationSelect = document.getElementById('location-select');
const deliveryFeeElement = document.getElementById('delivery-fee');
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const categoryDropdown = document.querySelector('.category-dropdown');
const categoryLinks = document.querySelectorAll('.dropdown-content a');
const productsGrid = document.getElementById('products-grid');
const newArrivalsGrid = document.getElementById('new-arrivals-grid');

// Cart Data
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// Initialize the page
function init() {
    renderProducts();
    updateCartCount();
    renderCartItems();
    setupEventListeners();
    renderFooter();
    renderAuthForms();
}

// Render products
function renderProducts() {
    // Featured products (first 6)
    const featuredProducts = products.slice(0, 6);
    productsGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');

    // New arrivals (last 4)
    const newArrivals = products.slice(6);
    newArrivalsGrid.innerHTML = newArrivals.map(product => createProductCard(product)).join('');

    // Add event listeners to new buttons
    addProductEventListeners();
}

// Create product card HTML
function createProductCard(product) {
    const discountBadge = product.discount ? `<span class="product-badge">-${product.discount}</span>` : '';
    const originalPrice = product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : '';
    const discount = product.discount ? `<span class="discount">${product.discount} off</span>` : '';

    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            ${discountBadge}
            <div class="product-img">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">${product.currentPrice}</span>
                    ${originalPrice}
                    ${discount}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart">Add to Cart</button>
                    <button class="view-details">View Details</button>
                </div>
            </div>
        </div>
    `;
}

// Add event listeners to product buttons
function addProductEventListeners() {
    // View details buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const productCard = btn.closest('.product-card');
            const productId = parseInt(productCard.dataset.id);
            const product = products.find(p => p.id === productId);
            openProductModal(product);
        });
    });

    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const productCard = btn.closest('.product-card');
            const productId = parseInt(productCard.dataset.id);
            const product = products.find(p => p.id === productId);
            addToCart(product, 1);
        });
    });
}

// Render footer
function renderFooter() {
    const footerContainer = document.querySelector('.footer-container');
    footerContainer.innerHTML = `
        <div class="footer-col">
            <h3>RWata Nyongeza Oilers</h3>
            <p>Your one-stop shop for all your needs. Quality products at affordable prices with fast delivery across Uganda.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
        <div class="footer-col">
            <h3>Quick Links</h3>
            <ul class="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Deals</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Customer Service</h3>
            <ul class="footer-links">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Order Tracking</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Refunds</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Contact Info</h3>
            <ul class="footer-links">
                <li><i class="fas fa-map-marker-alt"></i> Kampala, Uganda</li>
                <li><i class="fas fa-phone"></i> +256 700 123456</li>
                <li><i class="fas fa-envelope"></i> info@rwatanyongeza.com</li>
                <li><i class="fas fa-clock"></i> Mon-Sat: 8:00 - 18:00</li>
            </ul>
        </div>
    `;
}

// Render auth forms
function renderAuthForms() {
    loginForm.innerHTML = `
        <div class="form-group">
            <label for="login-email">Email</label>
            <input type="email" id="login-email" class="form-control" placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" class="form-control" placeholder="Enter your password">
        </div>
        <button class="auth-btn" id="login-submit">Login</button>
        <p class="auth-footer">
            Don't have an account? <span class="toggle-auth" id="go-to-register">Register here</span>
        </p>
    `;

    registerForm.innerHTML = `
        <div class="form-group">
            <label for="register-name">Full Name</label>
            <input type="text" id="register-name" class="form-control" placeholder="Enter your full name">
        </div>
        <div class="form-group">
            <label for="register-email">Email</label>
            <input type="email" id="register-email" class="form-control" placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="register-password">Password</label>
            <input type="password" id="register-password" class="form-control" placeholder="Create a password">
        </div>
        <div class="form-group">
            <label for="register-confirm">Confirm Password</label>
            <input type="password" id="register-confirm" class="form-control" placeholder="Confirm your password">
        </div>
        <button class="auth-btn" id="register-submit">Register</button>
        <p class="auth-footer">
            Already have an account? <span class="toggle-auth" id="go-to-login">Login here</span>
        </p>
    `;
}

// Set up event listeners
function setupEventListeners() {
    // Modal close buttons
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            productModal.style.display = 'none';
            cartModal.style.display = 'none';
            authModal.style.display = 'none';
        });
    });

    // Cart button
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isLoggedIn) {
            openAuthModal();
            return;
        }
        cartModal.classList.add('active');
    });

    // Login button
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAuthModal();
    });

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (!isLoggedIn) {
            openAuthModal();
            return;
        }
        alert('Proceeding to checkout...');
    });

    // Auth tabs
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    registerTab.addEventListener('click', () => {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Toggle between login and register
    goToRegister.addEventListener('click', () => {
        registerTab.click();
    });

    goToLogin.addEventListener('click', () => {
        loginTab.click();
    });

    // Location select change
    if (locationSelect) {
        locationSelect.addEventListener('change', updateDeliveryFee);
    }

    // Search functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Category filter
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.textContent;
            filterProductsByCategory(category);
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
    });

    // Login form submission
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'login-submit') {
            handleLogin();
        }
    });
    
    // Register form submission
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'register-submit') {
            handleRegister();
        }
    });
}

// Open product modal
function openProductModal(product) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="product-gallery">
            <div class="main-image">
                <img id="main-product-image" src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="thumbnail-container">
                ${product.images.map((img, index) => `
                    <div class="thumbnail">
                        <img src="${img}" alt="Thumbnail ${index + 1}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="product-details">
            <span class="product-brand">${product.brand}</span>
            <h2 class="product-name">${product.name}</h2>
            <div class="product-rating">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <span class="review-count">(24 reviews)</span>
            </div>
            <div class="price-container">
                <span class="current-price-lg">${product.currentPrice}</span>
                ${product.originalPrice ? `<span class="original-price-lg">${product.originalPrice}</span>` : ''}
                ${product.discount ? `<span class="discount-lg">${product.discount} off</span>` : ''}
            </div>
            <div class="availability">
                <i class="fas fa-check-circle"></i> In Stock (15 items available)
            </div>
            <p class="product-description">
                ${product.description}
            </p>
            <div class="delivery-options">
                <h4 class="delivery-title">Delivery Options</h4>
                <select class="location-select" id="location-select">
                    <option value="">Select your location</option>
                    <option value="kampala">Kampala</option>
                    <option value="entebbe">Entebbe</option>
                    <option value="jinja">Jinja</option>
                    <option value="mbarara">Mbarara</option>
                    <option value="gulu">Gulu</option>
                    <option value="other">Other Locations</option>
                </select>
                <p class="delivery-fee">Delivery Fee: <span id="delivery-fee">UGX 0</span></p>
            </div>
            <div class="quantity-selector">
                <button class="quantity-btn minus">-</button>
                <input type="number" class="quantity-input" value="1" min="1">
                <button class="quantity-btn plus">+</button>
            </div>
            <div class="action-buttons">
                <button class="add-to-cart-lg">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="buy-now">
                    <i class="fas fa-bolt"></i> Buy Now
                </button>
            </div>
        </div>
    `;

    // Set up thumbnail click events
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const mainImage = document.getElementById('main-product-image');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });

    // Set up quantity buttons
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-input');

    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    // Set up add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-lg');
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(product, quantity);
        productModal.style.display = 'none';
    });

    // Set up buy now button
    const buyNowBtn = document.querySelector('.buy-now');
    buyNowBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(product, quantity);
        productModal.style.display = 'none';
        cartModal.classList.add('active');
    });

    // Show modal
    productModal.style.display = 'block';
}

// Open auth modal
function openAuthModal() {
    authModal.style.display = 'block';
}

// Add to cart
function addToCart(product, quantity) {
    if (!isLoggedIn) {
        openAuthModal();
        return;
    }

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.currentPrice,
            image: product.images[0],
            quantity: quantity
        });
    }

    updateCart();
}

// Update cart
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <button class="shop-now-btn">Shop Now</button>
            </div>
        `;
        cartSummary.style.display = 'none';
        
        // Add event listener to shop now button
        document.querySelector('.shop-now-btn')?.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
        
        return;
    }

    cartItemsContainer.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const priceNumber = parseInt(item.price.replace(/[^\d]/g, ''));
        const itemTotal = priceNumber * item.quantity;
        subtotal += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">${item.price}</p>
                <div class="cart-item-quantity">
                    <button class="cart-quantity-btn minus">-</button>
                    <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1">
                    <button class="cart-quantity-btn plus">+</button>
                </div>
            </div>
            <button class="remove-item">&times;</button>
        `;

        cartItemsContainer.appendChild(cartItemElement);

        // Add event listeners for quantity buttons
        const minusBtn = cartItemElement.querySelector('.minus');
        const plusBtn = cartItemElement.querySelector('.plus');
        const quantityInput = cartItemElement.querySelector('.cart-quantity-input');
        const removeBtn = cartItemElement.querySelector('.remove-item');

        minusBtn.addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
                quantityInput.value = item.quantity;
                updateCart();
            }
        });

        plusBtn.addEventListener('click', () => {
            item.quantity++;
            quantityInput.value = item.quantity;
            updateCart();
        });

        quantityInput.addEventListener('change', () => {
            const newQuantity = parseInt(quantityInput.value);
            if (newQuantity >= 1) {
                item.quantity = newQuantity;
                updateCart();
            }
        });

        removeBtn.addEventListener('click', () => {
            cart = cart.filter(cartItem => cartItem.id !== item.id);
            updateCart();
        });
    });

    // Calculate delivery fee (example: 5% of subtotal with minimum of 15000 UGX)
    const deliveryFee = Math.max(15000, subtotal * 0.05);
    const total = subtotal + deliveryFee;

    // Update summary
    cartSummary.innerHTML = `
        <div class="summary-row">
            <span class="summary-title">Subtotal</span>
            <span class="summary-value">UGX ${subtotal.toLocaleString()}</span>
        </div>
        <div class="summary-row">
            <span class="summary-title">Delivery Fee</span>
            <span class="summary-value">UGX ${deliveryFee.toLocaleString()}</span>
        </div>
        <div class="summary-row total">
            <span class="summary-title">Total</span>
            <span class="summary-value">UGX ${total.toLocaleString()}</span>
        </div>
        <button class="checkout-btn" id="checkout-btn">Proceed to Checkout</button>
    `;

    // Re-add event listener to checkout button
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (!isLoggedIn) {
            openAuthModal();
            return;
        }
        alert('Proceeding to checkout...');
    });

    cartSummary.style.display = 'block';
}

// Update delivery fee
function updateDeliveryFee() {
    const location = document.getElementById('location-select').value;
    if (location && deliveryFees[location]) {
        document.getElementById('delivery-fee').textContent = `UGX ${deliveryFees[location].toLocaleString()}`;
    } else {
        document.getElementById('delivery-fee').textContent = 'UGX 0';
    }
}

// Search functionality
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (!searchTerm.trim()) return;

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    alert(`Found ${filteredProducts.length} products matching "${searchTerm}"`);
    // In a real app, you would display these results
}

// Filter products by category
function filterProductsByCategory(category) {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        if (category === 'All' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Handle login
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // In a real app, you would validate credentials with a server
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    authModal.style.display = 'none';
    alert('Login successful!');
}

// Handle register
function handleRegister() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;

    if (!name || !email || !password || !confirm) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }

    // In a real app, you would send this data to a server
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    authModal.style.display = 'none';
    alert('Registration successful! You are now logged in.');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);
