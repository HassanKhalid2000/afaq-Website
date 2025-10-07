'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CartCounter() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    updateCartCount();
    
    // Listen for storage changes (cart updates)
    window.addEventListener('storage', updateCartCount);
    
    // Custom event listener for cart updates
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
      const count = Object.values(cart).reduce((total, quantity) => total + (quantity as number), 0);
      setCartCount(count);
    } catch (error) {
      setCartCount(0);
    }
  };

  return (
    <Link
      href="/cart"
      className="text-gray-700 hover:text-purple-600 relative p-2"
      title="سلة المشتريات"
    >
      <i className="fas fa-shopping-cart text-xl"></i>
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {cartCount > 99 ? '99+' : cartCount}
        </span>
      )}
    </Link>
  );
}