import { Button, Header, Layout } from "../components";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Button text='Dodawanie' buttoncolor='pastelYellow' textcolor='pastelViolet' />
    </Layout>
  );
};
