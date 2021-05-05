import Header from "../components/Header";
import Footer from "../components/Footer";

const SiteLayout = ({ children }) => (
  <>
    <header className="header"><Header /></header>
    <div className="content">{children}</div>
    <Footer />
  </>
);

export default SiteLayout; //Todo