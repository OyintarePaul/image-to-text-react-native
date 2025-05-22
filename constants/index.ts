import { SettingsListItem } from "@/components/SettingsList";
import { AudioLines } from "lucide-react-native";

export const settings: SettingsListItem[] = [
    {
        label: "Voices",
        type: "link",
        href: "/settings/voices",
        Icon: AudioLines
    },
]