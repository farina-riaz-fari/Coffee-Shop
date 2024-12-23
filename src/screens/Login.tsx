import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  const sliderAnimation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const loadStoredCredentials = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('email');
        const storedPassword = await AsyncStorage.getItem('password');
        if (storedEmail && storedPassword) {
          setEmail(storedEmail);
          setPassword(storedPassword);
        }
      } catch (error) {
        console.error('Failed to load stored credentials', error);
      }
    };

    loadStoredCredentials();
  }, []);

  const toggleForm = () => {
    Animated.timing(sliderAnimation, {
      toValue: isLogin ? 1 : 0,
      duration: 600,
      useNativeDriver: false,
    }).start();

    setIsLogin(!isLogin);
    setMessage('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const sliderPosition = sliderAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '50%'],
  });

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      setMessage('');
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      if(email || password ){
        await AsyncStorage.setItem('isLoggedIn', 'true'); 
      }
      navigation.navigate('GetStarted');
    } catch (error) {
      setMessage(error.message || 'Login failed. Please try again.');
    }
  };

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword || !firstName || !lastName) {
      setMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });

      setMessage('Signup successful! Please login.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      toggleForm();
    } catch (error) {
      setMessage(error.message || 'Signup failed. Please try again.');
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <LinearGradient colors={['#C67C4E', '#8B4513']} style={styles.wrapper}>
      <Image source={require('../assets/coffeeLogo.png')} style={styles.logo} />
      <KeyboardAwareScrollView
      style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: isKeyboardVisible ? 0 : 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.titleText}>
          <Text style={styles.title}>
            {isLogin ? 'Login Form' : 'Signup Form'}
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.slideControls}>
            <TouchableOpacity
              onPress={() => isLogin || toggleForm()}
              style={styles.slide}>
              <Text style={isLogin ? styles.activeSlide : styles.inactiveSlide}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => !isLogin || toggleForm()}
              style={styles.slide}>
              <Text style={!isLogin ? styles.activeSlide : styles.inactiveSlide}>
                Signup
              </Text>
            </TouchableOpacity>
            <Animated.View style={[styles.sliderTab, { left: sliderPosition }]} />
          </View>
          <View style={styles.formInner}>
            {isLogin ? (
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  placeholderTextColor="#999"
                  onChangeText={value => setEmail(value)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  secureTextEntry
                  onChangeText={value => setPassword(value)}
                />
                <TouchableOpacity>
                  <Text style={styles.linkText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                  <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  placeholderTextColor="#999"
                  value={firstName}
                  onChangeText={value => setFirstName(value)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  placeholderTextColor="#999"
                  value={lastName}
                  onChangeText={value => setLastName(value)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  secureTextEntry
                  value={password}
                  onChangeText={value => setPassword(value)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor="#999"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={value => setConfirmPassword(value)}
                />
                <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
                  <Text style={styles.btnText}>Signup</Text>
                </TouchableOpacity>
              </View>
            )}

            {message ? <Text style={styles.message}>{message}</Text> : null}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titleText: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    elevation: 5,
    paddingVertical: 30,

  },
  slideControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
    backgroundColor: '#f5f5f5',
  },
  sliderTab: {
    position: 'absolute',
    height: '100%',
    width: '50%',
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    zIndex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    zIndex: 2,
  },
  activeSlide: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inactiveSlide: {
    color: '#C67C4E',
    fontWeight: 'bold',
    fontSize: 16,
  },
  formInner: {
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  message: {
    fontSize: 14,
    color: 'red',
    margin: 10,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#C67C4E',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#783D06',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default LoginSignupScreen;
