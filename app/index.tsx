import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import LoginCard from '~/components/LoginCard';
import { ScreenContent } from '~/components/ScreenContent';
import MyComponent from '~/components/my-component';
import { useStore } from '~/store/store';

export default function Home() {
  const { bears, increasePopulation } = useStore();
  console.log('bears', bears);
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      {/* <View style={{ flex: 1 }}>
        <LoginCard />
      </View> */}
      <Container>
        <LoginCard
          dom={{
            scrollEnabled: false,
          }}
        />
        {/* <MyComponent
          name="Momo"
          dom={{
            scrollEnabled: false,
          }}
          bearsCount={bears}
          addBears={increasePopulation}
        />
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/details', params: { name: 'Mo' } }} asChild>
          <Button title="Show Details" />
        </Link>
        <Button title="increase bears" onPress={increasePopulation} /> */}
      </Container>
    </>
  );
}
