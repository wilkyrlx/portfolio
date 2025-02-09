import { FC } from 'react';
import styles from '@/styles/layout.module.css';
import '@/styles/globals.css';
import Sidebar from '@/layouts/Sidebar';
import PortfolioContainer from '@/layouts/PortfolioContainer';
import MongoDBCard from '@/cards/MongoDBCard';
import DroneCard from '@/cards/DroneCard';
import LocalDexCard from '@/cards/LocalDexCard';
import PathAICard from '@/cards/PathAICard';
import PovGlobeCard from '@/cards/PovGlobeCard';
import WebDevCard from '@/cards/WebDevCard';
import TigroCard from '@/cards/TigroCard';
import Navbar from '@/layouts/Navbar';

const Home: FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* TODO: Projects and Experiences */}
        <Navbar />
        <PortfolioContainer>
          <MongoDBCard />
          <DroneCard />
          <TigroCard />
          <LocalDexCard />
          <PathAICard />
          <PovGlobeCard />
          <WebDevCard />
        </PortfolioContainer>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
