import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../theme/theme';
import LabeledInput from '../components/LabeledInput';
const { height } = Dimensions.get('window');

export default function Login({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailValidation = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setEmailError('Please enter an email address');
            return false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };
    const handlePasswordValidation = () => {
        if (!password) {
            setPasswordError('Please enter a password');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };
    const handleFormSubmit = () => {
        if (handleEmailValidation() && handlePasswordValidation()) {
            navigation.navigate('Mobile')
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.eclipse1} />
                <LinearGradient
                    colors={['#c630f83d', '#8150F9', '#2F56F8', 'transparent']}
                    style={styles.eclipse2}
                />
                <LinearGradient
                    colors={['#c630f83d', '#C72FF8', '#D25AF9']}
                    style={styles.eclipse3}
                />
                <View style={styles.logo}>
                    <Image source={require('../../assets/White.png')} style={styles.logoImage} />
                    <Text style={styles.title}>Welcome Back</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={{ color: theme.colors.secondary, fontSize: 28, fontWeight: 700, lineHeight: 34 }}>Sign In </Text>
                    <View>
                        <LabeledInput
                            label={'Email'}
                            placeholder={'Enter your email address'}
                            iconName={'checkmark'}
                            type={'email-address'}
                            iconColor='custom'
                            onBlur={handleEmailValidation}
                            value={email}
                            onChangeText={setEmail}
                            onFocus={() => setEmailError('')}
                            error={emailError}
                        />
                        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                    </View>
                    <View>

                        <LabeledInput
                            label={'Password'}
                            placeholder={'Enter your password'}
                            iconName={showPassword ? 'eye-off' : 'eye'}
                            secure={showPassword}
                            iconClick={() => setShowPassword(!showPassword)}
                            value={password}
                            onChangeText={setPassword}
                            onBlur={handlePasswordValidation}
                            onFocus={() => setPasswordError('')}
                            error={passwordError}
                        />
                        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
                    </View>

                    <Pressable>
                        <Text style={{ color: theme.colors.primary }}>Forgot Password?</Text>
                    </Pressable>
                    <LinearGradient
                        colors={['#425AFA', '#1433FF', '#43BEF3', '#C72FF8']}
                        start={{ x: 0.4, y: 0.6 }}
                        end={{ x: 0.9, y: 0.1 }}
                        style={styles.buttonStyle}
                    >
                        <Pressable style={theme.row}  >
                            <Text style={{ color: theme.colors.white, fontSize: 20 }}>Sign In </Text>
                            <AntDesign name="arrowright" size={24} color={theme.colors.white} />
                        </Pressable>
                    </LinearGradient>

                </View>
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background.default,
    },
    eclipse1: {
        width: 500,
        height: 500,
        position: 'absolute',
        left: -250,
        top: -200,
        backgroundColor: '#40D1F2',
        borderRadius: 2000,
        zIndex: 100,
        transform: [{ rotate: '28deg' }],
    },
    eclipse2: {
        width: 500,
        height: 500,
        position: 'absolute',
        left: -200,
        top: -150,
        borderRadius: 2000,
        zIndex: 50,
        transform: [{ rotate: '28deg' }],
        opacity: 1

    },
    eclipse3: {
        width: 500,
        height: 500,
        position: 'absolute',
        left: -150,
        top: -200,
        borderRadius: 2000,
        zIndex: 20,
        transform: [{ rotate: '28deg' }],
    },
    logo: {
        position: 'absolute',
        zIndex: 150,
        top: 64,
        left: 52,
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
    },
    logoImage: {
        width: 60,
        height: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: 400,
        color: theme.colors.white,
        maxWidth: 150,
        lineHeight: 34,
    },
    buttonContainer: {
        gap: 20,
        flexDirection: 'column',
        paddingHorizontal: 40,
        position: 'relative',
        width: '100%',
        marginTop: height * 0.5,
        zIndex: 290,
        backgroundColor: 'transparent',
    },
    buttonStyle: {
        borderRadius: 25,
        padding: 20,
    },
    signUpButton: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderStyle: 'solid',
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
});
