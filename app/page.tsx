import Competition from "@/components/Competition";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Winlist from "@/components/Winlist";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Competition />
      <Winlist />
    </Container>
  );
}
