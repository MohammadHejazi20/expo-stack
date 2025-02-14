import { router, useSegments } from 'expo-router';
import { useEffect } from 'react';
import create from 'zustand';

type User = {
  id: string;
  username: string;
};

type AuthState = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (username: string, password: string) => {
    console.log('login', username, password);
    set({ user: { id: '1', username } });
    return true;
  },
  logout: () => set({ user: null }),
}));

export function useProtectedRoute() {
  const segments = useSegments();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    console.log('inAuthGroup', inAuthGroup);

    if (!user && inAuthGroup) {
      console.log('replacing to login');
      router.replace('/(public)/login');
    } else if (user && !inAuthGroup) {
      console.log('replacing to tabs');
      router.replace('/(auth)/(tabs)');
    }
  }, [user, segments]);
}

export default useAuthStore;
