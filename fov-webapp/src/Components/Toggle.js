import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
import { Checkbox } from '@material-ui/core';
import Switch from "react-switch";


    const DARK_CLASS = "dark";

    export const DarkToggle = () => {
      const systemPrefersDark = useMediaQuery(
        {
          query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
          setIsDark(prefersDark);
        }
      );

      const [isDark, setIsDark] = useState(systemPrefersDark);

     useEffect(() => {
       if (isDark) {
         document.documentElement.classList.add(DARK_CLASS)
       } else {
         document.documentElement.classList.remove(DARK_CLASS)
       }
     }, [isDark]);

      return (
        <Checkbox
        color = 'secondary'
        checked={isDark}
        onChange={event => setIsDark(event.target.checked)}
        />
      );
    };