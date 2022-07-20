import Comment from '../comment/comment';
import { Review } from '../../types/review';

type ListCommentProps = {
  reviews: Review[];
}

function ListComment (props: ListCommentProps) {
  const {reviews} = props;

  return (
    reviews.map((review: Review) => <Comment key={review.id} review={review}/>)
  );
}

export default ListComment;

