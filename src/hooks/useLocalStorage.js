import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setNewValue = newValue => {
        setStoredValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }


    return [storedValue, setNewValue];
};



