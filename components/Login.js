import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from '../firebase'

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.facebookLogin = this.facebookLogin.bind(this);
    }

    buttonSize = 240;

    facebookLogin = () => {

        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
            (result) => {
                if (result.isCancelled) {
                    console.log('Login was cancelled');
                }

                AccessToken.getCurrentAccessToken().then(data => {
                    let credetial = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

                    firebase.auth().signInAndRetrieveDataWithCredential(credetial).then((userCredential) => {
                        Alert.alert('Alert Title', userCredential);
                    });
                });
            }
        );
        
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.headingText}>Chat App</Text>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    onLongPress={this.facebookLogin}
                    type='facebook'
                    style={{width:this.buttonSize}}
                />
                <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google'
                    style={{backgroundColor:"red", width:this.buttonSize}}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    headingText: {
        fontWeight: '500',
        fontSize: 18,
        color: 'rgb(38, 38, 38)',
        marginTop: 20,
        marginBottom: 12,
    },
})