import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <div className="container-fluid py-4">
      {title && (
        <div className="row mb-4">
          <div className="col">
            <h2 className="text-center fw-large fs-9" style={{}}>{title}</h2>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;