import useQuery from "../api/useQuery";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export default function ActivityDetails() {
  const { id } = useParams();
  const { token } = useAuth();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, "activities");

  const {
    mutate: deleteActivity,
    loading: isLoading,
    error: hasError,
  } = useMutation("DELETE", `/activities/${id}`, ["activities"]);

  return (
    activity && (
      <div>
        <h2>{activity.name}</h2>
        <p>{activity.creatorName}</p>
        <p>{activity.description}</p>
        {token && (
          <button onClick={() => deleteActivity()}>
            {isLoading ? "Deleting" : hasError ? hasError : "Delete"}
          </button>
        )}
      </div>
    )
  );
}
