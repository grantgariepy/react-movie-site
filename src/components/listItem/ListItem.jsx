import { InfoOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react";

export default function ListItem({index}) {

    const[isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div 
            className="listItem" 
            style={{left: isHovered && index * 225 -50 + index * 2.5}}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >

            <img src="https://img.search.brave.com/48D1_-AWJSFpNdSQGyBIQ8W8z-HAU2w6BvYIZAJKsLk/fit/1200/630/ce/1/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MTAvVGhlLUxpZ2h0/aG91c2UtMjAxOS1i/YW5uZXIuanBn" alt="" />
            
            {isHovered && (
                <>
                    <video src={trailer} autoplay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <InfoOutlined/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">16+</span>
                            <span>2021</span>
                        </div>
                        <div className="desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem similique quaerat perspiciatis ipsa sed harum, itaque earum officia sequi doloribus.
                        </div>
                        <div className="genre">Thriller</div>
                    </div>
                </>
            )}
        </div>
    );
}
