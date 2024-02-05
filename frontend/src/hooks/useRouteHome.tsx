import { useEffect } from 'react';
import { useRouter } from 'next/router';

function UseRouteHome() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the "/home" route when accessing the root "/"
    router.push('/home');
  }, []); 

  return;
};

export default UseRouteHome;





