import React, {useState, useEffect} from 'react';
import {Alert, View,TextInput, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rotas from "../../routes/Usuario/routes"
// import Beeimg from './assets/Img.png'
// import {Avatar} from './styles/styles'

export default function Login ({navigation}) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [token,setToken] = useState();
    const [nome,setNome] = useState();

    useEffect(() => {
      AsyncStorage.getItem('token').then(response => {
        if (response != null) {
          navigation.navigate("Home");
        }
      })
    }, [])


    // useEffect(() => {
  
    //   recuperarUsuarioAsyncStorage().then(valor => {
       
    //     if(valor !== undefined){
    //       navigation.navigate('Home');
    //     }
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }, [])
  
    // async function recuperarUsuarioAsyncStorage(){
    //   try {
    //     const valor = await AsyncStorage.getItem('teste');
  
    //   if(valor !== null){
    //     const parseObjeto = JSON.parse(valor);
    //     return parseObjeto
    //   }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  
    async function salvarUsuarioETokenAsyncStorage(nome,token){
         await AsyncStorage.setItem('nome', nome); 
         await AsyncStorage.setItem('token', token);
                     
    }
  
    function handleLogin(){     
      
      const usuario = {
        username: email,
        senha: senha,
      }
      rotas.login(usuario).then((response)=>{        
          const tokenInside = response.data.token
          const nomeInside = response.data.usuario.nome

          setToken(tokenInside)
          setNome(nomeInside)
          salvarUsuarioETokenAsyncStorage(nomeInside, tokenInside)
          
          navigation.navigate('Home') 
           

      }).catch(error => {Alert.alert("Usuario ou senha invalidos")})

      // salvarUsuarioNoAsyncStorage(usuario);
        
    }
    
    return (
        
        <View style={{flex: 1,backgroundColor: 'black', padding: 50}}>
          {/* <Avatar source={Beeimg}></Avatar> */}
          <TextInput style={styles.input} onChangeText={(valor) => setEmail(valor)} />
          <TextInput style={styles.input} onChangeText={setSenha} />
          <Button style={styles.botao} onPress={handleLogin} title="Logar"/>

          <TouchableOpacity>
          <Text style={styles.texto}> 
          cadastro
          </Text>
          </TouchableOpacity>

        </View>
        
      );

}

const styles = StyleSheet.create({
    input:{

        backgroundColor: '#FFF', 
        marginBottom: 5,           
    },
    
    botao:{
        marginTop: 30,
        borderWidth: 1,
        borderRadius:10,
    },

    texto:{
      color: "white"
    }
})