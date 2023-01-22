import { useContext } from "react";
import { TaskProvider } from "./context/taskContext";
import { ThemeProvider } from "./context/themeConttext";
import ThemeScriptTag from "./theme-script";


export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <head />
      {/* <ThemeProvider> */}
      <TaskProvider>
        {/* <body className="h-full"> */}
        <body>
          <ThemeScriptTag />

          {children}
        </body>
      </TaskProvider>
      {/* </ThemeProvider> */}
    </html>
  )
}

