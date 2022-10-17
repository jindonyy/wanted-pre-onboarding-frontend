type Payload<P> = { [key in P as string]: string };

type FetchOption = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Headers;
  body?: string;
};

const headers = new Headers({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': 'https://pre-onboarding-selection-task.shop',
  'Access-Control-Allow-Headers': 'Content-Type, Accept'
});

const FETCH_OPTION = {
  GET() {
    const fetchOption: FetchOption = {
      method: 'GET',
      headers
    };

    return fetchOption;
  },

  POST<P>(payload: Payload<P>) {
    const fetchOption: FetchOption = {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    };

    return fetchOption;
  },

  PUT<P>(payload: Payload<P>) {
    const fetchOption: FetchOption = {
      method: 'PUT',
      headers,
      body: JSON.stringify(payload)
    };

    return fetchOption;
  },

  DELETE() {
    const fetchOption: FetchOption = {
      method: 'DELETE'
    };

    return fetchOption;
  }
};

const requestAPI = async (url: string, option: FetchOption) => {
  const response = await fetch(process.env.REACT_APP_BASE_URL + url, option);
  return response.json();
};

export { FETCH_OPTION, requestAPI };
