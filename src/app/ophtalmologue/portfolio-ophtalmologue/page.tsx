import React from 'react';
import { Metadata } from 'next';
import HomeEightMain from '@/pages/homes/home-dentiste';

export const metadata: Metadata = {
  title: "Webeka.fr - Création de site simple",
};

const HomePageFour = () => {
  return (
    <HomeEightMain/>
  );
};

export default HomePageFour;