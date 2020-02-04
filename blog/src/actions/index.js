import jsonplaceholder from '../apis/jsonplaceholder'


export const fetchposts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchuser =(id)=> async dispatch =>{
    const response = await jsonplaceholder.get(`/users/${id}`)

    dispatch({
        type:'FETCH_USER',
        payload: response.data
    });
}