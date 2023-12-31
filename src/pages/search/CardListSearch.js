import "./cardListSearch.css";
import { FaRegComments } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';

function createdTime (arg){
        const now = Date.now();
        const postedTime = arg.created_utc * 1000;
        const diffTime = now - postedTime;

        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diffTime / (1000 * 60 * 60));
        const minutes = Math.floor(diffTime / (1000 * 60));

        if(days){
                return `${days} ${days > 1? "days" : "day"} ago`;
        };
        if(hours){
                return `${hours} ${hours > 1? "hours" : "hour"} ago`;
        };
        if(minutes){
                return `${minutes} ${minutes > 1? "minutes" : "minute"} ago`;
        };
};

export const CardListSearch = ({data}) => {

	const {subreddit, author, title, url, selftext, num_comments, ups, downs} = data;
	// console.log("data" in CardListSearch.js", link_title);
	
	return ( 
		<div className="cardListContainer">
			<div className="col">
				<div className="card h-100">
					<div className="card-header" id="header">
                                                <div >
							<small className="text-body-secondary ">Subreddit:</small>
							<small className="text-body-secondary subheader">{subreddit}</small>
						</div>
						<div >
							<small className="text-body-secondary ">Author:</small>
							<small className="text-body-secondary subheader">{author}</small>
						</div>
						<div>
							<small className="text-body-secondary ">Posted:</small>
							<small className="text-body-secondary subheader">{createdTime(data)}</small>
						</div>
					</div>
					<div className="card-body">                                                    
                                                <h5 className="card-title">
                                                        <a href={url} target="_blank" rel="noreferrer" className="title">{title}</a>
                                                </h5>
                                                <hr></hr>
                                                <p className="text-body-secondary">{selftext}</p>                       
					</div>
					<div className="card-footer" id="footer">
						<div className="subfooterContainer">
							<small className="text-body-secondary subfooter">< FaRegComments /> :</small>
							<small className="text-body-secondary subfooter">{num_comments}</small>
						</div>
						<div className="subfooterContainer">
							<small className="text-body-secondary subfooter"><FaRegThumbsUp /> :</small>
							<small className="text-body-secondary subfooter">{ups}</small>
						</div>
						<div className="subfooterContainer">
							<small className="text-body-secondary subfooter"><FaRegThumbsDown /> :</small>
							<small className="text-body-secondary subfooter">{downs}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	)      
};
