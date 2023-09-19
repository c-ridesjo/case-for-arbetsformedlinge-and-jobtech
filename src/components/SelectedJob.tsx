import axios from "axios";
import { useParams } from "react-router-dom";

export const SelectedJob = () => {
  const { occupationId } = useParams();
  console.log(occupationId);

  axios
    .get(
      `https://jobed-connect-api.jobtechdev.se/v1/enriched_occupations?occupation_id=${occupationId}`
    )
    .then((res) => {
      console.log(res);
    });

  return <></>;
};
