import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { Camera, Images, Speech } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/Button";
import Text from "@/components/Text";
import { useSelectedAsset } from "@/contexts/selected-asset";
import { useCallback } from "react";

export default function HomeScreen() {
  const { setAsset} = useSelectedAsset()
  const router = useRouter()

  const pickImage = async (source?: "camera") => {
    let result;
    const options: ImagePicker.ImagePickerOptions = {
      allowsEditing: true
    }
    if (source == "camera") {
      result = await ImagePicker.launchCameraAsync(options);
    } else {
      result = await ImagePicker.launchImageLibraryAsync(options);
    }
    
    if (!result.canceled) {
        setAsset(result.assets[0])
        router.navigate("/convert")
    }
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.icon}>
          <Speech color="white" size={120}/>
        </View>
        <Text style={styles.title}>Read Aloud</Text>
        <Text style={styles.subtitle}>Take a picture and let's read the text in it</Text>
      </View>
      <View style={styles.footer}>
        <Button title="Open Camera" onPress={() => pickImage("camera")} iconLeft={() => <Camera />}/>
        <Button title="Choose from Media" onPress={() => pickImage()} iconLeft={() => <Images />} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  header: {
    marginTop: 80
  },
  icon: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    textAlign: "center",
    color: "grey"
  },
  footer: {
    marginBottom: 40,
    gap: 12
  }
})