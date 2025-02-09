import { FC, ReactNode, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/PortfolioCard.module.css';
import Tag from './Tag';
import { PortfolioType } from '@/types/portfolioType';

interface PortfolioCardProps {
  title: string;
  imageSrc: string;
  portfolioType: PortfolioType;
  tags: any[];
  children: ReactNode;
}

const portfolioColors: Record<string, string> = {
  "research": "#007bff",
  "internship": "#28a745",
  "project": "#dc3545",
}

const PortfolioCard: FC<PortfolioCardProps> = ({ title, imageSrc, portfolioType, tags, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    // FIXME: implement modal
    // setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div 
        className={styles.card}
        onClick={handleClick}
      >
        
        <div className={styles.ribbon}>
          <span style={{ backgroundColor: portfolioColors[portfolioType] }}>{portfolioType}</span>
        </div>
        
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.titleBar}>
          <h3>{title}</h3>
          <div className={styles.tagsContainer}>
            {tags.map((tag) => (
              <Tag label={tag.name} color={tag.color} />
            ))}
          </div>
        </div>
      </div>
      {isExpanded && (
        <>
          <div className={styles.overlay} onClick={handleClick} />
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>{title}</h2>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioCard;
