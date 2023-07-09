import React from "react";
import { PaginationStyled } from "./styles/PaginationStyled";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return <a>First</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};

const PaginationCustom = () => {
  return (
    <PaginationStyled>
      <Pagination total={30} itemRender={itemRender} />
    </PaginationStyled>
  );
};

export default PaginationCustom;
