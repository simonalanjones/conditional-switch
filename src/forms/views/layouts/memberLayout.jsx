import { Outlet } from "react-router-dom";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import MemberList from "../../../components/memberList";
import Membership from "../../../components/membership";

const MemberLayout = ({ membership, memberList, memberSelect }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="mx-auto w-full max-w-6xl"></div>
      <div className="flex grow bg-gray-50/90">
        <div className="mx-auto w-full max-w-6xl pt-8 md:flex md:flex-nowrap">
          <div className="mx-auto w-fit px-8">
            <Membership data={membership} />
            <MemberList data={memberList} />
          </div>
          <div className="flex-grow px-8">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MemberLayout;
