import { useParams } from "react-router-dom";

export const SelectedJob = () => {
  const { occupationId } = useParams();
  console.log(occupationId);

  return <></>;
};
