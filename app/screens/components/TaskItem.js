import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTask(task.id)}>
        <Text
          style={[
            styles.taskText,
            task.completed && styles.taskCompleted,
          ]}
        >
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  deleteText: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskItem;
