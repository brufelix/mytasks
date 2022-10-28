import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ITaskItemProps {
  id: string,
  title: string
}

const TaskItem: React.FC<ITaskItemProps> = ({ id, title }) => {
  return (
    <TouchableOpacity key={id} style={styles.taskButton}>
      <Text style={styles.titleTask}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold'
  },
  taskButton: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center'
  },
})

export { TaskItem };