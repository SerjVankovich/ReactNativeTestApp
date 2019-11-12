import Constants from '../constants';

export const getPictures = pictures => ({
  type: Constants.GET_PICTURES,
  pictures,
});

export const errorGetPictures = (isError, error) => ({
  type: Constants.ERROR_GET_PICTURES,
  isError,
  error,
});

export const picturesLoading = isLoading => ({
  type: Constants.PICTURES_LOADING,
  isLoading,
});

export const fetchPictures = url => dispatch => {
  dispatch(picturesLoading(true));

  fetch(url)
    .then(response => response.json())
    .then(body => {
      dispatch(picturesLoading(false));
      dispatch(
        getPictures(
          body.map(
            ({
              id,
              alt_description,
              urls: {full, small},
              user: {first_name, last_name},
            }) => ({
              id,
              alt_description,
              full,
              small,
              user: {
                first_name,
                last_name,
              },
            }),
          ),
        ),
      );
    })

    .catch(err => dispatch(errorGetPictures(true, err)));
};
