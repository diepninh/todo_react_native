import React ,{useState}from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView ,Modal,TextInput,Button} from 'react-native';
import Header from './components/Header';

import AddJob from './components/AddJob';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function App() {
  const  [todos,setTodos]= useState([
    { text: 'mua bim bim',key:'1'},
    {text: 'mua keo mut',key: '2'},
    {text: 'mua mi tom', key: '3'}
  ]);
//xoá job
  const deleteData= (key)=>{
    setTodos((newData)=>{
      return newData.filter(todo =>todo.key != key);
    });
  }
  // tạo job
  const submitHandler =(text)=> {
    setTodos((newData)=>{
      return [
        {text:text, key: Math.random().toString()},
          ...newData
      ]
    })
  }
  const [modalOpen,setModalOpen]=useState(false);
  const [textEdit,settextEdit]=useState('');
  const [keyEdit,setkeyEdit]=useState('');
  const clickicon=(key)=>{
    let newdata= todos.find(todo => todo.key=== key)
    setModalOpen(true);
    settextEdit(newdata.text);
    setkeyEdit(newdata.key);
  }
  const changetText=(valu)=>{
    settextEdit(valu);
  }

  const edit =()=>{

    let olddata = todos.find(todo => todo.key===keyEdit)
    let newedit = {text : textEdit,key: keyEdit}
    setModalOpen(false);

    setTodos((newData)=>{
      return [newData.splice(olddata,1,newedit)]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <View  >
          <Modal visible={modalOpen} animationType='slide'>
            <View  >
              <Icon name="close" size={20} color='#33CCFF'
                    onPress={()=>setModalOpen(false) }
              />
            </View>
            <TextInput
                value={textEdit}
                onChangeText={changetText}
            />

            <Button title='edit your job'  color='#33CCFF' onPress={()=>edit()}/>
          </Modal>

        </View>
      </View>

      <View style={styles.content}>
        <AddJob submitHandler={submitHandler}/>
        <ScrollView>
          <View style={styles.list}>
            <FlatList
                data={todos}
                renderItem={({item}) =>(
                    <View>
                      <Text>{item.text}</Text>
                      <Icon name="edit" size={20} color='#33CCFF' onPress={()=>clickicon(item.key)}/>
                      <Icon name="trash" size={20} color='#33CCFF' onPress={()=>pressHandler(item.key)}/>
                    </View>
                )}
            />

          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
