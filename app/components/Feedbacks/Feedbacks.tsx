import { FeedbacksData } from "app/types/feedback"
import feedbacksData from "../../data/feedbacks.json"
import { FeedbackCard } from "@components/FeedbackCard/FeedbackCard";
import styles from './Feedbacks.module.scss'

export const Feedbacks = () => {

    const { feedbacks } = feedbacksData as FeedbacksData;

  return (
    <section className={styles['feedbacks-section']}>
        <h2 className={styles['feedbacks-section__title']}>Отзывы наших клиентов</h2>
        <ul className={styles['feedbacks-section__feedbacks-list']}>
            {
               feedbacks.map((feedback, index) => {
                return <FeedbackCard
                            key={index}
                            image={feedback.image}
                            author={feedback.author}
                            text={feedback.text}
                />
               })
            }
        </ul>
        <p className={styles['feedbacks-section__summary']}>
        Сотрудничая с нами, вы можете быть уверены, 
        что ваши финансы будут в надежных руках. Мы уже помогли многим компаниям оптимизировать их затраты, и готовы сделать то же самое для вас.
        </p>
    </section>
  )
}
