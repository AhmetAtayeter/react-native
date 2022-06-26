import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

const Login = () => {

    return (
        <View style = {style.view1}>
            <TouchableOpacity style= {style.btn1} onPress={() => alert("tık")}>
                <Text style= {style.text1}>Facebook ile Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {style.btn2} onPress={() => alert("tık")}>
                <Text style= {style.text1}>Apple ile Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    )

}

const style = StyleSheet.create({
    view1: {
        backgroundColor: "#464646",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    btn1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#3A5BAA",
        borderRadius: 5,
        width: '90%',
        height: '6%',
        marginBottom: 10
    },
    btn2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black",
        borderRadius: 5,
        width: '90%',
        height: '6%',
        marginBottom: 10
    },
    text1: {
        color: "white"
    }
    // view1: {
    //     disp
    //     background-color:"#464646" ;
    //     justify-content: center;
    //     align-items: center;
    //     align-content: center;
    //     z-index: 1;
    //     flex: 1
    //   };
})

export default Login;