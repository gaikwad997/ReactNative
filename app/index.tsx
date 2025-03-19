import { StyleSheet, Text, View } from "react-native";
import Button from './Button'; // Import your Button component

export default function Page() {
  const handlePress = () => {
    alert('Button clicked!');
  };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Button title="Click Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});
