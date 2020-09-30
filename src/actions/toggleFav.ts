export const toggleFav = (episode:any, dispatch:any) => dispatch({
    type: 'ADD_FAV',
    payload: episode
})
