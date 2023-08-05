import { Outlet } from 'react-router-dom';
import { FavoriteIDsContext } from './components/context';
import { useState } from 'react';

const ContextLayout = () => {
  const [favIds, setFavIds] = useState([])

  return (
    <FavoriteIDsContext.Provider value={[favIds, setFavIds]}>
      <Outlet />
    </FavoriteIDsContext.Provider>
  );
};

export default ContextLayout;
