import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */
  <div className="container App">
    <div className="profile-image-container">
      <img className="profile" src={employee.profileImg} width="130" height="130" alt ="Profileimage"/>
    <div className='title'>
      <h1>{employee.name}</h1>
    </div>
    <div className='candidates-details'>
      <label>location</label>
      <strong>{employee.location}</strong>
    </div>
    <div className='candidates-details'>
      <label>Blood group</label>
      <strong>{employee.bloodGroup}</strong>
    </div>
    <div className='candidates-details'>
      <label>Age</label>
      <strong>{employee.age}</strong>
    </div>

    </div>
  </div>

  }
</div>
)
}



export default App;
