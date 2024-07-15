import Home from "./Pages/Home";
import ThemeContextProvider from "./Components/themeContext";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </>
  );
};

export default App;
