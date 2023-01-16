import { useContext } from "react";
import { TaskProvider } from "./context/taskContext";
import { ThemeProvider } from "./context/themeConttext";


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <ThemeProvider>
        <TaskProvider>
          <body>
            {/* <body className={DarkTheme ? 'bg-[#161722] text-white' : 'bg-white text-[#161722]'} > */}
            {children}
          </body>
        </TaskProvider>
      </ThemeProvider>
    </html>
  )
}

