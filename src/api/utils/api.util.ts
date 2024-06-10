import type { BaseResult, QueryParams } from '../types/api.types';

export const formatUrl = ({
  path,
  params,
}: {
  path: string[];
  params?: QueryParams;
}): string => {
  let baseUrl = path.join('/');

  if (params) {
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    baseUrl += `?${queryString}`;
  }

  return baseUrl;
};

export const createBatchRequestUrls = ({
  basePath,
  array,
}: {
  basePath: string;
  array: BaseResult[];
}) => array.map((item) => formatUrl({ path: [basePath, item.uid] }));
