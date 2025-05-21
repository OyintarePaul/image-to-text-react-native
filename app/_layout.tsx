import { TouchableOpacity } from "react-native";
import { Settings } from "lucide-react-native";
import { LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca/400Regular";
import { LexendDeca_700Bold } from "@expo-google-fonts/lexend-deca/700Bold";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

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
        <Stack screenOptions={{
          headerStyle: {
            backgroundColor: "black"
          }
        }}>
          <Stack.Screen
            name="index"
            options={{
              title: "",
              headerRight: () => (
                <Link href="/settings" asChild>
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Settings color="white" />
                  </TouchableOpacity>
                </Link>
              ),
            }}
          />
          <Stack.Screen
            name="convert"
            options={{
              title: "",
            }}
          />
          <Stack.Screen 
            name="settings"
            options={{
              title: "Settings"
            }}
          />
        </Stack>
        <StatusBar style="light" translucent={false} backgroundColor="black" />
      </SelectedAssetProvider>
    </ThemeProvider>
  );
}
