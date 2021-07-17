import React, { useState, useEffect, useRef } from 'react';
import {Image,FlatList,View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import rotas from "../../routes/Produto/routes";
// import Produto from "../../components/Produto"
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalizeDefault from "../../components/ModalizeDefault";




export default Home = ({ navigation }) => {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    
    const modalizeRef = useRef(null); 
    
    useEffect(() => {        
        rotas.obterTodos().then((response) =>{
            setProdutos(response.data);
            mostrarNome()
            
        }).catch(error => {console.log(error)})
    }, [])  

    async function handleLogout(){
        await AsyncStorage.multiRemove(["token","nome"])
        navigation.navigate('Login');        
    }
    
    async function handleAdicionar(){
        modalizeRef.current?.open();
        navigation.navigate('Login');        
    }


    async function mostrarNome(){
        const nomeUsuario = await AsyncStorage.getItem("nome")
        setNome( nomeUsuario)        
    }

    const handleEdit = () => {
        modalizeRef.current?.open();
    }

    const handleDelete = (item) => {
        rotas.deletar(item.id) 
        var index = produtos.indexOf(item) 
        
        var produtoNovo = produtos.filter(function(value){ 
            return value.id !== produtos[index].id})

        setProdutos(produtoNovo)
        
    }
    return (
        <>
            <Text>{nome}</Text>
            <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>          
                <Text style={styles.textoLogOut}>
                    LOGOUT
                </Text>
            </TouchableOpacity>            
            <TouchableOpacity style={styles.adicionarButton} onPress={handleAdicionar}>          
                <Text style={styles.textoAdicionar}>
                    ADICIONAR
                </Text>
            </TouchableOpacity>            
            <View style={styles.container}>
                <FlatList
                data={produtos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => 
                    <View style={styles.card}>
                        <Image source={{ uri: item.linkImagem }} style={styles.image}/>
                        <Text>{item.nome}</Text>
                        <Text>R${item.preco}</Text>            
                        <TouchableOpacity 
                        style = {{ backgroundColor:"yellow", padding: 10, borderRadius: 30}} 
                        onPress={handleEdit} >
                            <Text>EDITAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                        style = {{ backgroundColor:"black", padding: 10, borderRadius: 30}} 
                        onPress={() => handleDelete(item)} >
                            <Text style = {{color:"white"}}>DELETE</Text>
                        </TouchableOpacity>
                        
                    </View>               
                    
                }
                />
            </View>
                
                       
                <ModalizeDefault modalizeRef={modalizeRef}/>
        </>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "white",
        margin:50
    },
    logOutButton:{
        backgroundColor: 'yellow',
        borderRadius: 24,
        width: 300,
        alignSelf: "center"

    },
    adicionarButton:{
        backgroundColor: 'black',
        borderRadius: 24,
        width: 300,
        alignSelf: "center"

    },
    textoLogOut:{
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        padding: 10 
    },
    textoAdicionar:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        padding: 10 
    },



    card: {
        flex: 1,
        
        justifyContent:'space-around',
        alignItems: 'center',
        padding: 20,        
    },
    image: {
      flex: 1,
      width: 140,
      height: 140
    },
    buttonGreen: {
        width: 30,
        height: 30,
        backgroundColor:"green",
        padding: 10,
        borderRadius: 15  
    },
    buttonRed: {
        width: 30,
        
        backgroundColor:"red",
        padding: 10,
        borderRadius: 15  
    }
})