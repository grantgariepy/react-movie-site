import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"

export default function ListItem() {
    return (
        <div className="listItem">
            <img src="https://img.search.brave.com/48D1_-AWJSFpNdSQGyBIQ8W8z-HAU2w6BvYIZAJKsLk/fit/1200/630/ce/1/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MTAvVGhlLUxpZ2h0/aG91c2UtMjAxOS1i/YW5uZXIuanBn" alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                </div>
            </div>
        </div>
    )
}
