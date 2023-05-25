import Banner from "../components/Banner/Banner";
import { Container } from "../components/Containers/Containers";
import Footer from "../components/Footer/Footer";
import Accreditation from "../components/sections/Accreditation/Accreditation";
import Advantages from "../components/sections/Advantages/Advantages";

import Calculator from "../components/sections/Calculator/Calculator";
import Demo from "../components/sections/Demo/Demo";
import Header from "../components/sections/Header/Header";
import Hero from "../components/sections/Hero/Hero";
import Stats from "../components/sections/Stats/Stats";
import Train from "../components/sections/Train/Train";

export default function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Hero />
      <Container>
        <Stats />
        <Calculator />
        <Advantages />
      </Container>
      <Demo />
      <Train />
      <Banner />
      <Container>
        <Accreditation />
        <Footer />
      </Container>
    </>
  );
}
