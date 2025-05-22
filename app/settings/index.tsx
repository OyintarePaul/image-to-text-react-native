import Text from "@/components/Text";
import { settings } from "@/constants";
import { Link } from "expo-router";
import { ChevronRight, LucideIcon } from "lucide-react-native";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

interface SettingsListItem {
  label: string;
  Icon: LucideIcon;
  href: string;
}

export default function SettingsScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={settings}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => <SettingsListItem item={item} />}
    />
  );
}

function SettingsListItem({ item }: { item: SettingsListItem }) {
  return (
    <Link href={item.href as any} asChild>
      <TouchableOpacity style={styles.listItem} activeOpacity={0.7}>
        <View style={styles.left}>
          <item.Icon color="white" />
          <Text>{item.label}</Text>
        </View>
        <ChevronRight color="#9a9a9a" />
      </TouchableOpacity>
    </Link>
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
