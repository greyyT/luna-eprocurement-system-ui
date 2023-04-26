import Input from '~/components/Input';
import { useCallback, useEffect, useState } from 'react';
import handleInput from '~/utils/validator';
import handleSignUp from '~/utils/handleSignUp';
import handleLogin from '~/utils/handleLogin';

function Auth({ setToken }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({
    email: '',
    name: '',
    password: '',
  });

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVarriant) => (currentVarriant === 'login' ? 'signup' : 'login'));
    setError({
      email: '',
      name: '',
      password: '',
    });
  }, []);

  useEffect(() => {
    setError({
      email: '',
      name: '',
      password: '',
    });
  }, [email, name, password]);

  const handleSubmit = async () => {
    // Pretreatment: check email username and password is valid
    const emailError = handleInput(email, 'required', 'email');
    const passwordError = handleInput(password, 'required', 'password');
    const nameError = handleInput(name, 'required', 'username');

    setError({ email: emailError, name: nameError, password: passwordError });

    // Log in case: only check email and password pass the pretreatment
    if (variant === 'login' && emailError === undefined && passwordError === undefined) {
      // Go to handle login to check on call api
      const token = await handleLogin(email, password);

      setToken(token);

      // Sign up case: check email, username and password pass the pretreatment
    } else if (
      variant === 'signup' &&
      emailError === undefined &&
      nameError === undefined &&
      passwordError === undefined
    ) {
      // Go to handle sign up to check on call api
      const value = await handleSignUp(email, name, password);

      console.log('runed!');

      if (typeof value === 'object') {
        const token = await handleLogin(email, password);
        setToken(token);
      }
    }
  };

  return (
    <div className="bg-[#F8F8F8] h-screen w-screen flex justify-center items-center">
      <div className="w-[1170px] h-[550px] flex">
        <div className="flex-1 bg-white">
          <div className=" mx-[93px] h-full flex flex-col justify-center">
            <h1 className="font-bold font-inter text-3xl ">{variant === 'login' ? 'Sign in' : 'Sign up'}</h1>
            <div className="flex flex-col gap-4 mt-10">
              <Input
                label="Email"
                onChange={(ev) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
                error={error.email}
              />
              {variant === 'signup' && (
                <Input
                  label="Username"
                  onChange={(ev) => setName(ev.target.value)}
                  id="name"
                  type="text"
                  value={name}
                  error={error.name}
                />
              )}
              <Input
                label="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
                error={error.password}
              />
              <button className="h-12 bg-primary text-white font-inter rounded-md" onClick={handleSubmit}>
                {variant === 'login' ? 'Sign in' : 'Sign up'}
              </button>
            </div>
            <div className="flex justify-between text-zinc-400 font-inter mt-4 text-sm">
              {variant === 'login' && (
                <p className="cursor-pointer hover:underline hover:text-primary">Forget password</p>
              )}
              <p className="">
                {variant === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <span onClick={toggleVariant} className="text-primary font-montserrat cursor-pointer hover:underline">
                  {variant === 'login' ? 'Sign up' : 'Sign in'}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="flex-1 bg-center bg-cover relative" style={{ backgroundImage: `url("./images/auth-bg.jpg")` }}>
          <h1 className="font-inter text-white font-bold text-3xl w-[300px] absolute bottom-16 left-14">
            Welcome to <br></br> Lunar eProcurement System
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Auth;
