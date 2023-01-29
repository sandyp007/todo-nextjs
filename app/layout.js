import { TaskProvider } from "./context/taskContext";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <TaskProvider>
        <body className="dark:bg-bodyDark bg-bodyLight transition-colors duration-200">
          <main >
            {children}
          </main>
        </body>
      </TaskProvider>
    </html>
  )
}

