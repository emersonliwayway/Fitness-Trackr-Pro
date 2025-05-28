import useQuery from "../api/useQuery";
import { Link, useParams } from "react-router-dom";

export default function ActivityDetails() {
  const { id } = useParams();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, "activities");

  console.log(activity);

  return (
    <>
      <p>Activity {id}</p>
      <Link to="/activities">Back</Link>
      <button onClick={() => console.log(`delete ${id}`)}>Delete</button>
    </>
  );
}
