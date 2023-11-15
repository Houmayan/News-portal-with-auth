import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div className='max-w-6xl pt-11 mx-auto font-poppins'>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;