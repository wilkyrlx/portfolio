import { FC, ReactNode } from 'react';
import styles from '@/styles/layout.module.css';

interface PortfolioContainerProps {
  children: ReactNode;
}

const PortfolioContainer: FC<PortfolioContainerProps> = ({ children }) => {
  return (
    <div className={styles.portfolioGrid}>
      {children}
    </div>
  );
};

export default PortfolioContainer;
