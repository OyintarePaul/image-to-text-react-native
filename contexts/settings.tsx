import * as Speech from "expo-speech";
import { createContext, useCallback, useContext, useState } from "react";

interface Settings {
  voice: Speech.Voice;
}

interface SettingsContextTypes {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const SettingsContext = createContext<SettingsContextTypes>(
  {} as SettingsContextTypes
);

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<Settings>({
    voice: {
      identifier: "es-us-x-sfb-local",
      language: "es-US",
      name: "es-us-x-sfb-local",
      quality: Speech.VoiceQuality.Enhanced,
    },
  });

  const updateSettings = useCallback((newSettings: Partial<Settings>) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...newSettings,
    }));
  }, []);
  return (
    <SettingsContext value={{ updateSettings, settings }}>
      {children}
    </SettingsContext>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
