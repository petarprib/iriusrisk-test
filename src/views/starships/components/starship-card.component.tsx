import Card from '../../../components/card/card.component';
import type { Starship } from '../types/starships.types';
import '../styles/starships.scss';

type StarshipCardProps = Starship;

const StarshipCard = ({ name, crew, cargoCapacity }: StarshipCardProps) => {
  return (
    <Card>
      <div className='starship-card'>
        <img
          src={`../../../public/starships/${name}.png`}
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.onerror = null;
            target.src = `../../../public/starships/cessna.png`;
          }}
          alt={name}
          className='starship-card__image'
        />
        <div className='starship-card__info'>
          <h4>{name}</h4>
          <p>Crew: {crew}</p>
          <p>Cargo capacity: {cargoCapacity}</p>
        </div>
      </div>
    </Card>
  );
};

export default StarshipCard;
