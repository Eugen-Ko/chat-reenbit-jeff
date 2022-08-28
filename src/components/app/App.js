import { Layout } from 'components/layout';
// import { GoogleLogin } from 'react-google-login';

export const App = () => {
  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <div>
      {/* <GoogleLogin
        clientId="369594613853-tpig71mogmi55enb0gd93rv26gctho60.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      /> */}
      <Layout />
    </div>
  );
};
