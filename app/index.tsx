import { Link, Redirect } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Home(){
    return (
        <Redirect href={"/(tabs)"}/>
       
    )
}