import useQuery from "../api/useQuery";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import DeleteRoutine from "./DeleteRoutine";
import Sets from "./Sets";

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
      <div>
        <h2>{routine.name}</h2>
        <p>Created by: {routine.creatorName}</p>
        <p>Goal: {routine.goal}</p>
        <br />
        {token && <DeleteRoutine routine={routine} />}
        <Sets />
      </div>
    )
  );
}
