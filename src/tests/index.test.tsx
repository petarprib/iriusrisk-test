import { render, screen } from '@testing-library/react';

import { starshipDetails } from '../mocks/starships.mocks';
import StarshipCard from '../views/starships/components/starship-card.component';
import { parseCrewValue } from '../views/starships/utils/starships.utils';

describe('starship card', () => {
  it('renders the correct data', () => {
    render(<StarshipCard {...starshipDetails} />);
    const starshipName = screen.getByText('CR90 corvette');
    const starshipCrew = screen.getByText('Crew: 30-165');
    const starshipCargoCapacity = screen.getByText('Cargo capacity: 3000000');
    expect(starshipName).toBeInTheDocument();
    expect(starshipCrew).toBeInTheDocument();
    expect(starshipCargoCapacity).toBeInTheDocument();
  });
});

describe('parseCrewValue', () => {
  it('should return Infinity when the value is "unknown"', () => {
    const result = parseCrewValue('unknown');
    expect(result).toBe(Infinity);
  });

  it('receives two numbers separated by a dash (all as a single string), removes any dashes and returns the average of the two values as a numeric type', () => {
    const value = parseCrewValue('20-100');
    expect(value).toBe(60);
  });

  it('receives a number represented as a string, removes any commas and returns the number as a numeric type', () => {
    const value = parseCrewValue('123,456');
    expect(value).toBe(123456);
  });

  it('received a stringified number and returns that number as a numeric type', () => {
    const value = parseCrewValue('123');
    expect(value).toBe(123);
  });
});
