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
    deleteActivity(activity);
    navigate("/activities");
  }

  return (
    <>
      <button className="delete" onClick={() => DeleteBack()}>
        Delete
      </button>
    </>
  );
}
