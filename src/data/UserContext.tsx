import React, { createContext, useState } from 'react';

type UserType = {
  authenticated: boolean;
};

export const UserContext = createContext<any | null>(null);

const UserContextProvider = (props: any) => {
  const [user, setUser] = useState<UserType>({ authenticated: false });
  return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
