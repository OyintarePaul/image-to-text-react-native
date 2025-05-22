import Text from "@/components/Text";
import { settings } from "@/constants";
import { Link } from "expo-router";
import { ChevronRight, LucideIcon } from "lucide-react-native";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

export interface SettingsListItem {
  label: string;
  Icon?: LucideIcon;
  href?: string;
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
  const content = ({ label, Icon }: SettingsListItem) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        activeOpacity={0.7}
      >
        <View style={styles.left}>
          {Icon && <Icon color="white" />}
          <Text>{label}</Text>
        </View>
        <ChevronRight color="#9a9a9a" />
      </TouchableOpacity>
    );
  };
  return (
    <>
      {item.href ? (
        <Link href={item.href as any} asChild>
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
