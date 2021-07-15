import React, { useState, useEffect } from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import rotas from "../../routes/routes";

export default Home = () => {

    const [produtos, setProdutos] = useState([]);
    
    useEffect(() =>{
        console.log("qqlr")
        rotas.obterTodos().then((response) =>{
            setProdutos(response.data);
            console.log(produtos)
        }).catch(error => {console.log(error)})
    }, [])
    
    return (
        <View>
            <TouchableOpacity style={styles.logOutButton}>          
                <Text style={styles.textoLogOut}>
                    LOGOUT
                </Text>
            </TouchableOpacity>
            {produtos.map(produto => {
                <Produto key={produto.id} produto={produto}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    
    logOutButton:{
        backgroundColor: 'yellow',
        borderRadius: 24,
        width: 300,
        alignSelf: "center"

    },

    textoLogOut:{
        color: "#0059b3",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        padding: 10 
    }
})