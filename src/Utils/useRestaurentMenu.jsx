import axios from "axios";
import { useEffect, useState } from "react";
import { MENU_URL } from "./Constants";

const useRestaurentMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);

  async function fetchData() {
    const data = await axios.get(MENU_URL + restId);
    setResInfo(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurentMenu;
