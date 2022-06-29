import { useTranslation } from "react-i18next";
import { Header, Layout, Menu } from "../components";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Header />
      <Menu />
    </Layout>
  );
};
