import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

let countRow = 0;


function Row({ title } : {title: string}){
    countRow += 1;
    console.log(`Row render ${countRow}`)

    return(
        <View style={styles.row}>
            <Text>{title}</Text>
        </View>
    )
}

const ITEMS = Array.from({ length: 10 }, (_, i) => ({ 
    id: String(i + 1), 
    title: `ITEM ${i + 1}`
}));

let countApp = 0;

export default function App() {
    countApp += 1;
    const [count, setCount] = React.useState(0);
    console.log(`App render #${countApp}`);

    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text style={styles.title}>Re-render + Flatlist</Text>
                    <Text style={styles.text}>Count: {count}</Text>
                    <Pressable onPress={() => setCount(count+1)}>
                        <Text style={styles.increment}>Re-render</Text>
                    </Pressable>
                    <FlatList
                        data={ITEMS}
                        // keyExtractor={(item: Item) => item.id}
                        renderItem={({item}) => <Row title={item.title} />}
                        contentContainerStyle={styles.list}
                    />

                    <Text style={styles.text}>Count: {count}</Text>
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
        borderColor: '#005539',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6fde7',
    },
    increment: {
        padding: 15,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: '#005539',
        backgroundColor: '#75b992',
        boxShadow: '0px 0px 10px #a2a2a2',
        margin: 20,
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
    },
    title: {
        color: '#005539',
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 10,
        marginTop: 10,
    },
    text: {
        color: '#005539',
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center',
    },
    list: {
        gap: 8,
    }
});