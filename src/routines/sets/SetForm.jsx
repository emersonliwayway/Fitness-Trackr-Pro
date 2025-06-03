import useMutation from "../../api/useMutation";
import useQuery from "../../api/useQuery";

export default function SetForm({ routineId }) {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");

  const {
    mutate: add,
    loading: isLoading,
    error: hasError,
  } = useMutation("POST", "/sets", ["routines", "routine"]);

  const addSet = (formData) => {
    const activityId = formData.get("activityId");
    const count = formData.get("count");
    add({ activityId, count, routineId });
  };

  return (
    <>
      <h2>Add a set</h2>
      <form action={addSet}>
        <label>
          Activity
          <select name="activityId">
            {activities &&
              activities.map((activity) => (
                <option value={activity.id} key={activity.id}>
                  {activity.name}
                </option>
              ))}
          </select>
        </label>
        <label>
          Count
          <input type="number" name="count" />
        </label>
        <button>{loading ? "Adding..." : "Add set"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}
