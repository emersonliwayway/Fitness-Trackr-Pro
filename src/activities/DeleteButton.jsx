import useMutation from "../api/useMutation";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({ activity }) {
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);

  const navigate = useNavigate();

  function DeleteBack() {
    deleteActivity();
    navigate("/activities");
  }

  return (
    <>
      <button onClick={() => DeleteBack()}>Delete</button>
    </>
  );
}
