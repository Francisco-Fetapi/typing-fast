import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppContainer } from "../styles/General";

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <Footer />
    </AppContainer>
  );
}
