import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 4,
    marginBottom: 16,
  },
  Name: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  Description: {
    color: '#666',
    marginTop: 5,
    lineHeight: 20,
  },
  Stats: {
    flexDirection: 'row',
    marginTop: 15,
  },
  Stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  StatCount: {
    marginLeft: 6,
  },
  Refresh: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  RefreshText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7159c1',
    marginLeft: 5,
  },
});
export default styles;
