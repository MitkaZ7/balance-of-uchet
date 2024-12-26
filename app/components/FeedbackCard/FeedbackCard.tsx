import { Feedback } from 'app/types/feedback'
import styles from './FeedbackCard.module.scss'

type FeedbackCardProps = Feedback;
export const FeedbackCard = ({image, author, text}:FeedbackCardProps) => {
  return (
    <div className={styles['feedback-card']}>
        <div className={styles['feedback-card__credentials']}>
          <img className={styles['feedback-card__logo']} src={image} alt="логотип" />
          <p className={styles['feedback-card__name']}>{author}</p>
        </div>
        
        <p className={styles['feedback-card__feedback-text']}>{text}</p>
    </div>
  )
}
