import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x && !['login', 'signup', 'additionalinfo'].includes(x));

  // Check if the path is exactly "/home"
  if (location.pathname === '/home') {
    return null; // Don't render breadcrumbs for "/home"
  }

  return (
    <div className='mx-1'>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        {pathnames.length > 0 && (
          <>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;

              return (
                <li key={to}>
                  {!isLast ? (
                    <>
                      <Link to={to}>{value}</Link>
                      {' > '}
                    </>
                  ) : (
                    <span>{value}</span>
                  )}
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
