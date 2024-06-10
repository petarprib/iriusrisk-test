export type StarshipName = string;
export type StarshipCrew = string;
export type StarshipCargoCapacity = number;

export type StarshipRes = {
  uid: string;
  result: {
    properties: {
      name: StarshipName;
      crew: StarshipCrew;
      cargo_capacity: StarshipCargoCapacity;
    };
  };
};

export type Starship = {
  name: StarshipName;
  crew: StarshipCrew;
  cargoCapacity: StarshipCargoCapacity;
};

export type Sorting = 'crew' | 'cargoCapacity' | '';
