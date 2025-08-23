import { useState, useRef, useEffect } from 'react';

interface UseMobileMenuProps {
  onLinkClick?: () => void;
}

export function useMobileMenu({ onLinkClick }: UseMobileMenuProps = {}) {
  const [isDropDown, setIsDropDown] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsDropDown(!isDropDown);
  };

  const closeDropdown = () => {
    setIsDropDown(false);
  };

  const handleLinkClick = () => {
    closeDropdown();
    onLinkClick?.();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        hamburgerRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDropDown) {
        closeDropdown();
      }
    };

    // Add event listeners only when dropdown is open
    if (isDropDown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isDropDown]);

  return {
    isDropDown,
    mobileMenuRef,
    hamburgerRef,
    toggleDropdown,
    closeDropdown,
    handleLinkClick
  };
}
