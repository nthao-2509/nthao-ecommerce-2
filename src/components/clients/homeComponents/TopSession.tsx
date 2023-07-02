import React from "react";
import { TopSessionStyled } from "../styleComponents/TopSession";
import { Link } from "react-router-dom";

type Props = {
  link?:
    | {
        url: string;
        text: string;
      }[]
    | undefined;
  heading?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
};

const TopSession = ({ link, heading, title, description }: Props) => {
  return (
    <TopSessionStyled>
      <div className='link'>
        <Link className='link__tag' to={`${link?.[0]?.url}`}>
          {link?.[0]?.text}
        </Link>
      </div>
      <div className='heading'>
        <h2>{heading}</h2>
      </div>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
    </TopSessionStyled>
  );
};

export default TopSession;
