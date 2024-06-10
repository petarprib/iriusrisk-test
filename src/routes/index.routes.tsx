import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import BaseLayout from '../layouts/base/base.layout';
import Planets from '../views/planets/planets.view';
import Starships from '../views/starships/starships.view';

export type AppView = 'planets' | 'starships';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route index element={<Navigate to='planets' />} />
        <Route path='planets' element={<Planets />} />
        <Route path='starships' element={<Starships />} />
        <Route path='*' element={<Navigate to='planets' />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
