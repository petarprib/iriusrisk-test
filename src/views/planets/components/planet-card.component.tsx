import Card from '../../../components/card/card.component';
import type { Planet } from '../planets.view';
import '../styles/planets.scss';

type PlanetCardProps = Planet;

const PlanetCard = ({ name, terrain, population }: PlanetCardProps) => {
  return (
    <Card>
      <div className='planet'>
        <img
          src={`../../../public/planets/${name}.png`}
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.onerror = null;
            target.src = `../../../public/planets/football.png`;
          }}
          alt={name}
          className='planet__image'
        />
        <div className='planet__info'>
          <h4>{name}</h4>
          <p className='planet__info__terrain'>{terrain}</p>
          <p>
            {!isNaN(Number(population))
              ? `Population of ${population}`
              : 'Unknown population'}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PlanetCard;
