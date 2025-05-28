import useQuery from "../api/useQuery";
import { useParams } from "react-router-dom";

export default function ActivityDetails() {
  //   const {
  //     data: activities,
  //     loading,
  //     error,
  //   } = useQuery("/activities", "activities");

  const { id } = useParams();
  console.log(useParams());

  return (
    <>
      <p>Activity ID: {id}</p>
    </>
  );
}
