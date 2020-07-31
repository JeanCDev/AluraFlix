import config from '../config';

const url = `${config.url}/categorys`;

function getAll() {
  return fetch(`${url}`)
    .then(async (response) => {
      if (response.ok) {
        const resp = await response.json();

        return resp;
      }

      throw new Error('Não foi possivel pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${url}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resp = await response.json();

        return resp;
      }

      throw new Error('Não foi possivel pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
