import { Stack } from 'expo-router';

import { useProtectedRoute } from '~/store/useAuth';
import '../global.css';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/login',
};

export default function RootLayout() {
  useProtectedRoute();
  return (
    <Stack>
      <Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
      <Stack.Screen name="(public)/login" options={{ headerShown: false }} />
    </Stack>
  );
}
