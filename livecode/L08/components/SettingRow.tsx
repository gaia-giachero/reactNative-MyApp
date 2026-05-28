import { Text, View } from "react-native";

interface SettingRowProps {
  label: string;
  value: string;
  right: React.ReactNode;
}

export default function SettingRow({ label, value, right }: SettingRowProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "600" }}>{label}</Text>
        <Text>{value}</Text>
      </View>
      <View>{right}</View>
    </View>
  );
}