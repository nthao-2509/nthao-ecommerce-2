import React, { ReactNode } from "react";
import { DescriptionStyle } from "./style";
import parse from "html-react-parser";
import { Collapse } from "antd";
import {
  TypeDataCollapse,
  TypeDataTabs,
  TypeDataTabsContent,
  TypeDataTabsContentChildren,
} from "types/Types";

const Description = ({ data }: { data: TypeDataTabs[] }) => {
  return (
    <DescriptionStyle>
      {data?.map((item: TypeDataTabs, key: number) => (
        <div className={item.className} key={key}>
          {item.content?.map(
            (content: TypeDataTabsContent, keyContent: number) => (
              <div key={keyContent}>
                {content.type === "image" && (
                  <div className='image'>
                    <img src={content.src} alt='' />
                  </div>
                )}
                {content.type === "list" && (
                  <div className='list'>
                    {content.content?.map(
                      (
                        contentParent: TypeDataTabsContentChildren,
                        keyContentParent: number
                      ) => {
                        const childrenCollapse: {
                          key: number | string;
                          label: string;
                          children: ReactNode;
                        }[] = [];
                        if (contentParent.type === "collapse") {
                          if (contentParent?.collapse) {
                            contentParent?.collapse?.map(
                              (item: TypeDataCollapse) => {
                                return childrenCollapse.push({
                                  ...item,
                                  children: parse(item.children),
                                });
                              }
                            );
                          }
                        }
                        return (
                          <div key={keyContentParent}>
                            <div className='title'>
                              <h3>{contentParent.title}</h3>
                            </div>
                            {contentParent.text &&
                              contentParent.type === "text" && (
                                <>{parse(contentParent.text)}</>
                              )}
                            {contentParent?.collapse &&
                              contentParent.type === "collapse" && (
                                <Collapse
                                  className='collapse__custom'
                                  accordion
                                  items={childrenCollapse}
                                />
                              )}
                          </div>
                        );
                      }
                    )}
                    <div className='title'></div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      ))}
    </DescriptionStyle>
  );
};

export default Description;
