import { View, FlatList, Pressable, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const items = [
    { id: "1", title: "Alpha", description: "First Item" },
    { id: "2", title: "Beta", description: "Second Item" },
    { id: "3", title: "Gamma", description: "Third Item" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("Details", { 
              itemId: item.id,
              itemTitle: item.title,
              itemDescription: item.description
            })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  description: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
});