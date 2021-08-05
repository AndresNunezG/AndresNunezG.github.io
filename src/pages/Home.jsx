import useLanguage from '../hooks/useLanguage';
import useTheme from '../hooks/useTheme';

import Navbar from '../components/Navbar'
import About from '../components/About';

export default function Home () {
    const [language, handleClickLeng] = useLanguage();
    const [theme, handleClickTheme] = useTheme();
    return (
        <main>
            <Navbar
             language={language}
             theme={theme}
             onClickLeng={handleClickLeng}
             onClickTheme={handleClickTheme}
            />
            <About
             language={language}
             theme={theme}
            />
        </main>
    )
}