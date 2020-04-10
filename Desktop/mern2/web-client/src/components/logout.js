import history from '../history'

const onLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
    alert('Logged out successfully')
}

export default onLogout