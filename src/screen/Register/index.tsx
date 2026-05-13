import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image,
} from 'react-native';

import { useState } from 'react';

import styles from './styles';

export default function RegisterScreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    function handleRegister() {

        let valid = true;

        setNameError('');
        setEmailError('');
        setPhoneError('');
        setPasswordError('');
        setConfirmPasswordError('');

        /* VALIDAR NOME */

        if (name.trim().length < 3) {
            setNameError('Nome muito curto');
            valid = false;
        }

        /* VALIDAR EMAIL */

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setEmailError('E-mail inválido');
            valid = false;
        }

        /* VALIDAR TELEFONE */

        if (phone.length < 10) {
            setPhoneError('Telefone inválido');
            valid = false;
        }

        /* VALIDAR SENHA */

        if (password.length < 6) {
            setPasswordError(
                'Senha deve ter no mínimo 6 caracteres'
            );

            valid = false;
        }

        /* CONFIRMAR SENHA */

        if (password !== confirmPassword) {
            setConfirmPasswordError(
                'As senhas não coincidem'
            );

            valid = false;
        }

        /* SUCESSO */

        if (valid) {
            console.log('Cadastro válido');
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo} />
                </View>
                {/* TÍTULO */}
                <Text style={styles.title}>
                    Criar Conta
                </Text>

                <Text style={styles.subtitle}>
                    Cadastre-se para continuar
                </Text>

                {/* INPUT NOME */}
                <TextInput
                    placeholder="Nome completo"
                    placeholderTextColor="#999"
                    style={styles.input}

                    value={name}
                    onChangeText={setName}
                />
                {
                    nameError ? (
                        <Text style={styles.errorText}>
                            {nameError}
                        </Text>
                    ) : null
                }

                {/* INPUT EMAIL */}
                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}

                    value={email}
                    onChangeText={setEmail}
                />
                {emailError ? (
                    <Text style={styles.errorText}>
                        {emailError}
                    </Text>
                ) : null}

                {/* INPUT TELEFONE */}
                <TextInput
                    placeholder="Telefone"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                    style={styles.input}

                    value={phone}
                    onChangeText={setPhone}
                />
                {phoneError ? (
                    <Text style={styles.errorText}>
                        {phoneError}
                    </Text>
                ) : null}

                {/* INPUT SENHA */}
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    secureTextEntry
                    style={styles.input}

                    value={password}
                    onChangeText={setPassword}
                />
                {passwordError ? (
                    <Text style={styles.errorText}>
                        {passwordError}
                    </Text>
                ) : null}

                {/* INPUT CONFIRMAR SENHA */}
                <TextInput
                    placeholder="Confirmar senha"
                    placeholderTextColor="#999"
                    secureTextEntry
                    style={styles.input}

                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                {confirmPasswordError ? (
                    <Text style={styles.errorText}>
                        {confirmPasswordError}
                    </Text>
                ) : null}

                {/* BOTÃO */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleRegister}
                >
                    <Text style={styles.buttonText}>
                        Criar conta
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}