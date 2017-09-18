import querystring from 'query-string';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

function buildHeaders(headers){
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
}

function request(props){
  const {
    url,
    init, 
    query,
    option,
  } = props;

  let strQuery = query ? `?${querystring.stringify(query)}` : '',
      fetchUrl = `${API_ENDPOINT}/${url}${strQuery}`;
  
  return fetch(fetchUrl, {
      method: init.method,
      headers: buildHeaders(init.headers),
    })
    .then(handleErrorResponse)
}

function handleErrorResponse(response) {
  return response.json()
    .then(result => {
      if (result.error) return Promise.reject(result.error)
      return result;
    })
}

const Api = {
	get: (url, option) => {
		return request({
      url,
			init: {
        method: 'GET',
      },
      option,
    })
  },

  post: (url, option) => {
		return request({
      url,
			init: {
        method: 'POST',
      },
      option,
    })
	}
}

export default Api;
