import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};
