import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Overlays from '@/components/ProjectOverlay'
import Projects from '@/components/ProjectCard'
import About from '@/components/About'
import { use, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [currentOverlay, setCurrentOverlay] = useState<number>(-1)

    useEffect(() => {
        if (currentOverlay != -1) {
            console.log(currentOverlay);
            const mainContent: HTMLElement = document.querySelector('#main-content') as HTMLElement;
            const overlay: HTMLElement | null = document.querySelector('#project-overlay-' + currentOverlay.toString());
            if (!overlay) {
                console.error("Overlay not found on open");
                return;
            }
            mainContent.classList.add('blur-sm');
            overlay.classList.remove('collapse');
        }
    }, [currentOverlay])

    return (
        <>
            <Head>
                <title>Create Next App</title>
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
                <Overlays />
            </main>
        </>
    )
}
