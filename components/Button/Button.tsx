import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames'

export const Button: React.FC<ButtonProps> = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`
        ${appearance === 'primary'
          ? styles.primary
          : styles.ghost}`}
      {...props}
    >
      {children}
    </button>
  );
};