import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GRADIENTS: Record<string, [string, string, ...string[]][]> = {
  sunny: [
    ['#A1C4FD', '#C2E9FB'],
    ['#89f7fe', '#66a6ff'],
    ['#56CCF2', '#2F80ED'],
  ],
  sunset: [
    ['#FF9A8B', '#FF6A88', '#FF99AC'],
    ['#FAD961', '#F76B1C'],
    ['#ee9ca7', '#ffdde1'],
  ],
  night: [
    ['#0F2027', '#203A43', '#2C5364'],
    ['#141E30', '#243B55'],
    ['#1e3c72', '#2a5298'],
  ],
  rainy: [
    ['#BBD2C5', '#536976', '#292E49'],
    ['#757F9A', '#D7DDE8'],
    ['#bdc3c7', '#2c3e50'],
  ],
  fresh: [
    ['#00C6FF', '#0072FF'],
    ['#43C6AC', '#F8FFAE'], // 0
    ['#c94b4b', '#4b134f'], // 1
    ['#a1ffce', '#faffd1'], // 2
    ['#96fbc4', '#f9f586'], // 3
    ['#7DE2FC', '#B9B6E5'], // 4
    ['#43e97b', '#38f9d7'], // 5
    ['#f6d365', '#fda085'], // 6
    ['#fdfbfb', '#ebedee'], // 7
    ['#c1dfc4', '#deecdd'], // 8
    ['#a8edea', '#fed6e3'], // 9
    ['#89f7fe', '#66a6ff'], // 10
    ['#6dd5ed', '#2193b0'], // 11
    ['#d4fc79', '#96e6a1'], // 12
    ['#a1c4fd', '#c2e9fb'], // 13
    ['#fbc2eb', '#a6c1ee'], // 14
    ['#84fab0', '#8fd3f4'], // 15
    ['#52c234', '#061700'], // 16
    ['#43e97b', '#38f9d7'], // 17
    ['#3fe4d6', '#8aeea3'], // 18
    ['#a8edea', '#fed6e3'], // 19
    ['#c3ec52', '#0ba29d'], // 20
    ['#b2fefa', '#0ed2f7'], // 21
    ['#c9ffbf', '#ffafbd'], // 22
  ],
};

function App() {
  // const [fontsLoaded] = useFonts({
  //   'Quicksand-Regular': require('./assets/fonts/Quicksand/Quicksand-Regular.ttf'),
  //   'RadioCanada-Bold': require('./assets/fonts/RadioCanada/RadioCanada-Bold.ttf'),
  //   'RadioCanada-Regular': require('./assets/fonts/RadioCanada/RadioCanada-Regular.ttf'),
  // })

  const [value, onChangeText] = useState('');

  const windowHeight = useWindowDimensions().height;

  const isDarkMode = useColorScheme() === 'dark';

  const gradient = GRADIENTS.fresh[5];

  const getWeather = (
    city?: string | null,
    // lat?: number | null,
    // lon?: number | null,
  ) => {
    console.log('🚀 >> getWeather >> city>>', city);

    // try {
    //   setLoading(true)
    //   weather(city, lat, lon).then((res: any) => {
    //     console.log('🚀 >> weather >> res>>', res.data)
    //     if (res.success === false) {
    //       setLoading(false)
    //       setFetchWeather(false)
    //       cityNotFoundAlert()
    //     } else {
    //       setLoading(false)
    //       setFetchWeather(true)
    //       setWeather(res.data)
    //     }
    //   })
    // } catch (e) {
    //   console.log('🚀 >> getWeather >> e>>', e)
    //   setLoading(false)
    // }
  };

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded])

  // if (!fontsLoaded) {
  //   return null
  // }

  return (
    <LinearGradient
      colors={gradient}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView
          style={{ flex: 1 }} // fill the parent
          contentContainerStyle={{ flex: 1 }} // fill available space inside
          enabled
          // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          // keyboardVerticalOffset={Platform.select({
          //   ios: 0,
          //   android: 0,
          // })}
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 250 }}
          >
            <Text>Hello</Text>
            <View
              style={{
                ...styles.container,
                paddingBottom: 20,
                minHeight: Math.round(windowHeight) - 80,
              }}
              // onLayout={onLayoutRootView}
            >
              <View style={styles.search}>
                <TextInput
                  keyboardType="default"
                  style={styles.textInput}
                  placeholder="Search city"
                  onSubmitEditing={() => getWeather(value)}
                  onChangeText={onChangeText}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    backgroundColor: '#eff3f9',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'RadioCanada-Regular',
    fontSize: 20,
  },
  search: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 47,
    paddingRight: 7,
    paddingLeft: 7,
  },
  card: {
    backgroundColor: '#eff3f9',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  currentTemp: {
    padding: 15,
  },
  weatherDescription: {
    padding: 5,
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'RadioCanada-Regular',
  },
  icon: { width: '25%', height: '25%' },
});

export default App;
