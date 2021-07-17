import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const pegarToken = async () =>{
  const token = await AsyncStorage.getItem('token')
  return token

}
// assync function google (){
//  jogar axios.creater aqui
// }


export default axios.create({
  baseURL: 'http://192.168.1.3:8080/api',
  headers: {
    "Content-Type": "application/json",
    'Authorization': "Coffee eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImlhdCI6MTYyNjQ2MDA5MiwiZXhwIjoxNjI2NTQ2NDkyfQ.AYQ88M0NQCVosKi-QnIyAaCswTzDEw7Wv9Dd54CcYnUx0iSafEU4rMfLZSDHS8yRkxmopI6uPj4KnZEBGIi-Ig"
  },
});