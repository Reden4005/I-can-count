import { Suspense } from "react";
import { Header, Button, Layout } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./configs/ThemeConfigs";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback='Loading...'>
      <Layout>
        <Header />
        <Button text='Dodawanie' buttoncolor='pastelYellow' textcolor='pastelViolet' />
      </Layout>
    </Suspense>
  </ThemeProvider>
);

export default App;
