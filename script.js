// components/navbar.js
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="sticky top-0 z-40 bg-white shadow-md">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" class="text-3xl font-extrabold uppercase text-primary tracking-tight">
                        Charlie&<span class="text-accent">Co</span>
                    </a>

                    <div class="hidden md:flex space-x-8 text-sm font-bold uppercase">
                        <a href="#shop" class="text-primary hover:text-accent transition-colors">Men's</a>
                        <a href="#shop" class="text-primary hover:text-accent transition-colors">Women's</a>
                        <a href="/releases" class="text-primary hover:text-accent transition-colors">New & Featured</a>
                        <a href="/sale" class="text-red-600 hover:text-red-700 transition-colors">Sale</a>
                    </div>

                    <div class="flex items-center space-x-4">
                        <button class="text-primary hover:text-accent p-2">
                            <i data-feather="search" class="w-6 h-6"></i>
                        </button>
                        <button class="text-primary hover:text-accent p-2">
                            <i data-feather="user" class="w-6 h-6"></i>
                        </button>
                        <button id="open-cart" class="relative text-primary hover:text-accent p-2">
                            <i data-feather="shopping-bag" class="w-6 h-6"></i>
                            <span id="cart-count" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">0</span>
                        </button>
                        <button class="md:hidden text-primary hover:text-accent p-2">
                            <i data-feather="menu" class="w-6 h-6"></i>
                        </button>
                    </div>
                </div>
            </nav>
        `;
        // Re-initialize feather icons after content is loaded
        feather.replace();
        
        // Add event listener for cart button
        this.querySelector('#open-cart').addEventListener('click', () => {
            document.getElementById('cart-modal').classList.remove('hidden');
            document.getElementById('cart-modal').classList.add('flex');
        });
    }
}
customElements.define('custom-navbar', CustomNavbar);

// components/footer.js
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-primary text-secondary py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8 mb-8">
                        <div>
                            <h4 class="text-lg font-bold mb-4 uppercase">GIFT CARDS</h4>
                            <h4 class="text-lg font-bold mb-4 uppercase">STUDENT DISCOUNT</h4>
                            <h4 class="text-lg font-bold mb-4 uppercase">FIND A STORE</h4>
                            <h4 class="text-lg font-bold mb-4 uppercase">SIGN UP FOR EMAIL</h4>
                            <h4 class="text-lg font-bold mb-4 uppercase">SITE FEEDBACK</h4>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold mb-4 uppercase">HELP</h4>
                            <ul class="space-y-2 text-sm text-gray-400">
                                <li><a href="#" class="hover:text-accent transition-colors">Order Status</a></li>
                                <li><a href="#" class="hover:text-accent transition-colors">Shipping & Delivery</a></li>
                                <li><a href="#" class="hover:text-accent transition-colors">Returns</a></li>
                                <li><a href="#" class="hover:text-accent transition-colors">Payment Options</a></li>
                                <li><a href="#" class="hover:text-accent transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold mb-4 uppercase">COMPANY</h4>
                            <ul class="space-y-2 text-sm text-gray-400">
                                <li><a href="#" class="hover:text-accent transition-colors">About Charlie&Co</a></li>
                                <li><a href="#" class="hover:text-accent transition-colors">News</a></li>
                                <li><a href="#" class="hover:text-accent transition-colors">Careers</a></li>
                                <li><a href="#" class="hover:text-accent transition-colors">Investors</a></li>
                            </ul>
                        </div>
                        <div class="col-span-2 md:col-span-2">
                            <h4 class="text-lg font-bold mb-4 uppercase">CONNECT WITH US</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="text-gray-400 hover:text-accent"><i data-feather="twitter" class="w-6 h-6"></i></a>
                                <a href="#" class="text-gray-400 hover:text-accent"><i data-feather="facebook" class="w-6 h-6"></i></a>
                                <a href="#" class="text-gray-400 hover:text-accent"><i data-feather="instagram" class="w-6 h-6"></i></a>
                                <a href="#" class="text-gray-400 hover:text-accent"><i data-feather="youtube" class="w-6 h-6"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                        <p>&copy; ${new Date().getFullYear()} Charlie&Co, Inc. All Rights Reserved.</p>
                        <div class="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" class="hover:text-accent">Guides</a>
                            <a href="#" class="hover:text-accent">Terms of Sale</a>
                            <a href="#" class="hover:text-accent">Privacy & Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
        feather.replace();
    }
}
customElements.define('custom-footer', CustomFooter);
// components/product-card.js
class ProductCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const name = this.getAttribute('name') || 'New Performance Runner';
        const category = this.getAttribute('category') || 'Running';
        const price = this.getAttribute('price') || '150.00';
        const image = this.getAttribute('image') || 'https://picsum.photos/id/42/400/300';
        const isNew = this.hasAttribute('new');

        this.innerHTML = `
            <div class="product-card bg-white rounded-lg overflow-hidden cursor-pointer border border-gray-100 p-2 relative" data-category="${category.toLowerCase()}">
                ${isNew ? '<span class="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase z-10 shadow-lg">New Drop</span>' : ''}
                
                <div class="h-64 mb-4 relative">
                    <img src="${image}" alt="${name}" class="w-full h-full object-cover rounded-md transition-opacity duration-300 hover:opacity-90">
                </div>
                
                <div class="px-2 pb-4">
                    <p class="text-xs text-gray-500 uppercase font-medium">${category}</p>
                    <h3 class="text-lg font-bold text-primary truncate">${name}</h3>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-xl font-extrabold text-primary">R${price}</span>
                        <button class="add-to-cart-btn bg-primary text-white rounded-full p-2 hover:bg-accent transition-colors" data-product-name="${name}" data-product-price="${price}">
                            <i data-feather="plus" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        feather.replace();
    }
}
customElements.define('product-card', ProductCard);
// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sample Product Data ---
    const products = [
        { name: "Nike Jodan low", category: "Nike", price: 999.00, image: "item12.jpg", isNew: true },
        { name: "Adidas", category: "Adidas", price: 1199.00, image: "item11.jpg", isNew: false },
        { name: "Steve Madden", category: "Steve Madden", price: 1199.00, image: "item2.jpg", isNew: true },
        { name: "Steve Madden", category: "Full Black", price: 1199.00, image: "item3.jpg", isNew: false },
        { name: "Nike Jordan", category: "Green", price: 1099.00, image: "item5.jpg", isNew: true },
        { name: "Nike Aire Mak DN 8", category: "Green/Black", price: 1399.00, image: "item7.jpg", isNew: false },
        { name: "Steve Madden", category: "Hot Pink", price: 1199.00, image: "item4.jpg", isNew: false },
        { name: "New Balance", category: "New Balance", price: 1099.00, image: "item10.jpg", isNew: false },
    ];

    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // --- Product Rendering & Filtering ---
    function renderProducts(filteredProducts) {
        productsGrid.innerHTML = ''; // Clear existing products
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg py-10">No products found in this category.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('product-card');
            card.setAttribute('name', product.name);
            card.setAttribute('category', product.category);
            card.setAttribute('price', product.price.toFixed(2));
            card.setAttribute('image', product.image);
            if (product.isNew) card.setAttribute('new', '');
            productsGrid.appendChild(card);
        });
        
        // Re-attach cart event listeners after rendering
        attachCartListeners();
    }

    // Filter logic
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            
            // Highlight active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            let filtered;
            if (filter === 'all') {
                filtered = products;
            } else {
                filtered = products.filter(p => p.category.toLowerCase() === filter);
            }
            renderProducts(filtered);
        });
    });

    // Initial render
    renderProducts(products);


    // --- Cart Functionality ---
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const closeCartBtn = document.getElementById('close-cart');
    
    closeCartBtn.addEventListener('click', () => {
        document.getElementById('cart-modal').classList.remove('flex');
        document.getElementById('cart-modal').classList.add('hidden');
    });

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
             cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 italic">Your bag is empty.</p>';
        }

        cart.forEach((item, index) => {
            subtotal += item.price;
            const itemElement = document.createElement('div');
            itemElement.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'pb-3');
            itemElement.innerHTML = `
                <div class="flex items-center space-x-4">
                    <img src="${item.image || 'https://picsum.photos/80'}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                    <div>
                        <p class="font-semibold text-sm">${item.name}</p>
                        <p class="text-xs text-gray-500">${item.category}</p>
                    </div>
                </div>
                <div class="text-right">
                    <span class="font-bold">R${item.price.toFixed(2)}</span>
                    <button class="remove-item-btn text-red-500 hover:text-red-700 block mt-1" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        // Update totals and badge
        cartSubtotal.textContent = `R${subtotal.toFixed(2)}`;
        cartTotal.textContent = `R${subtotal.toFixed(2)}`; // Assuming free shipping
        cartCount.textContent = cart.length;
        
        attachRemoveListeners();
    }

    function attachRemoveListeners() {
        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                cart.splice(index, 1);
                updateCartDisplay();
            });
        });
    }

    function attachCartListeners() {
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const card = e.target.closest('.product-card');
                const product = {
                    name: card.querySelector('h3').textContent,
                    category: card.querySelector('p').textContent,
                    price: parseFloat(card.querySelector('span:last-child').textContent.replace('R', '')),
                    image: card.querySelector('img').src
                };
                
                cart.push(product);
                updateCartDisplay();
                document.getElementById('cart-modal').classList.remove('hidden');
                document.getElementById('cart-modal').classList.add('flex');
            });
        });
    }
});