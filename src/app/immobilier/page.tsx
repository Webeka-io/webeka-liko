import React from "react";
import { Metadata } from "next";
import CGUPage from "@/pages/cgu/cgu";

export const metadata: Metadata = {
  title: "Weebeka - Conditions Générales d'Utilisation",
};

const CartPage = () => {
  return (
    <CGUPage/>
  );
};

export default CartPage;
