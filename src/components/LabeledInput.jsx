import { StyleSheet, TextInput, View, Text } from 'react-native';
import { theme } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        // borderColor: theme.colors.primary,
        flex: 1,
    },
    label: {
        marginBottom: -3,
        color: '#424242'
    },
    input: {
        fontSize: 16,
        color: '#424242',
        paddingVertical: 10,
        flex: 1,
        paddingRight: 2
    },
    icon: {
        marginRight: 10,
    },

});

const LabeledInput = ({ label,
    value,
    onChangeText,
    iconName,
    error,
    style = {},
    type, secure = false, iconClick = false, iconColor = 'main', ...props }) => (
    <View style={[styles.container, { borderColor: error ? theme.colors.error : theme.colors.primary }]}>
        <Text style={styles.label}>{label}</Text>
        <View style={theme.row}>
            <TextInput
                style={[styles.input , style]}
                keyboardType={type}
                secureTextEntry={secure}
                value={value}
                onChangeText={onChangeText}
                {...props}
            />
            {iconName && <Ionicons name={iconName} size={24} color={theme.colors[iconColor]} onPress={iconClick ? () => iconClick() : null} style={styles.icon} />}
        </View>
    </View>
);

export default LabeledInput;