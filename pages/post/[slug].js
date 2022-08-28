import { useContext, useEffect, useState } from "react";
import { MediumContext } from "../../context/MediumContext";
import { useRouter } from "next/router";

// Components
import Recommendations from "../../components/Recommendations";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";

const styles = {
  content: `flex scrollbar-hide`,
};

const Post = () => {
  const { posts, users } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    // guard clause
    if (posts.length === 0) {
      return;
    }

    setPost(posts.find(post => post.id === router.query.slug));

    setAuthor(users.find(user => user.id === post.data?.author));
  }, [post]);

  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendations author={author} />
    </div>
  );
};

export default Post;
