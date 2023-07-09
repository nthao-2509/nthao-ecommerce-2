import React from "react";
import { TypeDataTabs } from "types/Types";
import Description from "./Description";

type Props = {
  dataContent: TypeDataTabs[];
};

const ContentTabs = ({ dataContent }: Props) => {
  return <Description data={dataContent} />;
};

export default ContentTabs;
