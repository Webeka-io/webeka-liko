import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-dentiste";

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
