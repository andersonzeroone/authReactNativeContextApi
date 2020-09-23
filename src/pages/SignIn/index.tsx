import React from 'react';
import { View, Button, StyleSheet} from 'react-native';
import {useAuth} from '../../contexTs/auth';

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
  }
})


const SignIn: React.FC = () => {
  const {signed, signIn} = useAuth();

  console.log(signed)
  

  function handleSingIn(){
    signIn();
  }

  return(
    <View style={styles.Container}>
      <Button title='Sing In' onPress={handleSingIn}/>  
    </View>
  )
}

export default SignIn;