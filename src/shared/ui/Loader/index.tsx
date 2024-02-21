import ClipLoader from 'react-spinners/ClipLoader';

type IProps = {
  color?: string;
  loading?: boolean;
  override?: React.CSSProperties;
  size?: number | string;
};

const Spinner = ({ loading, override, size }: IProps) => {
  return (
    <ClipLoader
      color={`var(--color-dark)`}
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
