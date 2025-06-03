import useMutation from "../api/useMutation";
import { useNavigate } from "react-router-dom";

export default function DeleteRoutine({ routine }) {
  const {
    mutate: deleteRoutine,
    loading,
    error,
  } = useMutation("DELETE", "/routines/" + routine.id, ["routines"]);

  const navigate = useNavigate();

  function RoutineDelete() {
    deleteRoutine(routine);
    navigate("/routines");
  }

  return (
    <>
      <button onClick={() => RoutineDelete()}>Delete</button>
    </>
  );
}
