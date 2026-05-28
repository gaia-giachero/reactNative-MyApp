import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

async function fetchTodos() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
    );
    if (!res.ok) throw new Error("Request failed");
    return res.json();
}

interface FlatListProps {
    id: string,
    completed: boolean,
    title: string,
}

export default function App() {
    const [todos, setTodos] = React.useState<FlatListProps[]>([]);
    const [status, setStatus] = React.useState("loading");

    function load() {
        setStatus("loading");
        fetchTodos()
            .then((data) => {
                setTodos(data);
                setStatus("success");
            })
            .catch(() => setStatus("error"));
    }

    React.useEffect(() => {
        load();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Todos</Text>
                    {status === "loading" && <Text>Loading…</Text>}
                    {status === "error" && (
                        <Pressable onPress={load} style={styles.button}>
                            <Text style={styles.buttonText}>Retry</Text>
                        </Pressable>
                    )}
                    {status === "success" && (
                        <FlatList
                            data={todos}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => (
                                <Text style={{ paddingVertical: 8 }}>
                                    {item.completed ? "✓" : "○"} {item.title}
                                </Text>
                            )}
                        />
                    )}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, gap: 12 },
    title: { fontSize: 20, fontWeight: "600" },
    button: {
        alignSelf: "flex-start",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#f0f0f0",
    },
    buttonText: { fontWeight: "600" },
});