import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const loginFacebook = () => {
        console.warn('Facebook');
    };
    
    const loginGoogle = () => {
        console.warn('Google');
    };
    
    const loginApple = () => {
        console.warn('Apple');
    };
    return (
        <>
            <CustomButton text="Entrar com Facebook" onPress={loginFacebook} bgColor="#e7eaf4" fgColor="#4765A9" />
            <CustomButton text="Entrar com Google" onPress={loginGoogle} bgColor="#fae9ea" fgColor="#dd4d44"/>
            <CustomButton text="Entrar com Apple" onPress={loginApple} bgColor="#e3e3e3" fgColor="#363636"/>
        </>
    )
}

export default SocialSignInButtons
