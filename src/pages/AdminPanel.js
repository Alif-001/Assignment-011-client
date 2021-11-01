import React, { useState } from "react";
import { useHistory } from "react-router";
import Admin from "../components/Admin/Admin";
import useAuth from "../hooks/useAuth";

const AdminPanel = () => {
  const history = useHistory();
  const { AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;
  const [active, setActive] = useState();
  console.log(active);

  return (
    <div>
      {uid !== uid ? (
        history.push("/home")
      ) : (
        <div>
          <Admin></Admin>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default AdminPanel;
