import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home(){

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

    function handlePaticipantAdd (){
      if(participants.includes(participantName)){
        return Alert.alert("O participante existe","Já existe um participante na lista com esse nome.")
      }

      setParticipants(prevState => [...prevState, participantName])
      setParticipantName('')
    }

    function handlePaticipantRemove (name: string){

      Alert.alert("Remover",`Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant != name))
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Envento</Text>
      <Text style={styles.eventDate}>Data do Evento </Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
            onChangeText={text => setParticipantName(text)}
            value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handlePaticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
       </View>
       <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguem chegou no enveto ainda? </Text>
        )}
        renderItem={({item}) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handlePaticipantRemove(item)}/>
        )}
       />
    </View>
  )
}


