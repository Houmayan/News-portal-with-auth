
import MyHeader from "../Shared/Header/MyHeader";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import MyNavbar from "../Shared/Navbar/MyNavbar";
import RightNav from "../Shared/RightSideNav/RightNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
             
             <MyHeader></MyHeader>
             <BreakingNews></BreakingNews>
             <MyNavbar></MyNavbar>
            {/* <h1 className="text-6xl  font-poppins">This is home</h1> */}

            {/* Main section of Home Page for creating 3 section; left center and bottom */}
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className=" border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    <h1>THis is center section</h1>
                </div>
                <div className=" border">
                    {/* <RightSideNav>
                    </RightSideNav> */}
                    <RightNav></RightNav>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;