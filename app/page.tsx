import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Diagnostic from "./components/Diagonestic";
import ReportPage from "./components/Report";
import Report from "./components/Report";
import Triangle from "./components/Triangle";
import Gap from "./components/Gap";

export default function Home() {
  return (
    
      <main >

        <Navbar />
        <Hero/>
        <Partner/>
        <Diagnostic/>
        <Report/>
        <Triangle/>
        <Gap/>


        
      </main>
    
  );
}
