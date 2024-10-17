import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home(){
    return (
        <View>
            <Link href="/aboutUs">Richard</Link>
        </View>
    )
}