import React from 'react';

import Menu from '../../components/menu';
import dadosInciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background:"#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosInciais.categorias[0].videos[0].titulo}
        url={dadosInciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
