import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
//redux
// import { setCategories } from '../../store/categories/categories.action';


//asyn redux  redux-thunk
// import { fetchCategoriesAsync } from '../../store/categories/categories.action';


// redux-saga
import { fetchCategoriesStart } from '../../store/categories/categories.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categories = await getCategoriesAndDocuments('categories');
  //     dispatch(setCategories(categories));
  //   };

  //   getCategoriesMap();
  // }, []);

  useEffect(() => {
    //redux-thunk
    // dispatch(fetchCategoriesAsync());

    //redux-saga
    dispatch(fetchCategoriesStart());

  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
