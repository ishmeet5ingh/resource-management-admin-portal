import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Group32, Search } from "../components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setResources } from "../store/resourcesSlice.js";
import { setLoading } from "../store/LoadingSlice.js";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(
          `https://media-content.ccbp.in/website/react-assignment/resources.json`
        );
        dispatch(setResources(response.data));
      } catch (error) {
        console.log(error);
      }
      dispatch(setLoading(false));
    })();
  }, [dispatch]);

  return (
    <div className="xl:px-[149px] md:px-24 px-14  bg-[#FBFBFB] ">
      <Group32 />
      <Search />
      <Outlet />
    </div>
  );
}

export default Home;
