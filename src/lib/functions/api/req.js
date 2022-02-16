import store from '../../../redux/store';
// import {differenceInDays} from 'date-fns';
// import {fetchRefreshToken} from '../redux/actions/auth';

let isConnected = true;
let AlertIsOpen = false;

// NetInfo.fetch().then(state => {
//   isConnected = state.isConnected;
//   store.dispatch({
//     type: 'ERROR_INTERNET',
//     payload: !isConnected,
//   });
// });

// NetInfo.addEventListener(state => {
//   isConnected = state.isConnected;
//   store.dispatch({
//     type: 'ERROR_INTERNET',
//     payload: !isConnected,
//   });
// });

export default cb => async (...params) => {
  if (isConnected && !AlertIsOpen) {
    try {
      const response = await cb(...params);
      return response;
    } catch (error) {
      console.log('Ошибка', error.response.data.error)
      // Alert.alert('Ошибка', error.response.data.error);
      return Promise.reject({message: 'SERVER_ERROR'});
    }
  }

  if (!AlertIsOpen) {
    AlertIsOpen = true;
    console.log("Проблема с интернетом")
    // Alert.alert(
    //   'Нет соединения с интернетом',
    //   'Попробуйте воспользоваться другой сетью - мобильной или Wi-Fi',
    //   [{text: 'OK', onPress: () => (AlertIsOpen = false)}]
    // );
  }

  return Promise.reject({message: 'NO_INTERNET'});
};
