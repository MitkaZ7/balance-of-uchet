import { Feedback } from 'app/types/feedback'


type FeedbackCardProps = Feedback;
export const FeedbackCard = ({image, author, text}:FeedbackCardProps) => {
  return (
    <div>
        <img src={image} alt="" />
        <p>{author}</p>
        <p>{text}</p>
    </div>
  )
}
