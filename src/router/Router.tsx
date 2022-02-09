import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Explore } from '../pages/Explore';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { PrivateRoute } from './PrivateRoute';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login />} />
      <Route
        path='home'
        element={
          <PrivateRoute redirectTo='/login'>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path='explore' element={<Explore />} />
    </Routes>
  </BrowserRouter>
);
