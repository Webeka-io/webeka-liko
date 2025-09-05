import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "Webeka.fr - Création de site simple",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>  
  );
}
