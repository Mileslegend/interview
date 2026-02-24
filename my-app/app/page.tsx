'use client'

//import AboutUs2 from "@/components/mvpblocks/about-us-2";
import AppHero from "@/components/mvpblocks/app-hero";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import Header1 from "@/components/mvpblocks/header-1";
//import Image from "next/image";

export default function Home() {
  return (
    <main>
    <Header1 />
    <AppHero />
    {/* <AboutUs2 /> */}
    <ContactUs1 />
    <Footer4Col />
    </main>
  );
}
