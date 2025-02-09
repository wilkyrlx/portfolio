

import { FC } from 'react';
import styles from '@/styles/Tag.module.css';

interface TagProps {
  label: string;
  color?: string;
}

const Tag: FC<TagProps> = ({ label, color = '#6b7280' }) => {
  return (
    <div className={styles.tag}>
      <span 
        className={styles.circle}
        style={{ backgroundColor: color }}
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Tag;
