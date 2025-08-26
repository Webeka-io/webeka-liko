import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "Webeka.io - Créer son site simplement",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>
  );
}
