import { useFonts } from 'expo-font';
import { LexendDeca_400Regular } from '@expo-google-fonts/lexend-deca/400Regular';
import { LexendDeca_700Bold } from '@expo-google-fonts/lexend-deca/700Bold';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import SelectedAssetProvider from "@/contexts/selected-asset";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const [loaded, error] = useFonts({
    LexendDeca_400Regular,  
    LexendDeca_700Bold, 
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <SelectedAssetProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="convert"
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "black",
              },
            }}
          />
        </Stack>
        <StatusBar style="light" translucent={false} backgroundColor="black" />
      </SelectedAssetProvider>
    </ThemeProvider>
  );
}
