'use client'

import AboutUs1 from "@/components/mvpblocks/about-us-1";
import AppHero from "@/components/mvpblocks/app-hero";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import Header1 from "@/components/mvpblocks/header-1";


export default function Home() {
  return (
    <main >
    <Header1 />
    <AppHero />
    <AboutUs1 />
    
    <ContactUs1 />
    
    <Footer4Col />
    </main>
  );
}
