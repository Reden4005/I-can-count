import "./App.css";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

function App() {
  const { t } = useTranslation();
  return (
    <Suspense fallback='Loading...'>
      <div className='App'>{t("description")}</div>
    </Suspense>
  );
}

export default App;
