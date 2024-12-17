import { FeedbacksData } from "app/types/feedback"
import feedbacksData from "../../data/feedbacks.json"
import { FeedbackCard } from "@components/FeedbackCard/FeedbackCard";


export const Feedbacks = () => {

    const { feedbacks } = feedbacksData as FeedbacksData;

  return (
    <section>
        <h2>Отзывы наших клиентов</h2>
        <ul>
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
    </section>
  )
}
