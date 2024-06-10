import axios from 'axios';

type RequestBuilderProps = {
  url: string | string[];
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
};

const axiosFetch = async ({ url, method }: RequestBuilderProps) => {
  const res = await axios({
    url: `${import.meta.env.VITE_API_URL}${url}`,
    method,
  });

  const newRes = await res.data;

  return newRes;
};

const requestBuilder = async ({ url, method }: RequestBuilderProps) => {
  let data;

  if (Array.isArray(url)) {
    const requests = url.map((url) => axiosFetch({ url, method }));

    data = await axios.all(requests);
  } else {
    data = axiosFetch({ url, method });
  }

  return data;
};

export default requestBuilder;
