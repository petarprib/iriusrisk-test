import { useEffect, useState } from 'react';

import SortingSelect from './components/sorting-select.component';
import StarshipCard from './components/starship-card.component';
import type { Sorting, Starship, StarshipRes } from './types/starships.types';
import { sortStarships } from './utils/starships.utils';
import starshipsApi from '../../api/starships.api';
import CardGrid from '../../components/card-grid/card-grid.component';
import MainContent from '../../components/main-content/main-content.component';
import usePagination from '../../hooks/use-pagination.hook';
import MainContentLayout from '../../layouts/main-content/main-content.layout';

const Starships = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [starships, setStarships] = useState<Starship[]>([]);
  const [sorting, setSorting] = useState<Sorting>('');
  const view = 'Starships';
  const {
    page,
    setPage,
    limit,
    totalResults,
    setTotalResults,
    isPrevPageAvailable,
    setIsPrevPageAvailable,
    isNextPageAvailable,
    setIsNextPageAvailable,
  } = usePagination();

  const getPageResults = async ({ page }: { page: number }) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const starshipsRes = await starshipsApi.getStarships({
        params: {
          page,
          limit,
        },
      });
      const starshipsDetails = await starshipsApi.getStarshipsDetails({
        array: starshipsRes.results,
      });

      const starships = starshipsDetails.map((starship: StarshipRes) => {
        const {
          name,
          crew,
          cargo_capacity: cargoCapacity,
        } = starship.result.properties;

        return { name, crew, cargoCapacity };
      });

      setPage(page);
      setTotalResults(starshipsRes.total_records);
      setIsPrevPageAvailable(!!starshipsRes.previous);
      setIsNextPageAvailable(!!starshipsRes.next);

      setStarships(sorting ? sortStarships({ starships, sorting }) : starships);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getPageResults({ page: 1 });
  }, []);

  useEffect(() => {
    if (sorting) {
      setStarships(sortStarships({ starships: [...starships], sorting }));
    }
  }, [sorting]);

  return (
    <MainContentLayout view={view}>
      <MainContent
        isLoading={isLoading}
        isError={isError}
        paginationData={{
          page,
          limit,
          totalResults,
          isPrevPageAvailable,
          isNextPageAvailable,
        }}
        view={view}
        getPageResults={getPageResults}
      >
        <SortingSelect sorting={sorting} setSorting={setSorting} />
        <CardGrid>
          {starships.map((starship) => {
            return <StarshipCard key={starship.name} {...starship} />;
          })}
        </CardGrid>
      </MainContent>
    </MainContentLayout>
  );
};

export default Starships;
