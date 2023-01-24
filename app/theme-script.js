
import React from "react";

// function setColorsByTheme(defaultLightTheme, defaultDarkTheme, themeStorageKey) {
//     //var mql = window.matchMedia("(prefers-color-scheme: dark)");
//     //  var prefersDarkFromMQ = mql.matches;
//     var persistedPreference = localStorage.getItem(themeStorageKey);
//     var root = document.body;
//     var colorMode = "";

//     var hasUsedToggle = typeof persistedPreference === "string";

//     if (hasUsedToggle) {
//         colorMode = JSON.parse(persistedPreference);
//     } else {
//         colorMode = localStorage.getItem('theme') === 'true' ? defaultDarkTheme : defaultLightTheme;
//         // localStorage.setItem(themeStorageKey, JSON.stringify(colorMode));
//     }

//     root.classList.add(colorMode);
// }
const ThemeScriptTag = () => {
    // const themeScript = `(${setColorsByTheme})(
    //     'dark',
    //     '',
    //     'theme',
    //   )`;
    // // eslint-disable-next-line react/no-danger
    // return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
    if (typeof window !== "undefined") {
        // Perform localStorage action
        //localStorage.setItem("dbTasks", JSON.stringify(dbTasks))
        // localComments = JSON.parse(localStorage.getItem('dbTasks'))
        if (localStorage.getItem("theme") === true) {
            document.body.classList.add('dark')
        } else
            document.body.remove('dark')
    }

};

export default ThemeScriptTag;