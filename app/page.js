import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import BeforeAfter from "@/components/home/BeforeAfter";
import Stats from "@/components/home/Stats";
import Foundation from "@/components/home/Foundation";
import AIShowcase from "@/components/home/AIShowcase";
import Process from "@/components/home/Process";
import HiringCost from "@/components/home/HiringCost";
import OneRoof from "@/components/home/OneRoof";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";


export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <About />
      <Services />
      <BeforeAfter />
      <Stats />
      <Foundation />
      <AIShowcase />
      <Process />
      <HiringCost />
      <OneRoof />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}