import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "carrot",
  toggleTheme: (theme: string) => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | JSX.Element[];
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [theme, setTheme] = useState("carrot");
  // useEffect(() => initialThemeHandler());

  useEffect(() => {}, [theme]);

  // function isLocalStorageEmpty(): boolean {
  //   return !localStorage.getItem("isDarkTheme");
  // }

  // function initialThemeHandler(): void {
  //   if (isLocalStorageEmpty()) {
  //     localStorage.setItem("isDarkTheme", `true`);
  //     document!.querySelector("body")!.classList.add("dark");
  //     setIsDarkTheme(true);
  //   } else {
  //     const isDarkTheme: boolean = JSON.parse(
  //       localStorage.getItem("isDarkTheme")!
  //     );
  //     isDarkTheme && document!.querySelector("body")!.classList.add("dark");
  //     setIsDarkTheme(() => {
  //       return isDarkTheme;
  //     });
  //   }
  // }

  function toggleTheme(theme: string): void {
    // const isDarkTheme: boolean = JSON.parse(
    //   localStorage.getItem("isDarkTheme")!
    // );
    // setIsDarkTheme(!isDarkTheme);
    setTheme(theme);
    // setValueToLocalStorage();
  }

  // function setValueToLocalStorage(): void {
  //   localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  // }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
