export const toggleFav = (episode:any, dispatch:any, state:any) => {
    const episodeInFave = state.favourites.includes(episode);
    let dispatchObj = {
        type: 'ADD_FAV',
        payload: episode
    }
    if(episodeInFave) {
        const favWithoutEpisode = state.favourites.filter((fav:any) => fav.id !== episode.id);
        dispatchObj = {
            type: 'REMOVE_FAV',
            payload: favWithoutEpisode
        }
    }
    return dispatch(dispatchObj);
}