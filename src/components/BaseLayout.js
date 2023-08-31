import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      {/* <Sidebar /> */}
      <NavBar />
      
      <main className="layout__main-content">{children}</main>;
    </div>
  );
};

export default BaseLayout;
