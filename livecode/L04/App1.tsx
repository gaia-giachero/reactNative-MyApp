import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export default function App() {
    const [text, setText] = React.useState("");
    const [status, setStatus] = React.useState("empty");
    const [, refresh] = React.useState(0);

    
    React.useEffect(() => {
        load();
    }, []);
    
    function load() {
        setTimeout(() => {
            setStatus("loading");
            refresh((n) => n + 1);
        }, 6000 );
        console.log("loaded")
    }

    function onAdd() {
        const textTrimmed = text.trim();

        setText(textTrimmed);
        console.log("clicked!!")

        load();
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Notes</Text>
                    <TextInput
                    placeholder="Write a note"
                    style={styles.input}
                    />

                    <Pressable style={styles.button} onPress={onAdd}>
                        <Text>Add</Text>
                    </Pressable>

                    {status === "loading" && <Text>Caricamento...</Text>}
                    {status === "empty" && <Text>Ancora niente qui...</Text>}
                </View>



            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1 , padding: 18, gap: 12},
    title: {gap: 12},
    input: {borderWidth: 1, padding : 12, borderRadius: 9},
    button: {
        alignSelf: "flex-start",
        backgroundColor:"#aadd41",
         padding : 12,
         borderRadius: 9
    },
})