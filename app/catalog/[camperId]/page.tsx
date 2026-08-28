import { notFound } from "next/navigation";
import BookingForm from "../../../components/BookingForm/BookingForm"
import CamperDetails from "../../../components/CamperDetails/CamperDetails";
import Header from "../../../components/Header/Header";
import Reviews from "../../../components/Reviews/Reviews";
import BackButton from "../../../components/common/BackButton/BackButton";
import { fetchCamper, fetchCamperReviews } from "../../../services/campers";
import styles from "./page.module.css";

type CamperPageProps = {
  params: Promise<{
    camperId: string;
  }>;
};

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;
  const result = await Promise.all([
    fetchCamper(camperId),
    fetchCamperReviews(camperId),
  ]).catch(() => null);

  if (!result) {
    notFound();
  }

  const [camper, reviews] = result;

  return (
    <>
      <Header />
      <main className={styles.page}>
        <BackButton />
        <CamperDetails camper={camper} reviewsCount={reviews.length} />
        <div className={styles.bottomSection}>
          <Reviews reviews={reviews} />
          <BookingForm camperId={camper.id} />
        </div>
      </main>
    </>
  );
}