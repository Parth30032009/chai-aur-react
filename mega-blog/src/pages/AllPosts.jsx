import { useState, useEffect } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appWriteService
      .getAllPosts([])
      .then((posts) => {
        if (posts?.documents) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap text-center">
          {posts ? (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))
          ) : (
            <p className="text-blue-300 text-center text-2xl flex-1">
              No post found
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
