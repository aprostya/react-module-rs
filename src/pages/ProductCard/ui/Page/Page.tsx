import { useParams } from 'react-router-dom';

export const ProductCardPage: React.FC = () => {
  const { id } = useParams();
  return <h3>{id}</h3>;
};
