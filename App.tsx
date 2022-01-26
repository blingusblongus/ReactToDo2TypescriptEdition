/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { transform } from '@babel/core';
import React, { useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  ShadowPropTypesIOS,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [todo, setTodo] = useState<string>('');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Header></Header>
          <View style={{flexDirection: 'column', justifyContent: 'center',}}>
          <TextInput
            style={styles.input}
            onChangeText={setTodo}
            value={todo}
            placeholder='Task Goes Here'
          />
          <Pressable style={[styles.addBtn, {
            transform: [{
              translateY: 0,
            }]
          }]}>
            <View style={styles.circleBtn}>
            <Text style={styles.btnText}>ADD</Text>
            </View>
            
          </Pressable>
        </View>
          </View>
          
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 20,
    margin: 20,
    borderRadius: 50,
    position: 'relative'
  },
  addBtn: {
    margin: 'auto',
    position: 'absolute',
    right: 30,
  },
  circleBtn: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',

  }
});

export default App;

// const Section: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };