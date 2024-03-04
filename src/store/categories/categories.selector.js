import { createSelector } from "reselect";
const selectCategoryReducer = (state) => {
  
  return state.categories;
  
}
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    
    return categoriesSlice.categories;
  }
);


export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categories) => {
    
    return categories.categories.reduce(
      (acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
      },
      {}
    );
  }
);



export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);












//   console.log('selector fired');
//   const categoriesMap = state.categories.categories.reduce(
//     (acc, { title, items }) => {
//       acc[title.toLowerCase()] = items;
//       return acc;
//     },
//     {}
//   );
//   return categoriesMap;
// };
