import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type {
  Limit,
  Page,
  PaginationData,
  TotalResults,
} from '../../../hooks/use-pagination.hook';
import type { GetPageResults } from '../../../types/index.types';

type PaginationProps = {
  view: string;
  paginationData: PaginationData;
  getPageResults: GetPageResults;
};

const Pagination = ({
  view,
  paginationData,
  getPageResults,
}: PaginationProps) => {
  const {
    page,
    limit,
    totalResults,
    isPrevPageAvailable,
    isNextPageAvailable,
  } = paginationData;

  const getStartIndex = ({ page, limit }: { page: Page; limit: Limit }) =>
    (page - 1) * limit + 1;

  const getEndIndex = ({
    page,
    limit,
    totalResults,
  }: {
    page: Page;
    limit: Limit;
    totalResults: TotalResults;
  }) => Math.min(page * limit, totalResults);

  const goToPrevPage = () => {
    if (isPrevPageAvailable) {
      getPageResults({ page: page - 1 });
    }
  };

  const goToNextPage = () => {
    if (isNextPageAvailable) {
      getPageResults({ page: page + 1 });
    }
  };

  return (
    <div className='main-content__pagination'>
      <FontAwesomeIcon
        icon={faCaretLeft}
        className='main-content__pagination__icons'
        onClick={goToPrevPage}
        onKeyDown={(event) => event.key === 'Enter' && goToPrevPage()}
        tabIndex={0}
        role='button'
      />
      <p className='main-content__pagination__info'>
        {getStartIndex({ page, limit })} to{' '}
        {getEndIndex({ page, limit, totalResults })} of {totalResults}{' '}
        {view.toLowerCase()}
      </p>
      <FontAwesomeIcon
        icon={faCaretRight}
        className='main-content__pagination__icons'
        onClick={goToNextPage}
        onKeyDown={(event) => event.key === 'Enter' && goToNextPage()}
        tabIndex={0}
        role='button'
      />
    </div>
  );
};

export default Pagination;
