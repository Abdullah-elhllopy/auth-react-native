import { useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, Dimensions, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme/theme';
import LabeledInput from '../components/LabeledInput';
const { height } = Dimensions.get('window');

export default function Otp({ navigation }) {
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
            alert('Form submitted successfully!');
            // do something with the form data
        }
    };
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);

    const handleInputChange = (text, ref) => {
        if (text.length === 1) {
            ref.current.focus();
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
                            Enter the OTP sent to <Text style={{ fontWeight: 'bold' }} >+234 706 067 2335</Text>
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                maxLength={1}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange(text, input2)}
                                ref={input1}
                            />
                            <TextInput
                                style={styles.input}
                                maxLength={1}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange(text, input3)}
                                ref={input2}
                            />
                            <TextInput
                                style={styles.input}
                                maxLength={1}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange(text, input4)}
                                ref={input3}
                            />
                            <TextInput
                                style={styles.input}
                                maxLength={1}
                                keyboardType="numeric"
                                ref={input4}
                            />
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Text>
                                Didn’t you receive the OTP?
                            </Text>
                            <Pressable>
                                <Text style={{ color: theme.colors.primary , fontSize: 16}} > Resend OTP</Text>
                            </Pressable>
                        </View>
                        <LinearGradient
                            colors={['#3AF9EF', '#3851FB', '#A22FF9']}
                            start={{ x: 0.1, y: 0.9 }}
                            end={{ x: 0.9, y: 0.1 }}
                            style={styles.buttonStyle}
                        >
                            <Pressable style={[theme.row, { justifyContent: 'center' }]} onPress={handleFormSubmit} >
                                <Text style={{ color: theme.colors.white, fontSize: 20 }}>Verify </Text>
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
        gap: 60,
        flexDirection: 'column',
        paddingHorizontal: 40,
        position: 'relative',
        width: '100%',
        marginTop: height * 0.05,
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
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    input: {
        width: 50,
        height: 50,
        fontSize: 24,
        color: '#424242',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderColor: '#bdbdbd',
        textAlign: 'center',
    },
});
