import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function DeleteButton() {
  const { token } = useAuth();

  return (
    <>
      <button onClick={() => console.log("click")}>Delete</button>
    </>
  );
}
