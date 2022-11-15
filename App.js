import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sarabun-SemiBold': require('./assets/fonts/Sarabun/Sarabun-SemiBold.ttf'),
    'Sarabun-SemiBoldItalic': require('./assets/fonts/Sarabun/Sarabun-SemiBoldItalic.ttf'),
    'Sarabun-Light': require('./assets/fonts/Sarabun/Sarabun-Light.ttf'),
    'Sarabun-LightItalic': require('./assets/fonts/Sarabun/Sarabun-LightItalic.ttf')
  });

  return (
    <View style={styles.container}>
      <Text style={ styles.sarabunSemibold }>ชื่อเรื่อง ภาษาไทย Sarabun Font Face <Text style={ styles.sarabunSemiboldItalic }>ชื่อเรื่อง ภาษาไทย Sarabun Font Face</Text></Text>
      <Text style={ styles.sarabunLight }>ชั้นไม่รักดีย์ สินค้า ซ้อนท้าย สัญญา ราชภัฏ Open up App.js <Text style={ styles.sarabunLightItalic }>ชั้นไม่รักดีย์ Open up App.js!</Text> to start working on your app!</Text>
      <Text style={ styles.sarabunLight }>ชั้นไม่รักดีย์ สินค้า ซ้อนท้าย สัญญา ราชภัฏ Open up App.js <Text style={ styles.sarabunLightItalic }>ชั้นไม่รักดีย์ Open up App.js!</Text> to start working on your app!</Text>

      <Text style={ styles.sarabunSemibold }>ชื่อเรื่อง ภาษาไทย xxx Font Face <Text style={ styles.sarabunSemiboldItalic }>ชื่อเรื่อง ภาษาไทย xxx Font Face</Text></Text>
      <Text style={ styles.sarabunLight }>ชั้นไม่รักดีย์ สินค้า ซ้อนท้าย สัญญา ราชภัฏ Open up App.js <Text style={ styles.sarabunLightItalic }>ชั้นไม่รักดีย์ Open up App.js!</Text> to start working on your app!</Text>
      <Text style={ styles.sarabunLight }>ชั้นไม่รักดีย์ สินค้า ซ้อนท้าย สัญญา ราชภัฏ Open up App.js <Text style={ styles.sarabunLightItalic }>ชั้นไม่รักดีย์ Open up App.js!</Text> to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  sarabunSemibold: {
    fontFamily: 'Sarabun-SemiBold',
    fontSize: 19,
    lineHeight: '1.6',
  },
  sarabunSemiboldItalic: {
    fontFamily: 'Sarabun-SemiBoldItalic',
    fontSize: 19,
    lineHeight: '1.6',
  },
  sarabunLight: {
    fontFamily: 'Sarabun-Light',
    fontSize: 14,
    lineHeight: '1.6',
  },
  sarabunLightItalic: {
    fontFamily: 'Sarabun-LightItalic',
    fontSize: 14,
    lineHeight: '1.6',
  }
});
