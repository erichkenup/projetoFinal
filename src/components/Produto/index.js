// import React,{useState, useRef} from "react"
// import {View,Image,TouchableOpacity,Text} from "react-native"
// import styles from "./style"
// import rotas from "../../routes/Produto/routes";


// export default Produto = ({ data }) => {

//     const modalizeRef = useRef(null);


//     const [deletado, setDeletado] = useState(0);
    
//     const handleEdit = () => {
//         modalizeRef.current?.open();
//     }

//     const handleDelete = () => {
//         rotas.deletar(data.id)
//         setDeletado(deletado + 1)              
//     }
   

//     return (
//         <>
//         {deletado == 0 ? (<>
//                     <View style={styles.card}>
//                         <Image source={{ uri: data.linkImagem }} style={styles.image}/>
//                         <Text>{data.nome}</Text>
//                         <Text>R${data.preco}</Text>            
//                         <TouchableOpacity 
//                         style = {{ backgroundColor:"yellow", padding: 10, borderRadius: 30}} 
//                         onPress={handleEdit} >
//                             <Text>EDITAR</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity  
//                         style = {{ backgroundColor:"black", padding: 10, borderRadius: 30}} 
//                         onPress={handleDelete} >
//                             <Text style = {{color:"white"}}>DELETE</Text>
//                         </TouchableOpacity>
                        
//                     </View>
//                     <ModalizeDefault modalizeRef={modalizeRef}/>
//                     </>
//                     ): (
//                         <View></View>
//                     )}
//         </>
//     )
// }