import { useContext } from "react";
import { TaskProvider } from "./context/taskContext";



export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <head />
      {/* <ThemeProvider> */}
      <TaskProvider>
        {/* <body className="h-full"> */}
        <body className="dark:bg-bodyDark bg-bodyLight">
          {/* <ThemeScriptTag /> */}
          <main >
            {children}
          </main>

        </body>
      </TaskProvider>
      {/* </ThemeProvider> */}
    </html>
  )
}

