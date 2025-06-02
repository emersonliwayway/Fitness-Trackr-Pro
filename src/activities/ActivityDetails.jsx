import useQuery from "../api/useQuery";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import DeleteButton from "./DeleteButton";
import { useNavigate } from "react-router-dom";

export default function ActivityDetails() {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, "activity");

  return (
    activity && (
      <div>
        <h2>{activity.name}</h2>
        <p>{activity.creatorName}</p>
        <p>{activity.description}</p>

        {token && <DeleteButton activity={activity} />}

        {/* add button */}
        <button onClick={() => navigate("/activities")}>Back</button>
      </div>
    )
  );
}
