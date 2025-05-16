import * as ImagePicker from "expo-image-picker";
import { createContext, useContext, useState } from "react";

interface SelectedAssetContextType {
    asset: ImagePicker.ImagePickerAsset | null,
    setAsset: (asset: ImagePicker.ImagePickerAsset) => void
}

const SelectedAssetContext = createContext<SelectedAssetContextType | undefined>(undefined);

export default function SelectedAssetProvider({ children }: { children: React.ReactNode }) {
    const [asset, setAsset] = useState<ImagePicker.ImagePickerAsset | null>(null)
    return (
        <SelectedAssetContext value={{
            asset,
            setAsset: (asset: ImagePicker.ImagePickerAsset) => setAsset(asset)
        }}>
            {children}
        </SelectedAssetContext>
    )
}

export function useSelectedAsset() {
    const context = useContext(SelectedAssetContext)
    if (!context) throw new Error("Wrap your app with the SelectedAssetContext")
    return context;
}