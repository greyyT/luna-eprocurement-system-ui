import Input from '~/components/Input';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import handleInput from '~/utils/validator';
import handleLogin from '~/utils/handleLogin';

function SignIn({ setToken, setEntity }) {
  useEffect(() => {
    setEntity(undefined);

    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setError({
      email: '',
      password: '',
    });
  }, [email, password]);

  const handleSubmit = async () => {
    // Pretreatment: check email username and password is valid
    const emailError = handleInput(email, 'required', 'email');
    const passwordError = handleInput(password, 'required', 'password');

    setError({ email: emailError, password: passwordError });

    // Log in case: only check email and password pass the pretreatment
    if (emailError === undefined && passwordError === undefined) {
      console.log(email, password);

      // Go to handle login to check on call api
      const token = await handleLogin(email, password);

      setToken(token);

      // Navigate to main page
      navigate('/');
    }
  };

  return (
    <>
      <h1 className="font-bold font-inter text-3xl ">Sign In</h1>
      <div className="flex flex-col gap-4 mt-10">
        <Input
          label="Email"
          onChange={(ev) => setEmail(ev.target.value)}
          id="email"
          type="email"
          value={email}
          error={error.email}
        />
        <Input
          label="Password"
          onChange={(ev) => setPassword(ev.target.value)}
          id="password"
          type="password"
          value={password}
          error={error.password}
        />
        <button className="h-12 bg-primary mt-4 text-white font-inter rounded-md" onClick={handleSubmit}>
          Sign in
        </button>
      </div>
      <div className="flex justify-between text-zinc-400 font-inter mt-4 text-sm">
        <p className="cursor-pointer hover:underline hover:text-primary">Forget password</p>
        <div className="">
          Don't have an account?{' '}
          <NavLink to="/sign-up" className="text-primary font-montserrat cursor-pointer hover:underline">
            Sign up
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SignIn;
