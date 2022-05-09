import React from 'react';
import PageTitles from '../../../Shared/PageTitles/PageTitles';
import Banner from '../Banner/Banner';
import Bicycles from '../Bicycles/Bicycles';
import Freedom from '../Freedom/Freedom';
import Owner from '../Owner/Owner';

const Home = () => {
    return (
        <>
        <PageTitles title="Home"></PageTitles>
          <Banner></Banner>
          <Bicycles></Bicycles>
          <Freedom></Freedom>
          <Owner></Owner>
        </>
    );
};

export default Home;