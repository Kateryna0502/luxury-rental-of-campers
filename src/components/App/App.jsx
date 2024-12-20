import { Route, Routes } from "react-router-dom"
import {lazy, Suspense} from 'react';
import css from './App.module.css';
import Layout from "../Layout/Layout";
import Reviews from "../Reviews/Reviews";
import VehicleDetails from "../VehicleDetails/VehicleDetails";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../../pages/DetailsPage/DetailsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

function App() {

  return (
    <div className={css.container}>
      <Layout>
          <Suspense fallback ={null}>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/catalog" element={<CatalogPage/>} />
              <Route path="/catalog/:id" element={<DetailsPage/>}/>
              <Route path="features" element={<VehicleDetails />} />
            <Route path="reviews" element={<Reviews />} />
          
              <Route path="*" element={<NotFoundPage/>}/>
            
            </Routes>
          </Suspense>

      </Layout>

      
    </div>
  )
}

export default App