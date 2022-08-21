import ReadersNav from "../../components/ReadersNav";

// Components
import Recommendations from "../../components/Recommendations";
import ArticleMain from "../../components/ArticleMain";

const styles = {
  content: `flex`,
};

const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendations />
    </div>
  );
};

export default Post;
