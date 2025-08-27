import React from "react";
import { Metadata } from "next";
import ContactMain from "@/pages/contact/contact";

export const metadata: Metadata = {
  title: "Webeka.fr - Contact",
};

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
