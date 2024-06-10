import type { Sorting, Starship } from '../types/starships.types';

export const formatValue = (value: string) => {
  if (value === 'unknown') {
    return Infinity;
  } else if (value.includes('-')) {
    const [min, max] = value.split('-').map(Number);
    return (min + max) / 2;
  } else if (value.includes(',')) {
    return Number(value.split(',').join(''));
  } else {
    return Number(value);
  }
};

export const sortStarships = ({
  starships,
  sorting,
}: {
  starships: Starship[];
  sorting: Sorting;
}) => {
  const sortedStarships = starships.sort((a: any, b: any) => {
    const valueA = formatValue(a[sorting]);
    const valueB = formatValue(b[sorting]);
    return valueA - valueB;
  });

  return sortedStarships;
};
