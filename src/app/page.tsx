import { Metadata } from "next";
import HomeFourMain from "@/app/(homes)/home-4/page";

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
