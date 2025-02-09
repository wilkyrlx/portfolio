import { FC } from 'react';
import styles from '@/styles/layout.module.css';
import sidebarStyles from '@/styles/Sidebar.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { skills } from '@/data/skills';
import Tag from '@/components/Tag';

const Sidebar: FC = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={sidebarStyles.sidebarContent}>
                <div className={sidebarStyles.profileSection}>
                    <div className={sidebarStyles.profileContainer}>
                        <img
                            src="/site/jwilkinson.jpg"
                            alt="Profile Picture"
                            className={sidebarStyles.profileImage}
                        />

                        <div className={sidebarStyles.socialIcons}>
                            <a href="https://github.com/wilkyrlx" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/john-wilkinson2025/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={32} />
                            </a>
                            <a href="mailto:wilkjohn1@gmail.com">
                                <FaEnvelope size={32} />
                            </a>
                        </div>
                    </div>

                    <div className={sidebarStyles.bioTextContainer}>
                        <p className={sidebarStyles.bioName}>John Wilkinson</p>
                        <p className={sidebarStyles.bioText}>
                            Hello! I am currently a senior at Brown University. My technical interests include robotics, cryptography, and database management.
                            Ask me about <a 
                                href="https://pokeripa.com/brown-ipa-champions-2021-2022/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                competitive poker
                            </a>, <a 
                                href="https://www.community-boating.org/junior/welcome/#&gid=1&pid=18"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                windsurfing
                            </a>, or <a 
                                href="https://www.bibracte.fr/en"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                archaeology
                            </a>!
                        </p>
                        <p className={sidebarStyles.bioText}>
                            I like building efficient implementations of academic research. I like hard work. I'm a software guy, but I love working with hardware too. As a Head TA in Brown's CS department, I've led teams of 5 people, and teams of 50.
                        </p>
                        <a
                            href="/site/john_wilkinson_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={sidebarStyles.resumeButton}
                        >
                            View Resume <FaArrowRight />
                        </a>
                    </div>
                    {/* TODO: add a button to download my resume */}

                    <div className={sidebarStyles.skills}>
                        {skills.map((skill) => (
                            <Tag label={skill.name} color={skill.color} />
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;