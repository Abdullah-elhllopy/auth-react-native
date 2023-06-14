import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../theme/theme';
const { height } = Dimensions.get('window');

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
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
                <Text style={styles.title}>Welcome</Text>
            </View>
            <View style={styles.buttonContainer}>
                <LinearGradient
                    colors={['#425AFA', '#1433FF', '#43BEF3', '#C72FF8']}
                    start={{ x: 0.4, y: 0.6 }}
                    end={{ x: 0.9, y: 0.1 }}
                    style={styles.buttonStyle}
                >
                    <Pressable style={theme.row}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ color: theme.colors.white, fontSize: 20 }}>Sign In </Text>
                        <AntDesign name="arrowright" size={24} color={theme.colors.white} />
                    </Pressable>
                </LinearGradient>
                <Pressable style={[styles.buttonStyle, styles.signUpButton, theme.row]}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ color: theme.colors.black, fontSize: 20 }}>Sign Up </Text>
                    <AntDesign name="arrowright" size={24} color={theme.colors.black} />
                </Pressable>


            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background.default,
        alignItems: 'center',
        justifyContent: 'center',
    },
    eclipse1: {
        width: 500,
        height: 500,
        position: 'absolute',
        left: -250,
        top: -150,
        backgroundColor: '#40D1F2',
        borderRadius: 2000,
        zIndex: 100,
        transform: [{ rotate: '28deg' }],
    },
    eclipse2: {
        width: 500,
        height: 500,
        position: 'absolute',
        left: -160,
        top: -90,
        borderRadius: 2000,
        zIndex: 50,
        transform: [{ rotate: '28deg' }],
        opacity: 1

    },
    eclipse3: {
        width: 500,
        height: 500,
        position: 'absolute',
        left: -70,
        top: -130,
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
    },
    buttonContainer: {
        gap: 15,
        flexDirection: 'column',
        padding: 40,
        position: 'relative',
        width: '100%',
        marginTop: height * 0.7
    },
    buttonStyle: {
        borderRadius: 25,
        padding: 20,
    },
    signUpButton: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderStyle: 'solid',
    }
});
