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
        
        const cartButton = this.querySelector('#open-cart');
        if (cartButton) {
            // Note: The listener is set on the button inside the navbar component
            cartButton.addEventListener('click', () => {
                const cartModal = document.getElementById('cart-modal');
                if (cartModal) {
                    cartModal.classList.remove('hidden');
                    cartModal.classList.add('flex');
                }
            });
        }
    }
}
customElements.define('custom-navbar', CustomNavbar);

// components/footer.js
class CustomFooter extends HTMLElement {
    connectedCallback() {
        // CORRECTED: Calculate the current year here to ensure it is rendered
        const currentYear = new Date().getFullYear(); 
        
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
                        <p>&copy; ${currentYear} Charlie&Co, Inc. All Rights Reserved.</p>
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
    
    // --- Sample Product Data (Added more descriptive names for clarity) ---
    const products = [
        { name: "Nike Jordan Low", category: "Nike", price: 999.00, image: "item12.jpg", isNew: true },
        { name: "Adidas Retro Trainer", category: "Adidas", price: 1199.00, image: "item11.jpg", isNew: false },
        { name: "Steve Madden Sandal", category: "Steve Madden", price: 1199.00, image: "item2.jpg", isNew: true },
        { name: "Black Lifestyle Sneaker", category: "Full Black", price: 1199.00, image: "item3.jpg", isNew: false },
        { name: "Nike Jordan Mid", category: "Green", price: 1099.00, image: "item5.jpg", isNew: true },
        { name: "Nike Air Max DN 8", category: "Green/Black", price: 1399.00, image: "item7.jpg", isNew: false },
        { name: "Steve Madden Pink", category: "Hot Pink", price: 1199.00, image: "item4.jpg", isNew: false },
        { name: "New Balance Runner", category: "New Balance", price: 1099.00, image: "item10.jpg", isNew: false },
    ];

    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // --- Product Rendering & Filtering ---
    function renderProducts(filteredProducts) {
        productsGrid.innerHTML = ''; 
        if (!productsGrid || filteredProducts.length === 0) {
            if (productsGrid) {
                productsGrid.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg py-10">No products found in this category.</p>';
            }
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
                // Robust filtering by normalizing the strings
                filtered = products.filter(p => p.category.toLowerCase().trim() === filter.toLowerCase().trim());
            }
            renderProducts(filtered);
        });
    });

    // Initial render
    renderProducts(products);


    // --- Cart Functionality ---
    const cart = [];
    const closeCartBtn = document.getElementById('close-cart');
    
    // Check if elements exist before attaching listeners
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            const cartModal = document.getElementById('cart-modal');
            if (cartModal) {
                cartModal.classList.remove('flex');
                cartModal.classList.add('hidden');
            }
        });
    }

    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartTotal = document.getElementById('cart-total');
        const cartCount = document.getElementById('cart-count');

        if (!cartItemsContainer || !cartSubtotal || !cartTotal || !cartCount) return; // Guard clause

        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
             cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 italic">Your bag is empty.</p>';
        }

        cart.forEach((item, index) => {
            subtotal += item.price;
            const itemElement = document.createElement('div');
            itemElement.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'pb-3', 'mb-3');
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
        cartTotal.textContent = `R${subtotal.toFixed(2)}`;
        cartCount.textContent = cart.length;
        
        attachRemoveListeners();
    }

    function attachRemoveListeners() {
        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'), 10);
                cart.splice(index, 1);
                updateCartDisplay();
            });
        });
    }

    function attachCartListeners() {
        document.querySelectorAll('product-card .add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                // Get the parent custom element (<product-card>)
                const card = e.target.closest('product-card'); 

                // Retrieve data directly from the attributes for consistency
                const productName = card.getAttribute('name');
                const productCategory = card.getAttribute('category');
                // Ensure price is a number
                const productPrice = parseFloat(card.getAttribute('price')); 
                const productImage = card.getAttribute('image');

                const product = {
                    name: productName,
                    category: productCategory,
                    price: productPrice,
                    image: productImage
                };
                
                cart.push(product);
                updateCartDisplay();
                
                const cartModal = document.getElementById('cart-modal');
                if (cartModal) {
                    cartModal.classList.remove('hidden');
                    cartModal.classList.add('flex');
                }
            });
        });
    }
}); 

// -------------------------

