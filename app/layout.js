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
        {/* <ThemeScriptTag /> */}
        <body>
          <script src="./theme.js" strategy="beforeInteractive"></script>
          {children}
        </body>
      </TaskProvider>
      {/* </ThemeProvider> */}
    </html>
  )
}

