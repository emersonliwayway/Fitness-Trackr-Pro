import useQuery from "../api/useQuery";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import DeleteRoutine from "./DeleteRoutine";
import Sets from "./sets/Sets";

export default function RoutineDetails() {
  const { id } = useParams();
  const { token } = useAuth();

  const {
    data: routine,
    loading,
    error,
  } = useQuery(`/routines/${id}`, "routine");

  return (
    routine && (
      <div className="routineDetails">
        <h2>{routine.name}</h2>
        <p>{routine.creatorName}</p>
        <p>{routine.goal}</p>
        {token && <DeleteRoutine routine={routine} />}
        <Sets />
      </div>
    )
  );
}
