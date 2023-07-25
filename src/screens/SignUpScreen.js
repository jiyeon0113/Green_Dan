import CustomTopbar from '../../components/CustomTopbar';
import { onPressed } from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';

const onSignUpPressed = () => {
    return (
        <signInScreenView>
            <CustomTopbar
            rightText='X'
            onPressRight={onExitPressed}
        />

<View style={styles.signInTextContainer}>
                <Text style= {styles.signInText}>SIGN UP</Text>
            </View>

            <CustomInput
                value={username}
                setValue={setUsername}
                placeholder="Username"
            />

            <CustomInput
                value={email}
                setValue={setUseremail}
                placeholder="Useremail"
            />

            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
                secureTextEntry
            />

            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="PasswordComfirm"
                secureTextEntry
            />

            <CustomButton
                onPress={onSignInPressed}
                text="Sign Up"
            />

        </signInScreenView>
        
    );
};

const onExitPressed = () => {
	console.warn("onExitPressed");
}



export default SignUpScreen;