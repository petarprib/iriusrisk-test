import type { ReactNode } from 'react';

import type { PaginationData } from '../../hooks/use-pagination.hook';
import Pagination from '../../layouts/main-content/components/pagination.component';
import type { GetPageResults } from '../../types/index.types';
import Error from '../error/error.components';
import Loader from '../loader/loader.component';

const MainContent = ({
  children,
  isLoading,
  isError,
  paginationData,
  view,
  getPageResults,
}: {
  children: ReactNode;
  isLoading: boolean;
  isError: boolean;
  paginationData: PaginationData;
  view: string;
  getPageResults: GetPageResults;
}) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <>
          {children}
          <Pagination
            paginationData={paginationData}
            view={view}
            getPageResults={getPageResults}
          />
        </>
      )}
    </>
  );
};

export default MainContent;
