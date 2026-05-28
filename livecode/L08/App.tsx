import React from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Switch,
  Text,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SettingRow from "./components/SettingRow";

export default function App() {
  const [name, setName] = React.useState("");
  const [isEnabled, setIsEnabled] = React.useState(false);

  const nameValidation = name.length > 0 && name.length < 3;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <SettingRow
            label="Name"
            value="Show to other users"
            right={
              <TextInput
                style={[
                  nameValidation && {
                    color: "red",
                    fontWeight: "bold",
                  },
                  styles.row,
                ]}
                value={name}
                onChangeText={setName}
                placeholder="Type Name"
              />
            }
          />

          {nameValidation && (
            <Text style={styles.textError}>Name is too short</Text>
          )}

          <SettingRow
            label="Notification"
            value="You can change later"
            right={
              <Switch
                trackColor={{ false: "#767577", true: "#2600af" }}
                thumbColor={isEnabled ? "#d9cfff" : "#f4f3f4"}
                onValueChange={setIsEnabled}
                value={isEnabled}
              />
            }
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  row: {
    width: 150,
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 40,
    paddingLeft: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#2600af",
  },
  container: {
    marginRight: 15,
    marginLeft: 15,
  },
  textError: {
    color: "red",
    fontWeight: "bold",
  },
});
