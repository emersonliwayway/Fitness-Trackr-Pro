import useQuery from "../api/useQuery";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
import DeleteSet from "./DeleteSet";
import SetForm from "./SetForm";

export default function Sets() {
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
        <h3>Sets</h3>
        {routine.sets.map((set) => (
          <li key={set.id}>
            {set.name} x {set.count}
            {token && <DeleteSet set={set} />}
          </li>
        ))}
        {token && <SetForm routineId={id} />}
      </div>
    )
  );
}
