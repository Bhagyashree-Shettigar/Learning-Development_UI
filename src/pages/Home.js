import PostList from "../components/PostList";
import SideNav from "../components/SideNav";

const Home = () => {
    return <div style={{ display: 'flex' }}>
        <SideNav />
        <PostList />
    </div>
}

export default Home;