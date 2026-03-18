import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import RenderizarDados from "./components/RenderizarDados.jsx"

export default function App() {
  const[nomeAluno,setNomeAluno]=useState("")
  const[cursoAluno,setCursoAluno]=useState("")
  const[disciplinaAluno,setDisciplinaAluno]=useState("")
  const[apresentacaoAluno,setApresentacaoAluno]=useState("")
  const[mostrarDados,setMostrarDados]=useState(false)
  useEffect(() => {
    console.log("Hook executado na aplicação...");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Image 
          source={require("./assets/user.png")}
          style={styles.image}
        />

        {/* Text Input do Nome*/}
        <Text style={styles.label}>Nome:</Text>
        <TextInput 
          placeholder='Digite seu nome'
          style={styles.input}
          maxLength={10}
          autoCapitalize='words'
          onChangeText={setNomeAluno}
        />

        {/* Text Input do Curso*/}
        <Text style={styles.label}>Curso:</Text>
        <TextInput 
          placeholder='Digite seu curso'
          style={styles.input}
          maxLength={30}
          autoCapitalize='none'
          onChangeText={setCursoAluno}
        />

        {/* Text Input da Disciplina*/}
        <Text style={styles.label}>Disciplina:</Text>
        <TextInput 
          placeholder='Digite sua disciplina'
          style={styles.input}
          maxLength={30}
          autoCapitalize='none'
          onChangeText={setDisciplinaAluno}
        />

        {/* Text Input da Descrição*/}
        <Text style={styles.label}>Descrição:</Text>
        <TextInput 
          placeholder='Digite uma breve apresentação'
          style={[styles.input, { height: 80 }]}
          multiline={true}
          numberOfLines={3}
          onChangeText={setApresentacaoAluno}
        />

        { /*Botão para enviar enviar o formulário */}
        <Button 
          title='Clique aqui para enviar'
          onPress={() => setMostrarDados(true)}
        />

        {mostrarDados && <RenderizarDados nomeAluno={nomeAluno} cursoAluno={cursoAluno} disciplinaAluno={disciplinaAluno} apresentacaoAluno={apresentacaoAluno}/>}
        {mostrarDados && <Text>Dados enviados com sucesso!</Text>}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  content: {
    alignItems: 'stretch',
    gap: 5
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain"
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: "#eee",
    width: "100%",
    borderRadius: 12,
    padding: 10,
  }
});