import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UsersScreen from "./screens/UsersScreen";

export default function App() {
    return (
        <SafeAreaProvider>
            <UsersScreen />
        </SafeAreaProvider>
    )
}