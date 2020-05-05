import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button,Modal,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function TodoItem2({item,pressHandler, edit}) {

    const [modalOpen,setModalOpen]=useState(false);
    const [textEdit,settextEdit]=useState('')
    const clickicon=(key)=>{
        setModalOpen(true);
        settextEdit(item.text)
    }

    return(

         <View style={styles.taskWrap}>
             <Modal visible={modalOpen} animationType='slide'>
                 <View style={StyleSheet.modalContent}>
                 <Icon name="close" size={20} color='#33CCFF'
                       onPress={()=> setModalOpen(false)}
                 />
                 </View>
                 <TextInput   style={styles.input}
                              // value={item.key}
                     onChangeText={changeEdit}
                              />

                 <Button title='edit your job'  color='#33CCFF' onPress={() => edit}/>
             </Modal>
             <Icon name="edit" size={20} color='#33CCFF' style={{marginRight:16}}
                   onPress={()=>setModalOpen(true)}/>

             <Text>
                 {item.text}

             </Text>

             <Icon name="trash" size={20} color='#33CCFF' style={{marginLeft:'auto'}}
                   onPress={()=> pressHandler(item.key)}/>
         </View>



    )
}
const styles = StyleSheet.create({
    taskWrap:{
        padding: 16,
        marginTop: 16,
        flexDirection: 'row',
        borderColor: '#33CCFF',
        borderWidth: 1,

        borderRadius: 10,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }

})