/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Loader } from "./components/Loader.tsx";
import { Navbar, PageRoute } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { About } from "./components/About.tsx";
import { Services } from "./components/Services.tsx";
import { WhyUs } from "./components/WhyUs.tsx";
import { Coaches } from "./components/Coaches.tsx";
import { Gallery } from "./components/Gallery.tsx";
import { Pricing } from "./components/Pricing.tsx";
import { Cta } from "./components/Cta.tsx";
import { Footer } from "./components/Footer.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { ContactPage } from "./pages/ContactPage.tsx";
import {
  ContactModal,
  JoinModal,
  VideoModal,
  TrainersModal,
  PrivacyModal,
  TermsModal,
} from "./components/Modals.tsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageRoute>("home");

  // Modal interaction states
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isTrainersOpen, setIsTrainersOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [joinModalState, setJoinModalState] = useState<{
    isOpen: boolean;
    plan: string;
    price: string;
  }>({
    isOpen: false,
    plan: "Pro Plan",
    price: "₹2000 / 3 month",
  });

  // Sync route on mount and browser navigation.
  useEffect(() => {
    const handleLocation = () => {
      const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
      const hash = window.location.hash.toLowerCase();

      if (
        pathname === "/about" ||
        (pathname === "/" && (hash === "#about-page" || hash === "#about"))
      ) {
        setCurrentPage("about");
        if (pathname === "/") {
          window.history.replaceState(null, "", "/about");
        }
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (
        pathname === "/contact" ||
        (pathname === "/" && (hash === "#contact-page" || hash === "#contact"))
      ) {
        setCurrentPage("contact");
        if (pathname === "/") {
          window.history.replaceState(null, "", "/contact");
        }
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        setCurrentPage("home");
      }
    };

    handleLocation();
    window.addEventListener("popstate", handleLocation);
    window.addEventListener("hashchange", handleLocation);
    return () => {
      window.removeEventListener("popstate", handleLocation);
      window.removeEventListener("hashchange", handleLocation);
    };
  }, []);

  const handleNavigate = (page: PageRoute, sectionId?: string) => {
    if (page === "home") {
      setCurrentPage("home");
      const destination = sectionId ? `/#${sectionId}` : "/";
      window.history.pushState(null, "", destination);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    } else if (page === "about") {
      setCurrentPage("about");
      window.history.pushState(null, "", "/about");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (page === "contact") {
      setCurrentPage("contact");
      window.history.pushState(null, "", "/contact");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const handleOpenJoin = (plan = "Pro Plan", price = "₹2000 / 3 month") => {
    setJoinModalState({
      isOpen: true,
      plan,
      price,
    });
  };

  const handleCloseJoin = () => {
    setJoinModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="app-wrapper">
      {/* 0 to 100% Initial Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={() => handleNavigate("contact")}
      />

      {/* Page Routing */}
      <main id="main-content">
        {currentPage === "home" && (
          <>
            <Hero
              onJoinClick={() => handleOpenJoin("Pro Plan", "₹2000 / 3 month")}
              onPlayVideo={() => setIsVideoOpen(true)}
            />

            <About onMeetTrainers={() => setIsTrainersOpen(true)} />

            <Services
              onSelectService={(serviceTitle) =>
                handleOpenJoin(serviceTitle, "Custom Program")
              }
            />

            <WhyUs
              onJoinClick={() => handleOpenJoin("Pro Plan", "₹2000 / 3 month")}
            />

            <Coaches
              onBookCoach={(coachName) =>
                handleOpenJoin(coachName, "Private Coaching")
              }
            />

            <Gallery />

            <Pricing
              onSelectPlan={(plan, price) => handleOpenJoin(plan, price)}
            />

            <Cta
              onJoinClick={() =>
                handleOpenJoin("Introductory 7-Day Pass", "Free Trial")
              }
              onTourClick={() => handleNavigate("contact")}
            />
          </>
        )}

        {currentPage === "about" && (
          <AboutPage
            onNavigateContact={() => handleNavigate("contact")}
            onExploreCoaches={() => handleNavigate("home", "coaches")}
            onJoinClick={() => handleOpenJoin("Pro Plan", "₹2000 / 3 month")}
          />
        )}

        {currentPage === "contact" && (
          <ContactPage
            onJoinClick={() => handleOpenJoin("Pro Plan", "₹2000 / 3 month")}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <JoinModal
        isOpen={joinModalState.isOpen}
        selectedPlan={joinModalState.plan}
        selectedPrice={joinModalState.price}
        onClose={handleCloseJoin}
      />

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      <TrainersModal
        isOpen={isTrainersOpen}
        onClose={() => setIsTrainersOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}
