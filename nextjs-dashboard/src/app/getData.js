import { stringify } from "querystring";


var dataQuery = `
query($id: Int) {
  media(id: $id) {
    bannerImage
    title {
      english
      romaji
    }
    endDate {
      year
      month
      day
    }
    nextAiringEpisode {
      episode
      airingAt
      timeUntilAiring
    }
  }
}
`;

var searchQuery = `
query ($search: String) {
  Page {
    media(search: $search, type: ANIME) {
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
    }
  }
}
`;

var searchPageQuery = `
query($id: Int) {
  media(id: $id) {
    title {
      english
      romaji
    }
    coverImage {
      extraLarge
    }
  }
}
`;

var url = 'https://graphql.anilist.co'
//export class Searching {

  async function getRequiredData(id){
      
    var variables = {
      'id': id,
      'episode': 4
    };

    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: dataQuery,
        variables: variables
      })
    }

    await fetch(url, options)
    .then(handleResponse)
    .then((responseData) =>{
      console.log(stringify(responseData, null, 2))
      return responseData;
    })
    .catch(handleError);
  }

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

  async function getSearchPageData(id){
      variables = {
          'id': id
      }

      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: dataQuery,
          variables: variables,
          "grant_type": "authorization_code",
          "client_id": "24651",
          "client_secret": "68R9s72GDKwOqdLKVj0lQpMuxRocB3tb893ixKyE",
          "redirect_uri": "WhenIsItAiring.com", 
          "code": "WhenIsItAiring.com",
        })
      }

      await fetch(url, options)
      .then(handleResponse)
      .then((responseData) =>{
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

  function handleSearchResponse(data) {
    console.log(JSON.stringify(data, null, 2))
    fs.writeFile('SearchResult.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
    })
  }
//}