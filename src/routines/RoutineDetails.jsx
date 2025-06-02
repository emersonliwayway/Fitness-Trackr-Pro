import useQuery from "../api/useQuery";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Sets from "./Sets";

export default function RoutineDetails() {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const {
    data: routine,
    loading,
    error,
  } = useQuery(`/routines/${id}`, "routine");

  return (
    routine && (
      <div>
        <h2>{routine.name}</h2>
        <p>{routine.creatorName}</p>
        <p>{routine.goal}</p>
        <h3>Sets</h3>
        <Sets />
      </div>
    )
  );
}
