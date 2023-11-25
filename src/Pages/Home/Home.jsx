
import { useLoaderData } from "react-router-dom";
import MyHeader from "../Shared/Header/MyHeader";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import MyNavbar from "../Shared/Navbar/MyNavbar";
import RightNav from "../Shared/RightSideNav/RightNav";
import BreakingNews from "./BreakingNews";
import News from "./News";
const Home = () => {
    const news = useLoaderData();

    console.log(news);
    return (
        <div>
             
             <MyHeader></MyHeader>
             <BreakingNews></BreakingNews>
             <MyNavbar></MyNavbar>
            {/* <h1 className="text-6xl  font-poppins">This is home</h1> */}

            {/* Main section of Home Page for creating 3 section; left center and bottom */}
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className=" ">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* Main news container */}
                <div className="col-span-2 ">
                    {
                        news.map(aNews =><News news={aNews} key={aNews._id}          ></News>)
                    }
                </div>
                <div className="">
                    {/* <RightSideNav>
                    </RightSideNav> */}
                    <RightNav></RightNav>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;