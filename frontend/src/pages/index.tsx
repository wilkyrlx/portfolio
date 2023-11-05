import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Projects from '@/components/ProjectCard'
import About from '@/components/About'
import { use, useEffect, useState } from 'react'
import ProjectOverlay from '@/components/ProjectOverlay'
import projects from '../data/projects.json' assert { type: 'json' };
import IProject from '@/types/IProject'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    // TODO: use project objects instead of ID
    const [currentOverlay, setCurrentOverlay] = useState<number>(-1)

    useEffect(() => {
        if (currentOverlay != -1) {
            console.log(currentOverlay);
            const mainContent: HTMLElement = document.querySelector('#main-content') as HTMLElement;
            mainContent.classList.add('blur-sm');
        } else {
            const mainContent: HTMLElement = document.querySelector('#main-content') as HTMLElement;
            mainContent.classList.remove('blur-sm');
        }
    }, [currentOverlay])

    function lookupProject(id: number): IProject {
        const projectArray: IProject[] = projects.projects;
        for (let i = 0; i < projectArray.length; i++) {
            if (projectArray[i].id == id) {
                return projectArray[i];
            }
        }
        return {} as IProject;
    }

    return (
        <>
            <Head>
                <title>John Wilkinson</title>
                <meta name="description" content="Portfolio by John Wilkinson" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div id="main-content">
                    <Header />
                    <div className='pl-8 pr-8 md:pl-48 md:pr-48'>
                        <About />
                        <Projects setCurrentOverlay={setCurrentOverlay} />
                    </div>
                </div>
                { currentOverlay != -1 && <ProjectOverlay project={lookupProject(currentOverlay)} setCurrentOverlay={setCurrentOverlay} /> }
            </main>
        </>
    )
}
