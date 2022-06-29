import { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./configs/ThemeConfigs";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./utils";
import { store } from "./data";
import { Provider } from "react-redux";

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback='Loading...'>
          <Routing />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

export default App;
