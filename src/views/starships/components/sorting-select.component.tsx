import type { Dispatch, SetStateAction } from 'react';

import type { Sorting } from '../types/starships.types';

const SortingSelect = ({
  sorting,
  setSorting,
}: {
  sorting: Sorting;
  setSorting: Dispatch<SetStateAction<Sorting>>;
}) => {
  return (
    <select
      id='sorting'
      className='sorting'
      data-testid='sorting'
      value={sorting}
      onChange={(event) => setSorting(event.target.value as Sorting)}
    >
      <option disabled value=''>
        Choose an option
      </option>
      <option value='crew' data-testid='crew-option'>
        Crew
      </option>
      <option value='cargoCapacity' data-testid='cargo-capacity-option'>
        Cargo capacity
      </option>
    </select>
  );
};

export default SortingSelect;
