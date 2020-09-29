export const fetchData = async (dispatch: any) => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON._embedded.episodes
    });
}