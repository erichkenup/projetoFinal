import React, {useState, useEffect} from 'react';
import {View,TextInput, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default Login = () => {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
  
    useEffect(() => {
  
      recuperarUsuarioAsyncStorage().then(valor => {
        console.log(valor);
        if(valor !== undefined){
          navigation.navigate('Home');
        }
      }).catch(error => {
        console.log(error);
      });
    }, [])
  
    async function recuperarUsuarioAsyncStorage(){
      try {
        const valor = await AsyncStorage.getItem('teste');
  
      if(valor !== null){
        const parseObjeto = JSON.parse(valor);
        return parseObjeto
      }
      } catch (error) {
        console.log(error);
      }
    }
  
    async function salvarUsuarioNoAsyncStorage(usuario){
        try {
         const data = JSON.stringify(usuario);
         await AsyncStorage.setItem('teste', data);
        } catch (error) {
          console.log(error);
        }
    }
  
    function handleLogin(){
      const usuario = {
        email: email,
        senha: senha,
      }
      salvarUsuarioNoAsyncStorage(usuario);
  
      navigation.navigate('Home');
  
    }

    return (
        <View style={{flex: 1,backgroundColor: '#CCC', padding: 10}}>
          <TextInput style={styles.input} onChangeText={(valor) => setEmail(valor)} />
          <TextInput style={styles.input} onChangeText={setSenha} />
          <Button style={styles.botao} onPress={handleLogin} title="Logar"/>
          <Button title="cadastro"/>
        </View>
      );

}

const styles = StyleSheet.creat({
        
    input:{
        backgroundColor: '#FFF', 
        marginBottom: 5,           
    },
    
    botao:{
        borderWidth: 1,
        borderRadius:10,
    }

    
})