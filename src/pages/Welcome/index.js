import React from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import styles from './styles';

const Welcome = ({ todos }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <Text style={styles.welcome}>{todo}</Text>
    ))}
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(Welcome);
