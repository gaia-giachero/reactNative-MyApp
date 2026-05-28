import React from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

let notes: { id: string; text: string }[] = [];
function addMessage(text: string) {
    notes = [{ id: String(Date.now()), text }, ...notes];
    console.log('add message', notes);
}

export default function App() {
    const [text, setText] = React.useState('');
    const [status, setStatus] = React.useState('empty');
    const [, refresh] = React.useState(0);

    React.useEffect(() => {
        load();
    }, []);

    function load() {
        setStatus('loading');
        setTimeout(() => {
            setStatus(notes.length ? "success" : "empty");
            refresh((n) => n + 1);
        }, 300);

        console.log('loaded');
    }

    function onAdd() {
        const textTrimmed = text.trim();
        if (!textTrimmed) return;
        console.log('BEFORE LOADING STATUS');

        addMessage(textTrimmed);
        setText('');

        load();
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.background}>
                    <Text style={styles.title}>Notes</Text>
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="Write a note"
                        style={styles.row}
                    />

                    <Pressable style={styles.button} onPress={onAdd}>
                        <Text style={styles.text}>Add</Text>
                    </Pressable>

                    {status === 'loading' && <Text style={styles.text}>Caricamento...</Text>}
                    {status === 'empty' && <Text style={styles.text}>Ancora niente qui...</Text>}
                    {status === 'success' && notes.map((n) => <Text key={n.id}>• {n.text}</Text>)}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    row: {
        width: "100%",
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 80,
        paddingLeft: 80,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#af0057',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd8eb',
    },
    background: {
        width: "90%",
        marginRight: "10%",
        marginLeft: "10%",
        backgroundColor: '#ffffff79',
        padding: 50,
        borderRadius: 25,
    },
    button: {
        padding: 10,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: '#af0057',
        backgroundColor: '#ffcce5',
        boxShadow: '0px 0px 10px #a2a2a2',
        margin: 30,
    },
    title: {
        color: '#af0057',
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    text: {
        color: '#af0057',
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center',
    },
    list: {
        gap: 8,
    }
});