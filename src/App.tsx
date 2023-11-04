import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";

const retrievePosts = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
};

function App() {
    const {
        data: posts,
        error,
        isLoading,
    } = useQuery("postsData", retrievePosts);

    if (isLoading) return <div>Fetching posts...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>{post.title}<hr/></li>
            ))}
        </ul>
    );
}

export default App;
