import { Link } from "react-router-dom";

const News = ({news}) => {
    const {_id,title,image_url,author,details} = news;

    return (
        <div>
            
            {
                <div className='p-5'>
                    
                    {
                        author?.name !==null ?
                         <div className="badge justify-start badge-outline rounded-t-md rounded-b-md w-full py-5 bg-slate-300">
                            <h4 className="text-black ">{author?.name}</h4>
                        </div> :''
                    }
                    {/* 
                        {
                            
                        }
                    </div> */}
                    <h1 className='text-2xl'>{title}</h1>
                    <img src={image_url} alt="" />
                        
                     {
                     details.length > 200 
                     ?  <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600"><h1>Read More . . .</h1></Link> </p> : <p>{details}</p> }
                           
                        
                </div>
            }
            
        </div>
    );
};

export default News;