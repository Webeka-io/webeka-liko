import React from "react";
import { Metadata } from "next";
import PricingMain from "@/pages/pricing/pricing-main avocat";

export const metadata: Metadata = {
  title: "Webeka.fr - Offre",
};

const PricingPage = () => {
  return (
    <PricingMain/>
  );
};

export default PricingPage;
