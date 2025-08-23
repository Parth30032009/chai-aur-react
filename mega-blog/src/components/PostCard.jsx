import appWriteService from "../appwrite/config";
import { Link } from "react-router";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 ">
        <div className="w-full justify-center mb-4">
          <div>
            <img
              src={appWriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
