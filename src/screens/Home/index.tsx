import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home(){

  const participant = ["Rodrigo", "Diego", "Vini", "Douglas", "Daniel", "Rossato", "Lucas", "João", "Rafel", "Eberton", "Héricles"]

    function handlePaticipantAdd (){
      if(participant.includes('Rodrigo')){
        return Alert.alert("O participante existe","Já existe um participante na lista com esse nome.")
      }
    }

    function handlePaticipantRemove (name: string){
      Alert.alert("Remover",`Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Deletado')
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
        />
        <TouchableOpacity style={styles.button} onPress={handlePaticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
       </View>
       <FlatList
        data={participant}
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


