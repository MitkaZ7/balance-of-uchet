export interface Feedback {
    image: string;
    author: string;
    text: string;
}

export interface FeedbacksData {
    feedbacks: Feedback[]
}