import cn from 'classnames';
import { type ReactNode } from 'react';
import styles from './style.module.css';

type ButtonTheme = 'primary' | 'secondary' | 'error';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: 'm' | 's';
  type?: 'submit';
  isLoading?: boolean;
  disabled?: boolean;
};

export function Button({
  onClick,
  children,
  size = 'm',
  theme = 'primary',
  disabled,
  type,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        styles.root,
        styles[`root-size-${size}`],
        styles[`root-theme-${theme}`],
        disabled && styles.root_disabled
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
