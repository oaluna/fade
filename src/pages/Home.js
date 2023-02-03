import React from "react";

import CardSection from "../Sections/CardSection";
import ChartSection from "../Sections/ChartSection";
import Footer from "../components/Footer";
import Header from "../Sections/Header";
import MessagingSection from "../Sections/MessagingSection";
import PaymentSection from "../Sections/PricingSection";
import { OuterLayout } from "../styles/Layout";

import ScrolledButton from "../components/ScrolledButton";

function Home() {


  return (
   <>
      <Header />
      <OuterLayout>
        <main>
          <CardSection />
          <ChartSection />
          <MessagingSection />
        
          <PaymentSection />
        </main>
      </OuterLayout>
      <Footer />
      <ScrolledButton />
    </>
  );
}

export default Home;
