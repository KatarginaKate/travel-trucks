import type { CamperReview } from "../../types/camper";
import styles from "./Reviews.module.css";

export default function Reviews({ reviews }: { reviews: CamperReview[] }) {
  return (
    <section className={styles.reviews} aria-labelledby="reviews-title">
      <h2 id="reviews-title">Reviews ({reviews.length})</h2>
      {reviews?.map((review, index) => (
        <article
          className={styles.review}
          key={`${review.reviewer_name}-${index}`}
        >
          <div className={styles.reviewHeader}>
            <span className={styles.avatar}>
              {review.reviewer_name.charAt(0)}
            </span>
            <div className={styles.reviewAuthor}>
              <strong>{review.reviewer_name}</strong>
              <div
                className={styles.stars}
                aria-label={`${review.reviewer_rating} out of 5 stars`}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= review.reviewer_rating
                        ? styles.starFilled
                        : styles.star
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p>{review.comment}</p>
        </article>
      ))}
    </section>
  );
}
