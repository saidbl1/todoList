import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import App from '../App';

// const completeTask = (index) => {
//   let itemsCopy = [...taskItems];
//   itemsCopy.splice(index, 1);
//   setTaskItem(itemsCopy);
// };

const Task = (props) => {
  const handleDeleteTask = () => {
    props.onDeleteTask(); // Call the parent's onDeleteTask function
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={props.onDeleteTask}>
        <View style={styles.circular}>
          <Text style={styles.circularText}>
            {/* <TouchableOpacity
            // key={index}
            onPress={() => completeTask(index)}
          ></TouchableOpacity> */}
            &#10007;
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#242225',

    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#c39352',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: '#fff3e3',
  },
  circular: {
    width: 24,
    height: 24,
    // borderColor: '#e1d5c9',
    // borderWidth: 1,
    // borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularText: {
    color: '#fff3e3',
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 32,
  },
});

export default Task;
