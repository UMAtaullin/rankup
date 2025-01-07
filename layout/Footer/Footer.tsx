import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Header.module.css';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer: React.FC<FooterProps> = ({ ...props }: FooterProps) => {
  return (
    <div {...props}>
      Footer
    </div>
  );
};