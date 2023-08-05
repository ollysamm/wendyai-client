import React from 'react';
import backgroundImage from '../assets/img/login-bg.jpg';
import { useAuth0, Auth0ProviderOptions } from '@auth0/auth0-react';
import { Logo } from '../components/logo';
import MicrosoftIcon from '../assets/icons/microsoft.png';
import { FcGoogle } from 'react-icons/fc';
import '../index.css'


function Login() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };


  return (
    <div className='h-screen w-screen flex items-center justify-center' style={divStyle}>
      <div className='bg-white p-8 rounded-lg'>
        <div className='flex justify-center'>
          <Logo />
        </div>

        <div>
          <button
            className='flex items-center cursor-pointer border border-hol-grey-light rounded-md p-2 pl-4 pr-8 mb-4'
            onClick={() => handleLogin()}
          >
            <div>
              <span className='ml-4 text-lg'>
                <b>Sign in with SSO</b>            
              </span>
            </div>

          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
