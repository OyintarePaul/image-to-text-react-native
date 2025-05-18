import Text from "@/components/Text";
import { useRequest } from "ahooks";
import { Image } from "expo-image";
import * as Speech from "expo-speech";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "@/components/Button";
import { useSelectedAsset } from "@/contexts/selected-asset";
import {
  convertImageToText,
  ImageToTextApiResponse,
} from "@/utils/image-to-text";
import { useEffect, useState } from "react";

export default function ConvertScreen() {
  const { asset } = useSelectedAsset();
  const [response, setResponse] = useState<ImageToTextApiResponse>();
  const [errorMessage, setErrorMessage] = useState("");
  const { run, loading } = useRequest(convertImageToText, {
    manual: true,
    onSuccess(data) {
      setResponse(data);
    },
    onError(e) {
      setErrorMessage("Unable to detect the text in this image");
    },
  });

  useEffect(() => {
    function stopSpeech() {
      Speech.stop();
    }
    return () => stopSpeech();
  });

  const handleConvert = () => {
    if (!asset) return;
    run({
      name: asset.fileName,
      uri: asset.uri,
      type: asset.mimeType as string,
    });
  }

  const speakText = async () => {
    const isSpeaking = await Speech.isSpeakingAsync();
    if (!isSpeaking && response?.annotations) Speech.speak(response.annotations.join(" "));
  }

  return (
    <View>

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={{ uri: asset?.uri }}
          style={styles.image}
          contentFit="contain"
        />
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        {response?.all_text && (
          <Text style={styles.text}>{response.all_text}</Text>
        )}
      </View>
      
    </ScrollView>
    <View style={styles.footer}>
        {response?.all_text ? (
          <Button
            title="Read out loud"
            onPress={speakText}
          />
        ) : (
          <Button
            title="Convert Text"
            disabled={loading}
            onPress={handleConvert}
            isLoading={loading}
          />
        )}
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,    
    paddingHorizontal: 16,
    minHeight: "100%"
  },
  wrapper: {
    gap: 16,
  },

  image: {
    height: 350,
    width: "100%",
  },
  text: {
    fontSize: 18,
  },
  error: {
    color: "red",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
