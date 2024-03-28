import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Página sobre</Text>
      <Image style= {styles.imagem}
      source={require('../../assets/praia.jpg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

