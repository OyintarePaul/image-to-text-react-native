import { useSettings } from "@/contexts/settings";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-radio-buttons-group";

import Text from "@/components/Text";

export default function VoicesScreen() {
  const { settings, updateSettings } = useSettings();
  const [voices, setVoices] = useState<Speech.Voice[]>([]);

  const handleVoiceSelect = (voice: Speech.Voice) => {
    updateSettings({ voice });
  };

  useEffect(() => {
    const fetchVoices = async () => {
      const voices = await Speech.getAvailableVoicesAsync();
      setVoices(voices);
    };
    fetchVoices();
  }, []);
  
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={voices}
      keyExtractor={(item) => item.identifier}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.listItem}
          activeOpacity={0.7}
          onPress={() => handleVoiceSelect(item)}
        >
          <View style={styles.left}>
            <Text>{item.name}</Text>
          </View>
          <RadioButton
            id={item.identifier}
            size={20}
            selected={settings.voice.identifier == item.identifier}
            borderColor="white"
            color="white"
          />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 24,
    minHeight: "100%",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 16,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 4,
  },
});
