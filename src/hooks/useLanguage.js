import { useState } from 'react';

const useLanguage = () => {
    let [language, setLanguage] = useState(false);
    const handleClickLeng = () => {
        setLanguage(!language);
    };
    if (language) {language = 1}
    else {language = 0}
    return [language, handleClickLeng]
}

export default useLanguage;