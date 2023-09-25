import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { IOccupationDetails } from "../models/IOccupationDetails";

export const SelectedJob = () => {
  const location = useLocation();
const occupationDetails: IOccupationDetails = location.state as IOccupationDetails;


  useEffect(() => {
    console.log('Current Path: ', window.location.pathname);
    console.log('SelectedJob Component Rendered!');
    console.log('occupationDetails: ', occupationDetails);
  }, [occupationDetails]);

  return (
    <>
      <h3>{occupationDetails?.occupation_label}</h3>
      <p>ID: {occupationDetails?.id}</p>
      <p>Concept taxonomy ID: {occupationDetails?.concept_taxonomy_id}</p>
      <p>Legacy AMS taxonomy ID: {occupationDetails?.legacy_ams_taxonomy_id}</p>
      <p>{occupationDetails?.occupation_group.occupation_group_label}</p>
      <p>{occupationDetails?.occupation_group.concept_taxonomy_id}</p>
      <p>{occupationDetails?.occupation_group.ssyk}</p>
      
      <ul>
        {occupationDetails?.metadata?.enriched_candidates_term_frequency.competencies.map((competency, index) => (
          <li key={index}>{competency.term}</li>
        ))}
      </ul>
    </>
  );
};
