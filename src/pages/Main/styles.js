import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 16 + getStatusBarHeight(),
    paddingHorizontal: 16,
  },
  Title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  Form: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Input: {
    flex: 1,
    padding: 12,
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  Submit: {
    backgroundColor: '#6bd4c1',
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 14,
  },
  ListItem: {
    marginTop: 20,
  },
});
export default styles;
