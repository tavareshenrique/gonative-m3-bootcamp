import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodosActions from '~/store/actions/todos';

import { View, Text, Button } from 'react-native';

import styles from './styles';

const Todos = ({ todos, addTodo, markAsCompleted }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <Text
        onPress={() => markAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Add ToDo" />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);
