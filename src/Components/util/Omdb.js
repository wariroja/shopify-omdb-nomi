/** @format */

const Omdb = {
  async search(term) {
    const response = await fetch(
      `http://omdbapi.com/?s=${term}&apikey=5f9e3ef`
    );
    const jsonResponse = await response.json();
    if (!jsonResponse.Search) {
      return [];
    }
    let result = jsonResponse.Search.map((item) => ({
      title: item.Title,
      year: item.Year,
      id: item.imdbID,
    }));
    return result;
  },
};
export default Omdb;
