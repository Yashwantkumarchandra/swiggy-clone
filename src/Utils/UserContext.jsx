const { createContext } = require("react");

const UserContext = createContext({
  loggedInUser: "Default",
});

export default UserContext;
