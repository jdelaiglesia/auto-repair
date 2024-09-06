import { Homepage } from "@/components/homepage";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    //Parece que React-Router no es compatible con Next.js (porque tiene su propio sistema de enrutamiento)
    //Pido disculpas por eso, en su reemplazo usé el enrutamiento nativo de Next.js que funciona en base a directorios
    <>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Footer></Footer>
    </>
  );
}
