import { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./configs/ThemeConfigs";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./utils";

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback='Loading...'>
        <Routing />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
