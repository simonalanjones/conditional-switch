import { Outlet } from "react-router-dom";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

const BaseLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex grow bg-gray-50/90">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default BaseLayout;
