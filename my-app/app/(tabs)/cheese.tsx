import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>This is my "🧀🐭" page </Text>
      <Link href="/home">Home</Link>
    </View>
  )
}
