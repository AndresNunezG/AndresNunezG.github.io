import { useState } from "react";

const useTheme = () => {
    const date = new Date();
    const enableDarkMode = date.getHours() >= 18 ? false : true;
    const [theme, setTheme] = useState(enableDarkMode);
    const handleClickTheme = () => {
        setTheme(!theme);
    };
    return [theme, handleClickTheme];
}

export default useTheme;