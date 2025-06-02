import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import ActivityDetails from "./activities/ActivityDetails";
import RoutinePage from "./routines/RoutinePage.jsx";
import RoutineDetails from "./routines/RoutineDetails.jsx";
import Error404 from "./Error404.jsx";
import { Route, Routes } from "react-router-dom";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<ActivitiesPage />} />
        <Route path="/routines" element={<RoutinePage />} />
        <Route path="/routines/:id" element={<RoutineDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
