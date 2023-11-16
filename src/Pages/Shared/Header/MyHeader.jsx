import moment from "moment/moment";
import logo from "../../../assets/logo.png"
const MyHeader = () => {
    return (
        <div className="text-center pb-5">
            <img className="mx-auto mb-5" src={logo} alt="" />
            <p className="text-lg mb-3">Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default MyHeader;