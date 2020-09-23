import React from 'react';
import { View, Button, StyleSheet, Text} from 'react-native';
import {useAuth} from '../../contexTs/auth';

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

const Dashbord: React.FC = () => {
  const {signOut,user} = useAuth();

//   console.log(signed)
  

  function handleSingOut(){
    signOut();
  }

  return(
    <View style={styles.Container}>
        <Text>{user?.name}</Text>
      <Button title='Logout' onPress={handleSingOut}/>  
    </View>
  )
}

export default Dashbord;