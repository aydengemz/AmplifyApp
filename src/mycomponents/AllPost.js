import APost from "./APost"

function AllPosts(props) {
    return (
        <>
            <h2>ALL POSTS</h2>
            <ul>
                {props.posts.map((post) => <APost postInfo={post} />)}
            </ul>
        </>
    );

}

export default AllPosts;