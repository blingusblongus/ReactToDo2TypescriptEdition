import React from 'react';
import { StyleSheet, 
    View,
    Text, 
} from 'react-native';

const Header: React.FC = () => {
    return <View>
        <Text style={styles.title}>To Do 2: {'\n'} The Typescriptening</Text>
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginTop: 40,
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        // backgroundColor: '#d1feff',
    }
})

export default Header;
