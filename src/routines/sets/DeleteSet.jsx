import useMutation from "../../api/useMutation";

export default function DeleteSet({ set }) {
  const {
    mutate: deleteSet,
    loading,
    error,
  } = useMutation("DELETE", "/sets/" + set.id, ["routines", "routine"]);

  function SetDelete() {
    deleteSet(set);
  }

  return (
    <>
      <button className="deleteSet" onClick={() => SetDelete()}>
        Delete
      </button>
    </>
  );
}
