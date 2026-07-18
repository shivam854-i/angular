/**
 * Amazon Homepage Clone - AngularJS 1.x Application
 * Powered by AngularJS directives ($scope, ng-repeat, ng-model, ng-click, ng-show, etc.)
 */

var app = angular.module('amazonApp', []);

app.controller('MainController', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {

    // --- State Variables ---
    $scope.searchQuery = '';
    $scope.selectedCategory = 'All';
    $scope.isCartOpen = false;
    $scope.cart = [];
    $scope.toast = { show: false, message: '', image: '' };
    $scope.activeTab = 'all';

    // Categories List
    $scope.categories = [
        'All',
        'Electronics',
        'Gaming',
        'Home & Kitchen',
        'Fashion',
        'Books',
        'Deals'
    ];

    // Hero Carousel Banners
    $scope.slides = [
        {
            id: 1,
            title: "Ultimate Gaming Setup Deals",
            subtitle: "Save up to 40% on next-gen consoles, headsets & accessories",
            badge: "LIMITED TIME DEAL",
            bgGradient: "linear-gradient(135deg, #1f2937 0%, #111827 50%, #374151 100%)",
            accentColor: "#febd69",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
            ctaText: "Shop Gaming Deals"
        },
        {
            id: 2,
            title: "Upgrade Your Smart Home",
            subtitle: "Discover Alexa smart speakers, displays, security & lighting",
            badge: "BESTSELLERS",
            bgGradient: "linear-gradient(135deg, #0f766e 0%, #115e59 50%, #042f2e 100%)",
            accentColor: "#38bdf8",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80",
            ctaText: "Explore Smart Devices"
        },
        {
            id: 3,
            title: "Refresh Your Summer Wardrobe",
            subtitle: "Top brands in apparel, footwear & outdoor accessories",
            badge: "FASHION TRENDS",
            bgGradient: "linear-gradient(135deg, #831843 0%, #701a75 50%, #4c1d95 100%)",
            accentColor: "#f472b6",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
            ctaText: "Shop Fashion"
        }
    ];

    $scope.currentSlideIndex = 0;

    // Carousel Navigation Controls
    $scope.nextSlide = function() {
        $scope.currentSlideIndex = ($scope.currentSlideIndex + 1) % $scope.slides.length;
    };

    $scope.prevSlide = function() {
        $scope.currentSlideIndex = ($scope.currentSlideIndex - 1 + $scope.slides.length) % $scope.slides.length;
    };

    $scope.setSlide = function(index) {
        $scope.currentSlideIndex = index;
    };

    // Auto-advance hero carousel every 5 seconds
    var timer = $interval(function() {
        $scope.nextSlide();
    }, 5000);

    $scope.$on('$destroy', function() {
        $interval.cancel(timer);
    });

    // --- Amazon Homepage Category Quad Cards ---
    $scope.categoryCards = [
        {
            title: "Gaming accessories",
            image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=500&q=80",
            linkText: "See more in Gaming",
            category: "Gaming"
        },
        {
            title: "Refresh your space",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80",
            linkText: "Shop Home & Kitchen",
            category: "Home & Kitchen"
        },
        {
            title: "Deals in Electronics",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
            linkText: "Discover Tech",
            category: "Electronics"
        },
        {
            title: "Fashion & Trending Wear",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
            linkText: "Explore Fashion",
            category: "Fashion"
        }
    ];

    // --- Detailed Product Catalog ---
    $scope.products = [
        {
            id: 101,
            title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
            category: "Electronics",
            price: 348.00,
            originalPrice: 399.99,
            rating: 4.6,
            ratingStars: [1, 1, 1, 1, 0.5],
            reviewCount: 12450,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
            isPrime: true,
            isDeal: true,
            badge: "Epic Deal",
            deliveryDate: "Tomorrow, FREE Delivery"
        },
        {
            id: 102,
            title: "Apple 2024 MacBook Air 15\" Laptop with M3 chip, 16GB RAM, 512GB SSD Storage",
            category: "Electronics",
            price: 1299.00,
            originalPrice: 1499.00,
            rating: 4.8,
            ratingStars: [1, 1, 1, 1, 1],
            reviewCount: 4890,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
            isPrime: true,
            isDeal: true,
            badge: "#1 Best Seller",
            deliveryDate: "Wednesday, FREE One-Day"
        },
        {
            id: 103,
            title: "PlayStation 5 Console (Slim) - Digital Edition with Wireless DualSense Controller",
            category: "Gaming",
            price: 449.99,
            originalPrice: 499.99,
            rating: 4.7,
            ratingStars: [1, 1, 1, 1, 0.5],
            reviewCount: 38200,
            image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            isPrime: true,
            isDeal: false,
            badge: "Popular Choice",
            deliveryDate: "Tomorrow, FREE Delivery"
        },
        {
            id: 104,
            title: "Ergonomic Mesh High Back Office Desk Chair with Lumbar Support & Armrests",
            category: "Home & Kitchen",
            price: 159.99,
            originalPrice: 220.00,
            rating: 4.4,
            ratingStars: [1, 1, 1, 1, 0],
            reviewCount: 8910,
            image: "https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&w=600&q=80",
            isPrime: true,
            isDeal: true,
            badge: "Limited Time",
            deliveryDate: "Thursday, FREE Delivery"
        },
        {
            id: 105,
            title: "Logitech G Pro X Superlight 2 Wireless Gaming Mouse - Ultra Lightweight 60g",
            category: "Gaming",
            price: 139.99,
            originalPrice: 159.99,
            rating: 4.5,
            ratingStars: [1, 1, 1, 1, 0.5],
            reviewCount: 6300,
            image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            isPrime: true,
            isDeal: false,
            badge: "Prime Exclusive",
            deliveryDate: "Tomorrow, FREE Delivery"
        },
        {
            id: 106,
            title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker 6 Qt",
            category: "Home & Kitchen",
            price: 79.95,
            originalPrice: 99.99,
            rating: 4.7,
            ratingStars: [1, 1, 1, 1, 0.5],
            reviewCount: 154200,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
            isPrime: true,
            isDeal: true,
            badge: "#1 Bestseller",
            deliveryDate: "Tomorrow, FREE Delivery"
        },
        {
            id: 107,
            title: "Classic Waterproof Hooded Windbreaker Jacket - Lightweight Active Outerwear",
            category: "Fashion",
            price: 45.00,
            originalPrice: 65.00,
            rating: 4.3,
            ratingStars: [1, 1, 1, 1, 0],
            reviewCount: 3120,
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
            isPrime: true,
            isDeal: false,
            badge: "Fashion Top Pick",
            deliveryDate: "Friday, FREE Delivery"
        },
        {
            id: 108,
            title: "Kindle Paperwhite (16 GB) – Now with 6.8\" display and adjustable warm light",
            category: "Books",
            price: 149.99,
            originalPrice: 169.99,
            rating: 4.7,
            ratingStars: [1, 1, 1, 1, 0.5],
            reviewCount: 42100,
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
            isPrime: true,
            isDeal: true,
            badge: "Amazon Device",
            deliveryDate: "Tomorrow, FREE Delivery"
        }
    ];

    // Quick filter selection
    $scope.setCategory = function(cat) {
        $scope.selectedCategory = cat;
    };

    // Filter Logic for products
    $scope.productFilter = function(product) {
        // Category check
        var categoryMatches = ($scope.selectedCategory === 'All') ||
                              ($scope.selectedCategory === 'Deals' ? product.isDeal : product.category === $scope.selectedCategory);
        
        // Search text check
        var queryMatches = true;
        if ($scope.searchQuery && $scope.searchQuery.trim() !== '') {
            var q = $scope.searchQuery.toLowerCase().trim();
            queryMatches = product.title.toLowerCase().indexOf(q) !== -1 ||
                           product.category.toLowerCase().indexOf(q) !== -1;
        }

        return categoryMatches && queryMatches;
    };

    // --- Shopping Cart Functionality ---

    $scope.toggleCart = function() {
        $scope.isCartOpen = !$scope.isCartOpen;
    };

    $scope.addToCart = function(product) {
        var existing = $scope.cart.find(function(item) {
            return item.product.id === product.id;
        });

        if (existing) {
            existing.quantity += 1;
        } else {
            $scope.cart.push({
                product: product,
                quantity: 1
            });
        }

        // Trigger Notification Toast
        $scope.showToast('Added to Cart: ' + product.title, product.image);
    };

    $scope.removeFromCart = function(index) {
        $scope.cart.splice(index, 1);
    };

    $scope.updateQuantity = function(item, delta) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            var idx = $scope.cart.indexOf(item);
            if (idx !== -1) {
                $scope.cart.splice(idx, 1);
            }
        }
    };

    $scope.getCartCount = function() {
        var total = 0;
        angular.forEach($scope.cart, function(item) {
            total += item.quantity;
        });
        return total;
    };

    $scope.getCartSubtotal = function() {
        var total = 0;
        angular.forEach($scope.cart, function(item) {
            total += item.product.price * item.quantity;
        });
        return total;
    };

    // Toast Notification helper
    var toastTimeout;
    $scope.showToast = function(msg, img) {
        $scope.toast.message = msg;
        $scope.toast.image = img;
        $scope.toast.show = true;

        if (toastTimeout) {
            $timeout.cancel(toastTimeout);
        }

        toastTimeout = $timeout(function() {
            $scope.toast.show = false;
        }, 3000);
    };

    $scope.scrollToProducts = function() {
        var el = document.getElementById('products-section');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
}]);
