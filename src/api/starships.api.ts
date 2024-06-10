import type { BaseResult, QueryParams } from './types/api.types';
import { createBatchRequestUrls, formatUrl } from './utils/api.util';
import requestBuilder from './utils/request-builder.util';

const starshipsApi = {
  getStarships: async ({ params }: { params: QueryParams }) => {
    const { page, limit } = params;

    return await requestBuilder({
      url: formatUrl({
        path: ['starships'],
        params: { page, limit },
      }),
      method: 'get',
    });
  },

  getStarshipsDetails: async ({ array }: { array: BaseResult[] }) => {
    const urls = createBatchRequestUrls({
      basePath: 'starships',
      array,
    });

    const starshipDetails = await requestBuilder({
      url: urls,
      method: 'get',
    });

    return starshipDetails;
  },
};

export default starshipsApi;
