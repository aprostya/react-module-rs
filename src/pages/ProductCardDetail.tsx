import { useParams } from 'react-router-dom';

export const ProductCardDetail: React.FC = () => {
  const { id } = useParams();
  return (
    <section className="cards-list">
      <h3>{id}</h3>
    </section>
  );
};
