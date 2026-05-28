import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const [status, setStatus] = React.useState('ready')

    React.useEffect(() => {
        console.log('APP MOUNTED')
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.background}>
                    <Text style={styles.title}>Workflow check</Text>
                    <Text style={styles.text}>STATUS: {status}</Text>
                    <Pressable onPress={() => setStatus('button pressed')} style={styles.button}>
                        <Text style={styles.text}>TEST INTEGRATION</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#0095af',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bfebff',
    },
    background: {
        backgroundColor: '#ffffff79',
        padding: 50,
        borderRadius: 25,
    },
    button: {
        padding: 15,
        borderWidth: 2.5,
        borderRadius: 40,
        borderColor: '#0095af',
        backgroundColor: '#92e5fa',
        boxShadow: '0px 0px 10px #a2a2a2',
        margin: 20,
    },
    title: {
        color: '#0095af',
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    text: {
        color: '#0095af',
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center',
    },
    list: {
        gap: 8,
    }
});