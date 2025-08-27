import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">First App Created</ThemedText>
      <ThemedText>
        Welcome to your first ProDev mobile app 🚀
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
