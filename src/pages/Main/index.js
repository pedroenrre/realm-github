import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Repository from '~/components/Repository';

import styles from './styles';

import api from '~/services/api';
import getRealm from '~/services/realm';

const Main = () => {
  const [input, setInput] = useState('');
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();
      const data = realm.objects('Repository').sorted('stars', true);
      setRepositories(data);
    }
    loadRepositories();
  }, []);

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      owner: repository.owner.login,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });

    return data;
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);
      await saveRepository(response.data);
      setInput('');
      Keyboard.dismiss();
    } catch (error) {
      console.tron.warn(error);
    }
  }

  async function handleRefreshRepository(repository) {
    try {
      const response = await api.get(`/repos/${repository.fullName}`);
      const data = await saveRepository(response.data);
      setRepositories(
        repositories.map(repo => (repo.id === data.id ? data : repo)),
      );
    } catch (error) {
      console.tron.warn(error);
    }
  }
  return (
    <LinearGradient
      colors={['#7159c1', '#9B49c1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.Container}>
      <Text style={styles.Title}>Repositórios</Text>
      <View style={styles.Form}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.Input}
          autoCapitalizae="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <TouchableOpacity onPress={handleAddRepository} style={styles.Submit}>
          <Icon name="add" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.ListItem}
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Repository
            data={item}
            onRefresh={() => handleRefreshRepository(item)}
          />
        )}
      />
    </LinearGradient>
  );
};

export default Main;
