import { useState, useEffect } from "react";
import { Container, PostForm } from "../components/index";
import appWriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router";

const EditPost = () => {
  const [post, setPost] = useState();
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appWriteService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          }
        })
        .catch((error) => {
          console.log("Can't fetch the post: ", error);
        });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  console.log(post);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
