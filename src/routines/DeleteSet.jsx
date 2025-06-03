import useMutation from "../api/useMutation";

export default function DeleteSet({ set }) {
  const {
    mutate: deleteSet,
    loading,
    error,
  } = useMutation("DELETE", "/sets/" + set.id, ["sets"]);

  function SetDelete() {
    deleteSet(set);
  }

  return (
    <>
      <button onClick={() => SetDelete()}>Delete</button>
    </>
  );
}
