import { ReactNode } from 'react';
import styles from './Tag.module.css'
import cn from 'classnames'

interface TagProps {
  size?: 'small' | 'big';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
  children: ReactNode;
}

export const Tag: React.FC<TagProps> = ({
  size ='small', 
  color = 'ghost', 
  children, 
  href
}) => {
  return (
    <div 
      className={cn(
        styles.tag,
        styles[size], 
        styles[color])}>
      {href
        ? <a href={href}>{children}</a> 
        : children}  
    </div>
  )
}