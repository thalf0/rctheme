import useLocalStorage from "./useLocalStorage"

export default function App() {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello, World!</h1>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}