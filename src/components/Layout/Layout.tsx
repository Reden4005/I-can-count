import * as Styled from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Styled.Box>{children}</Styled.Box>;
};
