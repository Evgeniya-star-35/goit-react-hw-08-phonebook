import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import { getUserName } from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../images/default.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  //   return (
  //     <div style={styles.container}>
  //       <img src={avatar} alt="" width="32" style={styles.avatar} />
  //       <span style={styles.name}>Добро пожаловать, {name}</span>
  //       <button type="button" onClick={() => dispatch(authOperations.logOut())}>
  //         Выйти
  //       </button>
  //     </div>
  //   );
}
