import { About } from "../../components/sections/about/About";
import { Header } from "../../components/sections/header/Header";
import { Hero } from "../../components/sections/hero/Hero";

export function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <About/>
        </>
    )
}