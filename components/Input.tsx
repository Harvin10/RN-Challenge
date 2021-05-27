import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface props {
    placeholder: string;
    effect: (text: string) => void;
}

const Input:React.FC<props> = (props) => {
    return (
        <View>
            <TextInput 
                style={ styles.InputStyle }
                placeholder={ props.placeholder }
                onChangeText={ (text) => { props.effect(text) } }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    InputStyle: {
        backgroundColor: '#ffffff',
        height: '100%',
        fontSize: 20
    }
})

export default Input;