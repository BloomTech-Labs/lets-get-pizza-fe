export const hasToken = localStorage.hasOwnProperty("token");

//These two functions return either the current user or a false
export const curr_user = localStorage.getItem('curr_user') ? JSON.parse(localStorage.getItem('curr_user')) : false
export const curr_location = localStorage.getItem('curr_location') ? JSON.parse(localStorage.getItem('curr_location')) : false

export const logout = () => { 
  localStorage.removeItem('curr_user')
  localStorage.removeItem('curr_location')
  localStorage.removeItem('token')
  
  window.location.replace('/?logout=true');
}

export default function Auth(response) {
  localStorage.setItem("token", response.token);
  if(response.user) { 
    //You must stringify to store in localStorage
    localStorage.setItem('curr_user', JSON.stringify(response.user))
  }
  else if(response.location) {
    //You must stringify to store in localStorage
    localStorage.setItem('curr_location', JSON.stringify(response.location))
  }
  window.location.replace('/users/profile')
}

