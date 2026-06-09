import { Text, Pressable, View, StyleSheet } from "react-native";

export default function DetailsScreen({ route, navigation }: any) {
  const itemId = route.params?.itemId;
  const itemTitle = route.params?.itemTitle;
  const itemDescription = route.params?.itemDescription;

  if (!itemId || typeof itemId !== "string") {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Invalid route param</Text>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Torna alla Home</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.idText}>ID: {itemId}</Text>
        <Text style={styles.titleText}>{itemTitle || "No Title"}</Text>
        <Text style={styles.descriptionText}>{itemDescription || "No Description"}</Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Torna alla Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  idText: {
    fontSize: 14,
    color: "#999999",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#555555",
  },
  button: {
    backgroundColor: "#007aff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  error: {
    fontSize: 16,
    color: "red",
    marginBottom: 20,
  },
});