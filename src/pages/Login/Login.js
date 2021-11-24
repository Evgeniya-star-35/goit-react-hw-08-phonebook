import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BtnSubmit } from '../../components/BtnSubmit/BtnSubmit';
import { logIn } from '../../redux/auth/auth-operations';
import s from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h2 className={s.title}>Login Form</h2>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            placeholder="Your email"
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder="Your password"
            onChange={handleChange}
          />
        </label>
        <BtnSubmit />

        {/* <button type="submit">Sign in</button> */}
      </form>
    </>
  );
}
