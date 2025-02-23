import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames'

export const Button: React.FC<ButtonProps> = ({ 
  appearance, 
  arrow = 'none', 
  children, 
  className, 
  ...props }) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && <span 
        className={cn(styles.arrow, {
          [styles.down]: arrow == 'down'
        })}>
          <img src='/arrow.svg' alt=''/>
          </span>}
    </button>
  );
};