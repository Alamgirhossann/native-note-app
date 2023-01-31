import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { colors } from "./src/Theme/colors";
import { spacing } from "./src/Theme/spacing";
import { useFonts } from "expo-font"; 
import Text from "./src/Components/text/text";

export default function App() {
  const [loaded] = useFonts({
    "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf"),
    "KdamThmorPro-Regular": require("./assets/fonts/KdamThmorPro-Regular.ttf"),
  });

  if (!loaded) {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text preset="h1" style={{ color: "blue", fontWeight: "bold" }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.hello}>hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  hello: {
    paddingTop: spacing[0],
  },
});
