import React from "react";
import Container from "../Container";
import { CollectionStyle } from "../styleComponents/CollectionStyle";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <CollectionStyle>
      <Container>
        <div className='collection'>
          <div className='collection__top'>
            <div className='title'>
              <h1>Editor's Pick</h1>
            </div>
            <div className='description'>
              <p>Problems trying to resolve the conflict between </p>
            </div>
          </div>
          <div className='collection__cards'>
            {Array.from({ length: 4 }).map((card: any, key: number) => (
              <div className='item'>
                <div className='image'>
                  <img
                    src={`/images/collection-${key + 1}.png`}
                    alt={`collection-${key}`}
                  />
                </div>
                <div className='button'>
                  <Link className='button__collection' to={"#"}>
                    Name-{key + 1}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </CollectionStyle>
  );
};

export default Collection;
