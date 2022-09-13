import axios from "axios";


export async function autologin() {
  let tem = null
  console.log("自动登录");
  await axios.get("/api/loginAuto").then((res) => {
    console.log(res.data);
    tem = res.data
  });
  return tem
}

export async function login(username, password) {
  let r = null
  await axios.get(`/api/login?username=${username}&password=${password}`).then(async (res) => {
    console.log(res.data);
    r = res.data
  });
  return r
}

export function outlogin(){
  axios.get('/api/outlogin').then(res=>res.data)
}