
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] pl-4 py-2 rounded mb-4">
            <div className="btn bg-[#D72050] text-white font-light my-2">Breaking News</div>
            <Marquee className="text-[#403F3F]" pauseOnHover={1} speed={90} >
                <Link className="ml-2 ">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link className="ml-2">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link className="ml-2">Match Highlights: Germany vs Spain — as it happened !</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;