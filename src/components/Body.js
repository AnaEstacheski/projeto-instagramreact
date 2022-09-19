import Sidebar from "./SideBar"
import Posts from "./Posts"
import Stories from "./Stories"

export default function Body() {
    return (
        <div class="corpo">
            <Left />
            <Sidebar />
        </div>
    )
}

function Left() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>        
    )
}
