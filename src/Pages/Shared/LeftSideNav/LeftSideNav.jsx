import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { CiCalendarDate } from "react-icons/ci";

const LeftSideNav = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl pb-5">All Category</h2>
      {/* <h2>Length:{loadData.length}</h2> */}
      {loadData.map((data) => (
        <NavLink
          to={`category/${data.id}`}
          className="block pl-12 pb-8 text-xl"
          key={data.id}
        >
          {data.name}
        </NavLink>
      ))}
      <div className="space-y-4">
        <div className="space-y-5">
          <img src={img1} alt="" />
          <h1 className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className="flex items-center">
            <span className="pr-4">Sports</span>
            <CiCalendarDate className="mr-2" />
            <p>Jan 4, 2022</p>

          </div>
        </div>
        <div className="space-y-5">
          <img src={img2} alt="" />
          <h1 className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className="flex items-center">
            <span className="pr-4">Sports</span>
            <CiCalendarDate className="mr-2" />
            <p>Jan 4, 2022</p>

          </div>
        </div>
        <div className="space-y-5">
          <img src={img3} alt="" />
          <h1 className="text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
          <div className="flex items-center">
            <span className="pr-4">Sports</span>
            <CiCalendarDate className="mr-2" />
            <p>Jan 4, 2022</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
