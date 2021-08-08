import useLanguage from '../hooks/useLanguage';
import useTheme from '../hooks/useTheme';

import Navbar from '../components/Navbar'
import About from '../components/About';
import Projects from '../components/Projects';
import Techstack from '../components/Techstack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home () {
    const [language, handleClickLeng] = useLanguage();
    const [theme, handleClickTheme] = useTheme();
    return (
        <main className={theme ? "light" : "dark"}>
            <Navbar
            theme={theme}
             language={language}
             onClickLeng={handleClickLeng}
             onClickTheme={handleClickTheme}
            />
            <About
             language={language}
             theme={theme}
            />
            <Projects language={language} />
            <Techstack language={language} />
            <Contact language={language} />
            <Footer language={language} />
        </main>
    )
}