import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <div>
      <h1>Base</h1>
      <Outlet />
    </div>
  );
};

export default Base;
