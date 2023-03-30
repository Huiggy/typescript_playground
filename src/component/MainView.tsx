import Resource from './Resource';
import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';

const MainView = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product' element={<Product />} />
            <Route path='/resource' element={<Resource />} />
        </Routes>
    );
}

export default MainView;