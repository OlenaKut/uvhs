import ThemeProvider from "react-bootstrap/ThemeProvider";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"]}
      minBreakpoint="xs"
    >
      <div className="App">
        <FirstPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
