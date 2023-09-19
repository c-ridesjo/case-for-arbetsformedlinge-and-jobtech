import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface OccupationDetails {
  id: string;
  occupation_label: string;
  concept_taxonomy_id: string;
  legacy_ams_taxonomy_id: string;
  occupation_group: {
    occupation_group_label: string;
    concept_taxonomy_id: string;
    ssyk: string;
  };
}

export const SelectedJob = () => {
  const { occupationId } = useParams();
  console.log(occupationId);
  const [occupationDetails, setOccupationDetails] = useState<
    OccupationDetails | undefined
  >(undefined);

  if (occupationDetails === undefined) {
    axios
      .get(
        `https://jobed-connect-api.jobtechdev.se/v1/enriched_occupations?occupation_id=${occupationId}`
      )
      .then((res) => {
        console.log(res);
        setOccupationDetails(res.data);
      });
  }
  return <>{JSON.stringify(occupationDetails, null, 4)}</>;
};
