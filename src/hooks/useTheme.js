import { useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(false);
    const handleClickTheme = () => {
        setTheme(!theme);
    };
    return [theme, handleClickTheme];
}

export default useTheme;