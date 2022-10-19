type FetchOption = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Headers;
  body?: string;
};

type RequiredHeaders = { [key in string]: string };

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': 'https://pre-onboarding-selection-task.shop',
  'Access-Control-Allow-Headers': 'Content-Type, Accept'
};

export const FETCH_OPTION = {
  GET(requiredHeaders?: RequiredHeaders) {
    const fetchOption: FetchOption = {
      method: 'GET',
      headers: new Headers({
        ...requiredHeaders
      })
    };

    return fetchOption;
  },

  POST<P>(payload: P, requiredHeaders?: RequiredHeaders) {
    const fetchOption: FetchOption = {
      method: 'POST',
      headers: new Headers({
        ...defaultHeaders,
        ...requiredHeaders
      }),
      body: JSON.stringify(payload)
    };

    return fetchOption;
  },

  PUT<P>(payload: P, requiredHeaders?: RequiredHeaders) {
    const fetchOption: FetchOption = {
      method: 'PUT',
      headers: new Headers({
        ...defaultHeaders,
        ...requiredHeaders
      }),
      body: JSON.stringify(payload)
    };

    return fetchOption;
  },

  DELETE(requiredHeaders?: RequiredHeaders) {
    const fetchOption: FetchOption = {
      method: 'DELETE',
      headers: new Headers({
        ...requiredHeaders
      })
    };

    return fetchOption;
  }
};

export const requestAPI = async (url: string, option: FetchOption) => {
  const response = await fetch(process.env.REACT_APP_BASE_URL + url, option);
  const result = option.method === 'DELETE' ? response : response.json();

  return result;
};
