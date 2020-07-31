import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categorysRepository from '../../repositories/categorys';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosInciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categorysRepository.getAllWithVideos()
      .then((categorysWithVideos) => {
        setDadosIniciais(categorysWithVideos);
      }).catch((err) => {
        console.log(err.massage);
      });
  }, []);

  return (

    <PageDefault paddingAll={0}>

      {dadosInciais.length === 0 && (<div>Loading...</div>)}

      {dadosInciais.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={dadosInciais[0].videos[0].title}
                url={dadosInciais[0].videos[0].url}
                videoDescription="O que é Front-End? Trabalhando na área"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosInciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
