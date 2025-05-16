import { ActivityIndicator, Pressable, PressableProps } from "react-native";
import Text from "./Text";

interface ButtonProps extends PressableProps {
    title: string,
    isLoading?: boolean,
    iconLeft?: () => React.ReactNode
}

export default function Button({ title, style, iconLeft, isLoading, ...props}: ButtonProps) {
    let content;
    if (isLoading) {
        content = <ActivityIndicator animating={true} color="black"/>
    } else {
        content = (
            <>
            {iconLeft && iconLeft()}
            <Text style={{color: "black", fontWeight: "bold"}}>{title}</Text>
            </>
        )
    }

    return (
        <Pressable {...props} style={{
            backgroundColor: "white",
            borderRadius: 8,
            padding: 16,
            width: "100%",
            gap: 12,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: "center"
        }}>
            {content}
        </Pressable>
    )
}