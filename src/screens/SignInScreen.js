import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const SignInScreen = ( ) => {
    return (
        <signInScreenView>
            <Image source={require('../../assets/main.png')} style={styles.image} />

            <View style={styles.signInTextContainer}>
                <Text style= {styles.signInText}>GREENDAN</Text>
            </View>

            <CustomInput
                value={username}
                setValue={setUsername}
                placeholder="Username"
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <CustomButton
                onPress={onSignInPressed}
                text="Sign In"
            />
            
            <View style={styles.otherButtonContainer}>
                <Pressable onPress={onForgotPasswordPressed}>
                    <Text style={styles.otherButtonText}>비밀번호 찾기  </Text>
                </Pressable>
                    <Text style={styles.otherButtonText}>|</Text>
                    <Pressable onPress={onSignInPressed}>
                    <Text style={styles.otherButtonText}>  회원가입</Text>
                </Pressable>
            </View>

            <Pressable onPress={onSocialPreesed}>
                <Image 
                    style={styles.image} 
                    source={require('../../assets/kakao.png')}
                />
            </Pressable>
        </signInScreenView>
    );
};

const onSignInPressed = () => {
	console.warn("onSignInPressed");
};

const onSocialPreesed = () => {
	console.warn("onSocialPressed");
};

const styles = StyleSheet.create({
	signInTextContainer: {
        marginTop: '23%',
        marginLeft: '9%'
    },
    signInText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#FFFFFF',
        lineHeight: 29.3,
    },
    signInTextS: {
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 50,
        color: '#EEEEEE'
    },
    otherButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    otherButtonText: {
        fontWeight: '500',
        fontSize: 12,
        color: '#EEEEEE'
    }
})
export default SignInScreen;