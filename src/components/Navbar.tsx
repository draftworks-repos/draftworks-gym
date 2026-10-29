import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export type PageRoute = 'home' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, sectionId?: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleLinkClick = (e: React.MouseEvent, page: PageRoute, sectionId?: string) => {
    e.preventDefault();
    closeMenu();
    onNavigate(page, sectionId);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-container navbar-inner">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, 'home', 'hero')}
          aria-label="Draftworks Gym Home"
        >
          <img
            src="/assets/aistudio/templogo_4279d28a.png"
            alt="Draftworks Gym"
            className="navbar-logo-img"
          />
        </a>

        {/* Desktop Navigation Links: EXACTLY Services, Coaches, Gallery, About, Contact */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-links">
            <li>
              <a
                href="#services"
                className={`navbar-link ${currentPage === 'home' ? '' : ''}`}
                onClick={(e) => handleLinkClick(e, 'home', 'services')}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#coaches"
                className="navbar-link"
                onClick={(e) => handleLinkClick(e, 'home', 'coaches')}
              >
                Coaches
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="navbar-link"
                onClick={(e) => handleLinkClick(e, 'home', 'gallery')}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`navbar-link ${currentPage === 'about' ? 'active-nav-link' : ''}`}
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`navbar-link ${currentPage === 'contact' ? 'active-nav-link' : ''}`}
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="navbar-actions">
          <button
            type="button"
            className="btn-contact"
            onClick={() => onNavigate('contact')}
          >
            CONTACT US
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a
            href="#services"
            className="navbar-link"
            onClick={(e) => handleLinkClick(e, 'home', 'services')}
          >
            Services
          </a>
          <a
            href="#coaches"
            className="navbar-link"
            onClick={(e) => handleLinkClick(e, 'home', 'coaches')}
          >
            Coaches
          </a>
          <a
            href="#gallery"
            className="navbar-link"
            onClick={(e) => handleLinkClick(e, 'home', 'gallery')}
          >
            Gallery
          </a>
          <a
            href="/about"
            className={`navbar-link ${currentPage === 'about' ? 'active-nav-link' : ''}`}
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About
          </a>
          <a
            href="/contact"
            className={`navbar-link ${currentPage === 'contact' ? 'active-nav-link' : ''}`}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact
          </a>

          <button
            type="button"
            className="btn-contact"
            onClick={() => {
              closeMenu();
              onNavigate('contact');
            }}
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
};
