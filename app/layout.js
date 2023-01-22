import { useContext } from "react";
import { TaskProvider } from "./context/taskContext";
import { ThemeProvider } from "./context/themeConttext";


export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <head />
      {/* <ThemeProvider> */}
      <TaskProvider>
        {/* <body className="h-full"> */}
        <body>
          {children}
        </body>
      </TaskProvider>
      {/* </ThemeProvider> */}
    </html>
  )
}

