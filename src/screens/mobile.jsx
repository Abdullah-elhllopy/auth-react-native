import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, Dimensions, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme/theme';
import LabeledInput from '../components/LabeledInput';
const { height } = Dimensions.get('window');

export default function Mobile({ navigation }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const handleEmailValidation = () => {
        const isValidNumber = /^[0-9]+$/;
        if (!email) {
            setEmailError('Please enter Phone Number');
            return false;
        } else if (!isValidNumber.test(email)) {
            setEmailError('Please enter a valid Phone Number');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };

    const handleFormSubmit = () => {
        if (handleEmailValidation()) {
            navigation.navigate('Otp')
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ justifyContent: 'center', height: '100%', flex: 1 }}>
                    <View style={styles.banner}>
                        <Image source={require('../assets/otp.png')} />
                        <Text style={{ color: theme.colors.secondary, fontSize: 28, fontWeight: 700, lineHeight: 34, }}>OTP Verification </Text>
                        <Text style={{
                            fontSize: 16, fontWeight: 400, color: theme.colors.secondary,
                            textAlign: 'center', textAlignVertical: 'center', lineHeight: 24
                        }}>
                            We will send  you a one time password to your registered mobile number
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View>
                            <LabeledInput
                                label={''}
                                placeholder={'Enter your phone number'}
                                type={'phone-pad'}
                                onBlur={handleEmailValidation}
                                value={email}
                                onChangeText={setEmail}
                                onFocus={() => setEmailError('')}
                                error={emailError}
                            />
                            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                        </View>
                        <LinearGradient
                            colors={['#3AF9EF', '#3851FB', '#A22FF9']}
                            start={{ x: 0.1, y: 0.9 }}
                            end={{ x: 0.9, y: 0.1 }}
                            style={styles.buttonStyle}
                        >
                            <Pressable style={[theme.row, { justifyContent: 'center' }]} onPress={handleFormSubmit} >
                                <Text style={{ color: theme.colors.white, fontSize: 20 }}>Get OTP </Text>
                            </Pressable>
                        </LinearGradient>
                    </View>
                </View>
                {/* <StatusBar style="auto" translucent={true} /> */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background.default,
        justifyContent: 'center',

    },
    buttonContainer: {
        gap: 40,
        flexDirection: 'column',
        paddingHorizontal: 40,
        position: 'relative',
        width: '100%',
        marginTop: height * 0.1,
        justifyContent: 'center',
    },
    buttonStyle: {
        borderRadius: 25,
        padding: 20,
    },
  
    error: {
        color: 'red',
        marginTop: 5,
    },
    banner: {
        alignItems: 'center',
        marginTop: height * 0.1,
        gap: 25,
        paddingHorizontal: 40,
        justifyContent: 'center',
    }
});
