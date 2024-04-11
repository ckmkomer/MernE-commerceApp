import { useEffect, useState } from "react";
import Footer from "../components/Layout/footer/Footer";
import Header from "../components/Layout/header/Header";
import PropTypes from "prop-types";
import Search from "../components/Modals/Search/Search";
import Dialog from "../components/Modals/Dialog/Dialog";

function MainLayout({ children }) {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    // localStorage'dan dialog durumunu alırken JSON.parse yerine, doğrudan true kullanabilirsiniz
    const dialogStatus = localStorage.getItem("dialog") ? true : true;

    // setTimeout içindeki süreyi düzenledim, istediğiniz değeri kullanabilirsiniz
    setTimeout(() => {
      setIsDialogShow(dialogStatus);
    }, 1000); // Örneğin, 1000 milisaniye (1 saniye) olarak ayarladım.

  }, []);

  return (
    <>
      <div className="main-layout">
        <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
        <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
        <Header setIsSearchShow={setIsSearchShow} />
        {children}
        <Footer />
      </div>
    </>
  );
}

// children prop tipini PropTypes.node olarak değiştirdim
MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
