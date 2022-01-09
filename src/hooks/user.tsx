import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ASYNC_STORAGE_APP_PREFIX } from '../utils/constants/async-storage';

export interface User {
  name: string;
  birthDate: Date;
  profession?: string;
  biography?: string;
}

interface UserContextData {
  user: User;
  saveUser(user: User): Promise<void>;
  updateUser(user: User): Promise<void>;
  removeUser(): Promise<void>;
  loadingUser: boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [loadingUser, setLoadingUser] = useState(true);

  const saveUser = useCallback(async (userToSave: User) => {
    await AsyncStorage.setItem(
      `${ASYNC_STORAGE_APP_PREFIX}:user`,
      JSON.stringify(userToSave),
    );

    setUser(userToSave);
  }, []);

  const removeUser = useCallback(async () => {
    await AsyncStorage.removeItem(`${ASYNC_STORAGE_APP_PREFIX}:user`);

    setUser({} as User);
  }, []);

  const updateUser = useCallback(async (userToUpdate: User) => {
    await AsyncStorage.setItem(
      `${ASYNC_STORAGE_APP_PREFIX}:user`,
      JSON.stringify(userToUpdate),
    );

    setUser(userToUpdate);
  }, []);

  const providerValue = useMemo(
    () => ({ user, saveUser, updateUser, removeUser, loadingUser }),
    [user, saveUser, updateUser, removeUser, loadingUser],
  );

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const storagedUser = await AsyncStorage.getItem(
        `${ASYNC_STORAGE_APP_PREFIX}:user`,
      );

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }

      setLoadingUser(false);
    }

    loadStoragedData();
  }, []);

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
