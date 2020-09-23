interface Response{
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export  function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jasdhashdkasjd',
        user: {
          name: 'Anderson',
          email: 'andersonApp@gmail.com',
        },
      });
    }, 2000);
  });
}
