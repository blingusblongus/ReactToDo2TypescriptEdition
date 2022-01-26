import React from 'react';
import { StyleSheet, 
    View,
    Text, 
} from 'react-native';

const Header = () => {
    return <View>
        <Text style={styles.title}>To Do 2: The Typescriptening</Text>
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        padding: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#d1feff',
    }
})

export default Header;
