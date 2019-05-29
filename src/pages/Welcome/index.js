import React from 'react';
import { connect } from 'react-redux';

import { View, Text, Button } from 'react-native';

import styles from './styles';

const Welcome = ({ todos, dispatch }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <Text style={styles.welcome}>{todo}</Text>
    ))}
    <Button onPress={() => dispatch({ type: 'ADD_TODO', text: 'Novo Todo' })} title="Add ToDo" />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(Welcome);
