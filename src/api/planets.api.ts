import type { BaseResult, QueryParams } from './types/api.types';
import { createBatchRequestUrls, formatUrl } from './utils/api.util';
import requestBuilder from './utils/request-builder.util';

const planetsApi = {
  getPlanets: async ({ params }: { params: QueryParams }) => {
    const { page, limit } = params;

    return await requestBuilder({
      url: formatUrl({
        path: ['planets'],
        params: { page, limit },
      }),
      method: 'get',
    });
  },

  getPlanetsDetails: async ({ array }: { array: BaseResult[] }) => {
    const urls = createBatchRequestUrls({
      basePath: 'planets',
      array,
    });

    const planetDetails = await requestBuilder({
      url: urls,
      method: 'get',
    });

    return planetDetails;
  },
};

export default planetsApi;
