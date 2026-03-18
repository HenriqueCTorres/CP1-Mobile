import { View, Text } from "react-native";

export default ({ nomeAluno, cursoAluno, disciplinaAluno, apresentacaoAluno }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text>Nome: {nomeAluno}</Text>
      <Text>Curso: {cursoAluno}</Text>
      <Text>Disciplina: {disciplinaAluno}</Text>
      <Text>Apresentação: {apresentacaoAluno}</Text>
    </View>
  );
};