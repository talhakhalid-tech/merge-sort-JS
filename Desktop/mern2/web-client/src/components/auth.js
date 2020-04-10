import history from '../history'

const auth = () =>{
    history.push('/login')
    alert('You must be authorized to visit given route')
}

export default auth