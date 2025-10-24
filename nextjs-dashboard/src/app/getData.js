import { stringify } from "querystring";

var searchQuery = `
query ($search: String) {
  Page {
    media(search: $search, type: ANIME, isAdult: false, sort: POPULARITY_DESC) {
      endDate {
        year
        month
      }
      id
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      title {
        romaji
        english
      }
      coverImage {
        extraLarge
      }
      isAdult
    }
  }
}
`;



var url = 'https://graphql.anilist.co'
//export class Searching {

  export async function searchAnime(title){
      var variables = {
        'search': title
      }
      var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: searchQuery,
            variables: variables
        })
    };

      return await fetch(url, options)
      .then((response) => response.json())
      .then((responseData) =>{
        console.log(stringify(responseData, null, 2))
        return responseData;
      })
      .catch(handleError);

  }

  function handleResponse(response){
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json)
    })
  }

  function handleError(error){
    console.error(error);
  }
//}