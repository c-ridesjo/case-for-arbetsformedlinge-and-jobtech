import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const SelectedJob = () => {
  const { occupationId } = useParams();
  console.log(occupationId);
  const [occupationDetails, setOccupationDetails] = useState({} as any);

  axios
    .get(
      `https://jobed-connect-api.jobtechdev.se/v1/enriched_occupations?occupation_id=${occupationId}`
    )
    .then((res) => {
      console.log(res);
      setOccupationDetails(res.data);
    });

  return <>{JSON.stringify(occupationDetails, null, 4)}</>;
};
