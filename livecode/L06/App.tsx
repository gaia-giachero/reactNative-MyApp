import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

async function fetchTodos() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
    );
    if (!res.ok) throw new Error("Request failed");

    console.log("API is called");

    return res.json();
}

export default function App() {
    interface Todo {
        id: number;
        title: string;
        completed: boolean;
        userId: number;
    }

    const [status, setStatus] = React.useState('loading');
    const [todos, setTodos] = React.useState<Todo[]>([]);


    function load() {
        console.log('before fetch');
        setStatus('loading');
        fetchTodos()
            .then((data) => {
                setStatus('success');
                setTodos(data);
            })
            .catch((e) => setStatus('error'))
    }

    React.useEffect(() => {
        load();
    }, []);

    function pressButton() {
        console.log('cliccato!');
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>TODOS</Text>

                    {status === 'loading' && <Text style={styles.text}>Loading...</Text>}
                    {status === 'success' &&
                        (
                            <FlatList
                                data={todos}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.row}>
                                        <View style={styles.square} />
                                        <Text style={styles.list}>{item.title}</Text>
                                    </View>
                                )}
                            />
                        )
                    }

                    {status === 'error' && (
                        <Pressable style={styles.button} onPress={pressButton}>
                            <Text style={styles.text}>Retry</Text>
                        </Pressable>
                    )
                    }
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        padding: 10,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: '#27187e',
        backgroundColor: '#f7f7ff',
        // ✅ per iOS
        shadowColor: '#a2a2a2',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        // ✅ per Android (aggiuntivo)
        elevation: 5,
        margin: 30,
    },
    title: {
        color: '#27187e',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    text: {
        color: '#27187e',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 30,
        marginRight: 30,
        marginVertical: 7,
    },
    square: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderColor: '#27187e',
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    list: {
        color: '#000',
        flex: 1,
    },
});