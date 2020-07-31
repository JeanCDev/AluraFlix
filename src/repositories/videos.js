import config from '../config';

const urlVideos = `${config.url}/videos`;

function create(videoObjc) {
  return fetch(`${urlVideos}?_embed=videos`,{
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify(videoObjc),
  })
    .then(async (response) => {
      if (response.ok) {
        const resp = await response.json();

        return resp;
      }

      throw new Error('Não foi possivel pegar os dados');
    });
}

export default {
  create,
};
