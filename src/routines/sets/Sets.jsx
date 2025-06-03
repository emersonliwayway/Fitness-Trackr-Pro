import useQuery from "../../api/useQuery";
import { useParams } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
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
      <div className="sets">
        <h3>Sets</h3>

        {routine.sets.length > 0 ? (
          routine.sets.map((set) => (
            <li className="setItem" key={set.id}>
              {set.name} x {set.count}
              {token && <DeleteSet set={set} />}
            </li>
          ))
        ) : (
          <>
            <p>No sets yet...</p>
          </>
        )}
        {token && <SetForm routineId={id} />}
      </div>
    )
  );
}
