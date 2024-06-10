import { useState } from 'react';

import { apiResultLimit } from '../constants';

export type Page = number;
export type Limit = number;
export type TotalResults = number;

export type PaginationData = {
  page: Page;
  limit: Limit;
  totalResults: TotalResults;
  isPrevPageAvailable: boolean;
  isNextPageAvailable: boolean;
};

const usePagination = () => {
  const [limit, setLimit] = useState<Limit>(apiResultLimit);
  const [page, setPage] = useState<Page>(1);
  const [totalResults, setTotalResults] = useState<TotalResults>(0);
  const [isPrevPageAvailable, setIsPrevPageAvailable] =
    useState<boolean>(false);
  const [isNextPageAvailable, setIsNextPageAvailable] =
    useState<boolean>(false);

  return {
    limit,
    setLimit,
    page,
    setPage,
    totalResults,
    setTotalResults,
    isPrevPageAvailable,
    setIsPrevPageAvailable,
    isNextPageAvailable,
    setIsNextPageAvailable,
  };
};

export default usePagination;
