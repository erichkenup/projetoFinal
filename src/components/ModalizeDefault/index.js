import React from 'react';
import { View, Text, Dimensions, Image} from 'react-native';
import { Modalize } from 'react-native-modalize';


const {wight, height} = Dimensions.get("screen")

export default ModalizeDefault = ({ modalizeRef }) => {
  return (
  
  
         <Modalize style={{paddingHorizontal:200}}  
                ref={modalizeRef}
                HeaderComponent={
                    <Text style={{fontSize:20, fontWeight: 'bold', marginVertical:20, textAlign:"center", marginBottom:20}}>
                        em cima
                    </Text>
                }
                modalHeight={height/1.2}
                snapPoint={height/2}
                
                >
                   <View > 
                        
                            <Image style={{height:120, width:120}} source = {{uri:"https://img.olhardigital.com.br/wp-content/uploads/2018/09/20180903133856-860x450.jpg"}}/>
                        
                    </View>
            </Modalize> 
        
  )
};