import useQuery from "../api/useQuery";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sets() {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const {
    data: routine,
    loading,
    error,
  } = useQuery(`/routines/${id}`, "routines");
}
