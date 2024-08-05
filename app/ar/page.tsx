import Competition from "@/components/Competition";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import HowToEnter from "@/components/HowToEnter";
import Winlist from "@/components/Winlist";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Competition />
      <Winlist />
      <HowToEnter />
    </Container>
  );
}