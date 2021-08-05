import useLanguage from '../hooks/useLanguage';
import useTheme from '../hooks/useTheme';

import Navbar from '../components/Navbar'
import About from '../components/About';

export default function Home () {
    const [language, handleClickLeng] = useLanguage();
    const [theme, handleClickTheme] = useTheme();
    return (
        <main className={theme ? "light" : "dark"}>
            <Navbar
             language={language}
             onClickLeng={handleClickLeng}
             onClickTheme={handleClickTheme}
            />
            <About
             language={language}
            />
        </main>
    )
}