import { useEffect, useState } from 'react';

import PlanetCard from './components/planet-card.component';
import planetsApi from '../../api/planets.api';
import CardGrid from '../../components/card-grid/card-grid.component';
import MainContent from '../../components/main-content/main-content.component';
import usePagination from '../../hooks/use-pagination.hook';
import MainContentLayout from '../../layouts/main-content/main-content.layout';

export type Planet = {
  name: string;
  terrain: string;
  population: string;
};

type PlanetsRes = {
  result: {
    properties: Planet;
  };
};

const Planets = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [planets, setPlanets] = useState<PlanetsRes[]>([]);
  const view = 'Planets';
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
      const planetsRes = await planetsApi.getPlanets({
        params: {
          page,
          limit,
        },
      });
      const planetsDetails = await planetsApi.getPlanetsDetails({
        array: planetsRes.results,
      });

      setPage(page);
      setTotalResults(planetsRes.total_records);
      setIsPrevPageAvailable(!!planetsRes.previous);
      setIsNextPageAvailable(!!planetsRes.next);

      setPlanets(planetsDetails);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getPageResults({ page: 1 });
  }, []);

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
        <CardGrid>
          {planets.map((planet) => {
            return (
              <PlanetCard
                key={planet.result.properties.name}
                {...planet.result.properties}
              />
            );
          })}
        </CardGrid>
      </MainContent>
    </MainContentLayout>
  );
};

export default Planets;
