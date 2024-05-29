import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((res) => res.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : reason.toString(),
    })));
}