// script.js
// script.js (Updated to correctly reference the search button ID)
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration ---
    const PRODUCTS_PER_PAGE = 10;
    let currentPage = 1;
    let currentFilter = 'all';
    let currentSearchTerm = ''; 

    // --- Sample Product Data ---
    const allProducts = [
        // Page 1
        { id: 1, name: "Nike Nike Shox unisex", category: "Nike", price: 1299.00, image: "item6.jpg", isNew: true },
        { id: 2, name: "Nike White Shox", category: "Nike", price: 1299.00, image: "item8.jpg", isNew: false },
        { id: 3, name: "Puma", category: "Puma unisex red", price: 1199.00, image: "item14.jpg", isNew: true },
        { id: 4, name: "Puma", category: "Puma black", price: 1199.00, image: "item21.jpg", isNew: true },
        { id: 5, name: "Puma", category: "Puma blue", price: 1199.00, image: "item15.jpg", isNew: false },
        { id: 6, name: "Timberland", category: "Timberland pemium 6-Inch boot Men", price: 2999.00, image: "item16.jpg", isNew: false },
        { id: 7, name: "Greenstride Motion", category: "Timberland", price: 1299.00, image: "item17.jpg", isNew: false },
        { id: 8, name: "Timberland", category: "Timberland Green", price: 1399.00, image: "item18.jpg", isNew: true },
        { id: 9, name: "New Balance 550", category: "New Balance White/Yellow", price: 1199.00, image: "item19.jpg", isNew: false },
        { id: 10, name: "New Balance 550", category: "New Balance", price: 1199.00, image: "item20.jpg", isNew: false },

        
        // Page 2
        { id: 1, name: "New Balance 550", category: "New Balance Black and white", price: 1199.00, image: "item22.jpg", isNew: true },
        { id: 2, name: "Jordan 1", category: "Pink Nike", price: 1099.00, image: "item23.jpg", isNew: false },
        { id: 3, name: "Nike", category: "Black and White Nike", price: 1299.00, image: "item24.jpg", isNew: true },
        { id: 4, name: "Adidas Campus", category: "Adidas Hot Pink", price: 1099.00, image: "item25.jpg", isNew: true },
        { id: 5, name: "Nike dunk low", category: "Nike Green", price: 1199.00, image: "item26.jpg", isNew: false },
        { id: 6, name: "Nike", category: "Nike Pink White", price: 1199.00, image: "item27.jpg", isNew: false },
        { id: 7, name: "Nike", category: "Nike White", price: 1099.00, image: "item28.jpg", isNew: false },
        { id: 8, name: "Nike", category: "Black", price: 1099.00, image: "item29.jpg", isNew: true },
        { id: 9, name: "Nike Shok", category: "Blue", price: 1299.00, image: "item30.jpg", isNew: false },
        { id: 10, name: "New Balance 9060", category: "New Balance Black", price: 1399.00, image: "item31.jpg", isNew: false },

            // Page 3
        { id: 1, name: "Nike Jordan", category: "Nike Air", price: 1099.00, image: "item32.jpg", isNew: true },
        { id: 2, name: "Nike", category: "Nike Brown and Red", price: 1399.00, image: "item33.jpg", isNew: false },
        { id: 3, name: "Adidas", category: "Adidas", price: 1199.00, image: "item34.jpg", isNew: true },
        { id: 4, name: "Adidas", category: "Adidas", price: 1199.00, image: "item35.jpg", isNew: true },
        { id: 5, name: "Nike", category: "Nike", price: 1399.00, image: "item36.jpg", isNew: false },
        { id: 6, name: "Adidas Campus", category: "Adidas", price: 1299.00, image: "item37.jpg", isNew: false },
        { id: 7, name: "Adidas", category: "Adidas ", price: 1099.00, image: "item38.jpg", isNew: false },
        { id: 8, name: "Nike TN", category: "Barcelona", price: 1299.00, image: "item39.jpg", isNew: true },
        { id: 9, name: "New Balance", category: "New Balance", price: 1000.00, image: "item40.jpg", isNew: false },
        { id: 10, name: "Nike Air", category: "Nike Air", price: 1099.00, image: "item42.jpg", isNew: false },

            // Page 4
        { id: 1, name: "Nike Air", category: "Nike Pink & White", price: 1099.00, image: "item41.jpg", isNew: true },
        { id: 2, name: "Nike TN", category: "Nike Pink", price: 1299.00, image: "item43.jpg", isNew: false },
        { id: 3, name: "Puma", category: "Puma", price: 999.00, image: "item44.jpg", isNew: true },
        { id: 4, name: "New Balance 9060", category: "New Balance", price: 1399.00, image: "item45.jpg", isNew: true },
        { id: 5, name: "Nike Dunk", category: "Nike", price: 1199.00, image: "item46.jpg", isNew: false },
        { id: 6, name: "Nike Dunk low", category: "Nike Orange", price: 1099.00, image: "item47.jpg", isNew: false },
        { id: 7, name: "Nike Dunk low", category: "Nike Green", price: 1099.00, image: "item48.jpg", isNew: false },
        { id: 8, name: "Nike Dunk low", category: "Nike Pink", price: 1099.00, image: "item49.jpg", isNew: true },
        { id: 9, name: "Nike Portal", category: "Nike White", price: 1299.00, image: "item50.jpg", isNew: false },
        { id: 10, name: "Nike Portal", category: "Nike Pink", price: 1299.00, image: "item51.jpg", isNew: false },

        // Page 5
        { id: 1, name: "Adidas Superstar", category: "Adidas Brown", price: 999.00, image: "item52.jpg", isNew: true },
        { id: 2, name: "New Balance 1000", category: "New Balance Pink", price: 1499.00, image: "item53.jpg", isNew: false },
        { id: 3, name: "Converse All Star Black", category: "Converse Night Black", price: 1199.00, image: "item54.jpg", isNew: true },
        { id: 4, name: "Converse All Star", category: "Converse White", price: 1099.00, image: "item55.jpg", isNew: true },
        { id: 5, name: "Converse All Star", category: "Converse Black", price: 1099.00, image: "item56.jpg", isNew: false },
        { id: 6, name: "Timberland", category: "Timberland Brown", price: 1399.00, image: "item57.jpg", isNew: false },
        { id: 7, name: "Timberland", category: "Timberland Black ", price: 1399.00, image: "item58.jpg", isNew: false },
        { id: 8, name: "Steve Madden", category: "Steve Madden", price: 1199.00, image: "item59.jpg", isNew: true },
        { id: 9, name: "New Balance 550", category: "New Balance ", price: 1199.00, image: "item60.jpg", isNew: false },
        { id: 10, name: "Nike Shox", category: "Nike Black", price: 1299.00, image: "item61.jpg", isNew: false },
    ];

    // --- DOM Elements ---
    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const paginationContainer = document.getElementById('pagination-container');
    
    // 💡 FIX: Select the button using the reliable ID you need to add to your navbar component.
    const searchButton = document.getElementById('open-search'); 
    let searchInput; 

    // --- Search Modal Setup ---
    function setupSearchModal() {
        // Create a simple overlay and input field for search
        const searchModal = document.createElement('div');
        searchModal.id = 'search-modal';
        searchModal.classList.add('hidden', 'fixed', 'inset-0', 'z-50', 'bg-black', 'bg-opacity-80', 'flex', 'justify-center', 'pt-10');
        searchModal.innerHTML = `
            <div class="w-full max-w-2xl bg-white p-4 rounded-lg shadow-xl relative">
                <input id="search-input" type="text" placeholder="Search for shoe names or categories..."
                       class="w-full text-xl p-3 border-2 border-gray-300 rounded-lg focus:border-accent outline-none">
                <button id="close-search" class="absolute top-5 right-5 text-gray-500 hover:text-primary">
                    <i data-feather="x" class="w-6 h-6"></i>
                </button>
            </div>
        `;
        document.body.appendChild(searchModal);
        feather.replace(); // Initialize feather icons in the new modal

        searchInput = document.getElementById('search-input');
        const closeSearchBtn = document.getElementById('close-search');

        // Close search functionality
        closeSearchBtn.addEventListener('click', () => {
            searchModal.classList.add('hidden');
        });

        // Search input functionality
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.toLowerCase().trim();
            currentPage = 1; 
            filterAndPaginateProducts();
        });
    }
    setupSearchModal(); // Call this immediately on DOMContentLoaded

    // 💡 FIX: Attach the event listener directly to the element found by ID.
    // The Web Component itself should handle the click event and open the modal
    // OR we attach the listener here AFTER the Web Component has rendered.
    // Since we're using the setupSearchModal to create the modal, we'll
    // rely on the Web Component to attach its own listener to #open-search 
    // and open the modal when clicked.
    
    // REMOVING the listener here, as it should be handled inside the web component
    // or by checking if the element is available after the web component is defined.
    // For now, let's keep it here, but reference the ID.
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchModal = document.getElementById('search-modal');
            if (searchModal) {
                 searchModal.classList.remove('hidden');
                 if (searchInput) searchInput.focus();
            }
        });
    }
    

    // --- Core Rendering & Filtering Logic ---

    function filterAndPaginateProducts() {
        // 1. Start with products filtered by Category
        let filteredByFilter = currentFilter === 'all'
            ? allProducts
            : allProducts.filter(p => p.category.toLowerCase().trim() === currentFilter.toLowerCase().trim());
        
        // 2. Filter by Search Term (applied to the category-filtered list)
        const finalFilteredProducts = currentSearchTerm
            ? filteredByFilter.filter(p => 
                p.name.toLowerCase().includes(currentSearchTerm) || 
                p.category.toLowerCase().includes(currentSearchTerm)
              )
            : filteredByFilter;
        
        // 3. Calculate pagination based on the FINAL filtered list
        const totalPages = Math.ceil(finalFilteredProducts.length / PRODUCTS_PER_PAGE);
        
        // Adjust current page if it's out of bounds after filtering
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        } else if (totalPages === 0) {
            currentPage = 1;
        }

        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        const endIndex = startIndex + PRODUCTS_PER_PAGE;
        const productsForPage = finalFilteredProducts.slice(startIndex, endIndex);

        // 4. Render the products and pagination controls
        renderProducts(productsForPage);
        renderPagination(totalPages);
    }

    // ... (renderProducts function remains the same) ...
    function renderProducts(productsToDisplay) {
        productsGrid.innerHTML = ''; 
        if (!productsGrid || productsToDisplay.length === 0) {
            if (productsGrid) {
                productsGrid.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg py-10">No products found for this query or category.</p>';
            }
            return;
        }

        productsToDisplay.forEach(product => {
            const card = document.createElement('product-card');
            card.setAttribute('name', product.name);
            card.setAttribute('category', product.category);
            card.setAttribute('price', product.price.toFixed(2));
            card.setAttribute('image', product.image);
            if (product.isNew) card.setAttribute('new', '');
            productsGrid.appendChild(card);
        });
        
        attachCartListeners();
    }

    // --- Pagination Logic ---

    function renderPagination(totalPages) {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add(
                'px-4', 'py-2', 'font-semibold', 'rounded-full', 
                'transition-colors', 'duration-150', 'text-lg'
            );
            
            if (i === currentPage) {
                button.classList.add('bg-accent', 'text-white');
            } else {
                button.classList.add('bg-gray-200', 'text-primary', 'hover:bg-gray-300');
            }

            button.addEventListener('click', () => {
                currentPage = i;
                filterAndPaginateProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            paginationContainer.appendChild(button);
        }
    }

    // --- Event Listeners ---

    // Filter logic
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const newFilter = e.target.getAttribute('data-filter').toLowerCase().trim();
            
            // Highlight active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            currentFilter = newFilter;
            currentPage = 1; // Reset to first page on filter change
            currentSearchTerm = ''; // Clear search when category filter changes (optional but usually desired)
            if (searchInput) searchInput.value = '';

            filterAndPaginateProducts();
        });
    });

    // Initial render
    filterAndPaginateProducts();


    // --- Cart Functionality (Unchanged) ---
    const cart = [];

    const closeCartBtn = document.getElementById('close-cart');
    
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            const cartModal = document.getElementById('cart-modal');
            if (cartModal) {
                cartModal.classList.remove('flex');
                cartModal.classList.add('hidden');
            }
        });
    }

    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartTotal = document.getElementById('cart-total');
        const cartCount = document.getElementById('cart-count');

        if (!cartItemsContainer || !cartSubtotal || !cartTotal || !cartCount) return;

        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
             cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 italic">Your bag is empty.</p>';
        }

        cart.forEach((item, index) => {
            subtotal += item.price;
            const itemElement = document.createElement('div');
            itemElement.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'pb-3', 'mb-3');
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

        cartSubtotal.textContent = `R${subtotal.toFixed(2)}`;
        cartTotal.textContent = `R${subtotal.toFixed(2)}`;
        cartCount.textContent = cart.length;
        
        attachRemoveListeners();
    }

    function attachRemoveListeners() {
        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'), 10);
                cart.splice(index, 1);
                updateCartDisplay();
            });
        });
    }

    function attachCartListeners() {
        document.querySelectorAll('product-card .add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const card = e.target.closest('product-card'); 

                const productName = card.getAttribute('name');
                const productCategory = card.getAttribute('category');
                const productPrice = parseFloat(card.getAttribute('price')); 
                const productImage = card.getAttribute('image');

                const product = {
                    name: productName,
                    category: productCategory,
                    price: productPrice,
                    image: productImage
                };
                
                cart.push(product);
                updateCartDisplay();
                
                const cartModal = document.getElementById('cart-modal');
                if (cartModal) {
                    cartModal.classList.remove('hidden');
                    cartModal.classList.add('flex');
                }
            });
        });
    }
});