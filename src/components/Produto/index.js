import React from "react"
import {View,Image,TouchableOpacity,Text} from "react-native"
import styles from "./style"
import { atualizar, deletar } from '../.././routes/routes';

export default Produto = ({ produto, key }) => {
    
    const [produtoNovo, setProdutoNovo] = useState({ nome: '', quantidade: 0});

    const handleDelete = () => {
        deletar(produto.id)
    }

    const handleEdit = () => {
        setProdutoNovo()
        atualizar(produto.id, produtoNovo)
    }

    return (
        <View key={key} style={styles.card}>
            <Image source={produto.linkImagem} style={styles.image}/>
            <Text>{produto.nome}</Text>
            <Text>R${produto.preco}</Text>            
            <TouchableOpacity onPress={modal} styles={styles.buttonGreen}>
                <Text>EDITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} styles={styles.buttonRed}>
                <Text>DELETE</Text>
            </TouchableOpacity>
        </View>
    )
}

//     "id": 6,
//     "nome": "Camisa New Era",
//     "descricao": "Camisa New Era",
//     "preco": 89.9,
//     "quantidade": 0,
//     "linkImagem": "https://cdn.iset.io/assets/37657/produtos/8932/thumb_400-400-1_mbv21tsh063_c016_5resultado.jpg"