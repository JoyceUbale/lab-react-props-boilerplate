import './App.css';

function App(props) {
  // code here
  let data = props.props;

  let styleMydiv = {
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    marginLeft:"200px"
  }
  return(
    <>
    <h1 style={{textAlign:'center'}}>Kalvium Gallery</h1>

    <div style={styleMydiv}>
      <img src={data[0].img} alt=" " width={"500px"} />
      <img src={data[1].img} alt=" " width={"500px"} />
      <img src={data[2].img} alt=" " width={"500px"} style={{marginTop:'50px'}}/>
      <img src={data[3].img} alt=" " width={"500px"} style={{marginTop:'50px'}}/>
    </div>
   
    </>
  )
}

export default App;
