import { InfoOutlined } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
           <img src="https://images.adsttc.com/media/images/5f7d/feb4/63c0/1772/3f00/0340/slideshow/Marcus_Wend_3.jpg?1602092715" alt="" /> 
           <div className="info">
               <img src="https://img.search.brave.com/_-pHVvAOe9J4GHUXPjVPmMrzJR2jzQPJL9JHBske3nE/fit/1000/563/ce/1/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL3cxMDAw/X2FuZF9oNTYzX2Zh/Y2UvN2E4OTByamNB/VHRFN2dCenp2YzZM/VjdNYVZ1LmpwZw"
                alt="" />
                <span className="desc">A teenage runaway takes part in a sleep study that becomes a nightmarish descent into the depths of her mind and a frightening examination of the power of dreams.</span>
                <div className="buttons">
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                    
                </div>
           </div>
        </div>
    )
}

