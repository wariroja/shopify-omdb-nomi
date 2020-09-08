/** @format */

const Omdb = {
  search(term) {
    return fetch(`http://omdbapi.com/?s=${term}&apikey=5f9e3ef`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.Search) {
          return [];
        }
        let result = jsonResponse.Search.map((item) => ({
          title: item.Title,
          year: item.Year,
          id: item.imdbID,
        }));
        console.log(result);
      });
  },
};
export default Omdb;
