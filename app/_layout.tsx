import SelectedAssetProvider from "@/contexts/selected-asset";
import { DarkTheme, ThemeProvider, useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
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
