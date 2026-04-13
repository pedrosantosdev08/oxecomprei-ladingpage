import { About } from "../../components/sections/about/About";
import { CallToAction } from "../../components/sections/cta/CallToAction";
import { Footer } from "../../components/sections/footer/Footer";
import { ForRetailers } from "../../components/sections/forRetailers/ForRetailers";
import { Header } from "../../components/sections/header/Header";
import { Hero } from "../../components/sections/hero/Hero";

export function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <About/>
            <ForRetailers/>
            <CallToAction/>
            <Footer/>
        </>
    )
}