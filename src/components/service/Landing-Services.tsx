import NavigationBar from '../shared/NavigationBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
import { useEffect, useState } from 'react';
import CarouselServices from './Carousel-Services';
import ServiceFeatures from './box/ServiceFeatures';

function Services() {
  useEffect(() => {
    document.title = "IT Services & Software Development - V11TECH";
  }, []);

  const [, setIsVisible] = useState(false);
  const [, setScrollY] = useState(0);
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = () => {
      // Placeholder for dropdown close logic
      console.warn('Click outside detected - dropdown should close');
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Add border when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>

      <CarouselServices></CarouselServices>

      <ServiceFeatures></ServiceFeatures>

      <ClientLogosSection />

      <CTASection product="V11TECH" siteIndex="/services" isConsulting={true} />

      <Footer></Footer>
    </>
  );
};

export default Services;