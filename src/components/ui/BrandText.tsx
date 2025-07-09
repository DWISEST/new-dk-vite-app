import React, { ReactNode } from 'react';

const BrandText: React.FC<{ children: ReactNode }> = ({ children }) => {
  const processNode = (node: ReactNode, key: string): ReactNode => {
    if (typeof node === 'string') {
      const parts = node.split(/(dktelecom)/gi);
      return (
        <React.Fragment key={key}>
          {parts.map((part, index) =>
            /dktelecom/i.test(part) ? (
              <span key={`${key}-${index}`} className="text-primary font-semibold">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </React.Fragment>
      );
    }
    return node;
  };

  if (Array.isArray(children)) {
    return (
      <>
        {children.map((child, index) => processNode(child, `${index}`))}
      </>
    );
  }

  return processNode(children, '0');
};

export default BrandText;
