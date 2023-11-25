import MyHeader from '../Shared/Header/MyHeader';
import { useLoaderData, useParams } from 'react-router-dom';
import MyNavbar from '../Shared/Navbar/MyNavbar';
import RightNav from '../Shared/RightSideNav/RightNav';

const NewsDetails = () => {

    const {id} = useParams();
    const details = useLoaderData();
    const newsDetail = details.find((detail)=>detail._id === id);
    const {image_url} = newsDetail;
    console.log(newsDetail);
    return (
        <div>
            <MyHeader></MyHeader>
            <MyNavbar></MyNavbar>
            <div className='grid grid-cols-4'>
                <div className='col-span-3 p-4'>
                <p>{id}</p>
                <img src={image_url} alt="" />
            <h1>Details News</h1>
                </div>
                <div className=''>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;