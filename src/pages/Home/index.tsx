import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  FlatList
} from 'react-native';
import { TaskItem } from '../../components';
import { useTasks } from '../../hooks';

const Home = () => {
  const [newTask, setNewTask] = useState('')
  const { tasks, setTasks } = useTasks()

  const handleAddNewTask = () => {
    const task = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty'
    }

    setNewTask('')
    setTasks([...tasks, task])
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={styles.container}
      >
        <Text style={styles.text}>
          Se atualizando sobre react-native!!
        </Text>
        <TextInput
          placeholderTextColor={'#555'}
          style={styles.input}
          placeholder='Nova tarefa...'
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.textButton}>
            Adicionar
          </Text>
        </TouchableOpacity>
        <Text style={styles.textTasks}>
          Minhas Tarefas
        </Text>
        <FlatList
          data={tasks}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { id, title } }) => <TaskItem id={id} title={title} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214'
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  textTasks: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    borderRadius: 7,
    paddingTop: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  textButton: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold'
  },
  taskButton: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center'
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export { Home };
