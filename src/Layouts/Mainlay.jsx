import { Outlet } from "react-router-dom";
import Nav from "../Comp/Nav";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";

const Mainlay = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            
           <Outlet></Outlet>
        </div>
    );
};

export default Mainlay;