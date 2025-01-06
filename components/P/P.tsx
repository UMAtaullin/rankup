import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './P.module.css'

interface PProps {
  size?: 'p14' | 'p16' | 'p18'
  children: ReactNode
}

export const P: React.FC<PProps> = ({
  size='p-14', 
  children
}) => {
    switch(size) {
      case 'p14':
        return <p className={styles.p14}>{children}</p>
      case 'p16':
        return <p className={styles.p16}>{children}</p>
      case 'p18':
        return <p className={styles.p18}>{children}</p>
      default:
        return <p>{children}</p>
    }
}