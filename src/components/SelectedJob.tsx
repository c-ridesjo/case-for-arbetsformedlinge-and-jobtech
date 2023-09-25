import { useParams } from "react-router-dom";
import { useState } from "react";
import { getEnrichedOccupations } from "../services/serviceBase";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { useEffect } from "react";

export const SelectedJob = () => {
  const { occupationId: paramOccupationId } = useParams();
  const [occupationDetails, setOccupationDetails] = useState<
    IOccupationDetails | undefined
  >(undefined);

  useEffect(() => {
    const occupationId =
      paramOccupationId || localStorage.getItem("selectedOccupationId");

    if (occupationId && !occupationDetails) {
      getEnrichedOccupations(occupationId).then((response) => {
        setOccupationDetails(response);
      });
    }
  }, [occupationDetails, paramOccupationId]);

  return (
    <>
      <h3>{occupationDetails?.occupation_label}</h3>
      <p>ID: {occupationDetails?.id}</p>
      <p>Concept taxonomy ID: {occupationDetails?.concept_taxonomy_id}</p>
      <p>Legacy AMS taxonomy ID: {occupationDetails?.legacy_ams_taxonomy_id}</p>
      <p>{occupationDetails?.occupation_group.occupation_group_label}</p>
      <p>{occupationDetails?.occupation_group.concept_taxonomy_id}</p>
      <p>{occupationDetails?.occupation_group.ssyk}</p>
    </>
  );
};