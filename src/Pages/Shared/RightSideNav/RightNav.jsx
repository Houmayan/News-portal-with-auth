import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightNav = () => {
  return (
    <div className="space-y-4">
      {/* Login Section */}
      <h2 className="text-xl font-semibold">Login With</h2>
      <button className="btn btn-outline btn-primary w-full ">
        <FaGoogle color="yellow"/>
        Login With Google
      </button>
      <button className="btn btn-outline btn-primary w-full ">
        <FaGithub />
        Login With Github
      </button>

      {/* Find Us On Section */}
      <h2 className="text-xl font-semibold">Find Us On</h2>
      <div className="flex flex-col">
        <div className="border p-4 rounded-t-lg">
          <a className=" flex font-medium !justify-start items-center gap-3" href="">
            <FaFacebook color="lightBlue"></FaFacebook>FaceBook
          </a>
        </div>

        <div className="border-x p-4">
          <a className=" flex font-medium items-center gap-3" href="">
            <FaTwitter color="blue"></FaTwitter>Twiteer
          </a>
        </div>

        <div className="border p-4 rounded-b-lg">
          <a className=" flex font-medium items-center gap-3" href="">
            <FaInstagram color="#D82D7E"></FaInstagram>InstaGram
          </a>
        </div>
      </div>

      {/* Qzone Section */}
      <h1 className="text-xl font-semibold">Q-Zone</h1>
      <div className="space-y-5 pb-10">
        <div className="">
        <img className="w-full" src={qzone1} alt="" />
        </div>
        <div>
        <img className="w-full" src={qzone2} alt="" />
        </div>
        <div>
        <img className="w-full" src={qzone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
