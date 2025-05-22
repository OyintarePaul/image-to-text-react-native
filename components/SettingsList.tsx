import { Link } from "expo-router";
import { ChevronRight, LucideIcon } from "lucide-react-native";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RadioButton } from "react-native-radio-buttons-group";
import Text from "./Text";

export interface SettingsListItem {
  label: string;
  Icon?: LucideIcon;
  href?: string;
  onPress?: () => void;
  type: "link" | "radio";
}

export default function SettingsList({
  data,
  onPress,
}: {
  data: SettingsListItem[];
  onPress?: (data: any) => void;
}) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => <SettingsListItem item={item} />}
    />
  );
}

export function SettingsListItem({ item }: { item: SettingsListItem }) {
  const content = ({ label, Icon, type }: SettingsListItem) => {
    return (
      <TouchableOpacity style={styles.listItem} activeOpacity={0.7} onPress={item.onPress}>
        <View style={styles.left}>
          {Icon && <Icon color="white" />}
          <Text>{label}</Text>
        </View>
        <>
          {type == "link" && <ChevronRight color="#9a9a9a" />}
          {type == "radio" && <RadioButton id={label} size={18} />}
        </>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {item.href ? (
        <Link href={item.href} asChild>
          {content(item)}
        </Link>
      ) : (
        <>{content(item)}</>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 24,
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
