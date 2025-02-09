
import { FC } from 'react';
import styles from '@/styles/layout.module.css';

const Navbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarElt}>Projects and Experiences</div>
        </nav>
    );
};

export default Navbar;
