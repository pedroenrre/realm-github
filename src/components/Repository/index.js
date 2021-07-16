import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Repository = ({ data, onRefresh }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Name}>{data.name}</Text>
      <Text style={styles.Name}>{data.owner}</Text>
      <Text numberOfLines={2} style={styles.Description}>
        {data.description}
      </Text>
      <View style={styles.Stats}>
        <View style={styles.Stat}>
          <Icon name="star" size={16} color="#333" />
          <Text style={styles.StatCount}>{data.stars}</Text>
        </View>
        <View style={styles.Stat}>
          <Icon name="code-fork" size={16} color="#333" />
          <Text style={styles.StatCount}>{data.forks}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.Refresh} onPress={onRefresh}>
        <Icon name="refresh" color="#7159c1" size={16} />
        <Text style={styles.RefreshText}>ATUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Repository;
