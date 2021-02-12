import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000';

function App() {
  const [chosenSampleType, setChosenSampleType] = useState("");
  const [chosenWhichState, setChosenWhichState] = useState("");
  const [chosenSampleTechnique, setChosenSampleTechnique] = useState("");
  const [chosenSampleSize, setChosenSampleSize] = useState("");
  const [chosenInformationType, setChosenInformationType] = useState("");
  const [chosenOutputType, setChosenOutputType] = useState("");
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  const postIt = () => {
  	setSubmitButtonClicked(true);
  	const data = {
  		sampleType: chosenSampleType,
  		whichState: chosenWhichState,
  		sampleTechnique: chosenSampleTechnique,
  		sampleSize: chosenSampleSize,
  		informationType: chosenInformationType,
  		outputType: chosenOutputType
  	}
  	axios.post("/getfile", { data })
  	.then(res => {console.log(res)});
  }

  const hello = (
          <div>
            <hr className="mt-4 mb-4"/>
            <h3 className="pb-2"> I will sample using: </h3> 
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sampleTechnique" id="stratified" value="stratified" checked={chosenSampleTechnique === "stratified"}
              onChange={e => setChosenSampleTechnique("stratified")} />
              <label className="form-check-label" htmlFor="stratified">stratified sampling - <small> equal proportion of the sample size is selected from each state </small></label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sampleTechnique" id="random" value="random" checked={chosenSampleTechnique === "random"}
              onChange={e => setChosenSampleTechnique("random")} />
              <label className="form-check-label" htmlFor="random">simple random sampling - <small> every member of the national population has an equal chance of being selected  </small></label>
            </div>
          </div>
  )

  const resultingValues = (
            <div>
            <hr className="mt-4 mb-4"/>
            <h3 className="pb-2"> The state I want a sample of is: </h3> 
            <select className="form-select" aria-label="chooseState" value={chosenWhichState} onChange={e => setChosenWhichState(e.target.value)}>
              <option value="">Select a state</option>
              <option value='Alaska'>Alaska</option>
              <option value='Alabama'>Alabama</option>
              <option value='Arkansas'>Arkansas</option>
              <option value='Arizona'>Arizona</option>
              <option value='California'>California</option>
              <option value='Colorado'>Colorado</option>
              <option value='Connecticut'>Connecticut</option>
              <option value='DC'>DC</option>
              <option value='Delaware'>Delaware</option>
              <option value='Florida'>Florida</option>
              <option value='Georgia'>Georgia</option>
              <option value='Hawaii'>Hawaii</option>
              <option value='Iowa'>Iowa</option>
              <option value='Idaho'>Idaho</option>
              <option value='Illinois'>Illinois</option>
              <option value='Indiana'>Indiana</option>
              <option value='Kansas'>Kansas</option>
              <option value='Kentucky'>Kentucky</option>
              <option value='Louisiana'>Louisiana</option>
              <option value='Massachusetts'>Massachusetts</option>
              <option value='Maryland'>Maryland</option>
              <option value='Maine'>Maine</option>
              <option value='Michigan'>Michigan</option>
              <option value='Minnesota'>Minnesota</option>
              <option value='Missouri'>Missouri</option>
              <option value='Mississippi'>Mississippi</option>
              <option value='Montana'>Montana</option>
              <option value='North Carolina'>North Carolina</option>
              <option value='North Dakota'>North Dakota</option>
              <option value='Nebraska'>Nebraska</option>
              <option value='North Hampshire'>North Hampshire</option>
              <option value='New Jersey'>New Jersey</option>
              <option value='New Mexico'>New Mexico</option>
              <option value='Nevada'>Nevada</option>
              <option value='New York'>New York</option>
              <option value='Ohio'>Ohio</option>
              <option value='Oklahoma'>Oklahoma</option>
              <option value='Oregon'>Oregon</option>
              <option value='Philadelphia'>Philadelphia</option>
              <option value='Rhode Island'>Rhode Island</option>
              <option value='South Carolina'>South Carolina</option>
              <option value='South Dakota'>South Dakota</option>
              <option value='Tennessee'>Tennessee</option>
              <option value='Texas'>Texas</option>
              <option value='Utah'>Utah</option>
              <option value='Virginia'>Virginia</option>
              <option value='Vermont'>Vermont</option>
              <option value='Washington'>Washington</option>
              <option value='Wisconsin'>Wisconsin</option>
              <option value='West Virginia'>West Virginia</option>
              <option value='Wyoming'>Wyoming</option>
            </select>
            </div>
    )
    

  return (
    <div className="App">

      <nav className="navbar navbar-light bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand mb-0 h1" href="#"><h1>L2 Data Access Tool</h1></a>
          </div>
      </nav>

      <div className="container">

          <div className="offset-md-1 mt-5 col-md-9 pb-5">
            <h3 className="display-3 text-center mt-5"> Build your own political dataset </h3>
            <hr className="mt-5 mb-4"/>
            <h3 className="pb-2"> I want a: </h3> 
        	{/*<div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="sampleType" id="nationalSample" value="nationalSample" checked={chosenSampleType === "nationalSample"} 
              onChange={e => setChosenSampleType("nationalSample")}/>
              <label className="form-check-label" htmlFor="nationalSample">national sample</label>
            </div>*/}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="sampleType" id="stateSample" value="stateSample" checked={chosenSampleType === "stateSample"}
              onChange={e => setChosenSampleType("stateSample")} />
              <label className="form-check-label" htmlFor="stateSample">state sample</label>
            </div>
            {chosenSampleType === "" ? null : resultingValues }
            
          {chosenWhichState === "" && chosenSampleTechnique === "" ? null :
            (
            <div>
              <hr className="mt-4 mb-4"/>
              <h3 className="pb-2"> The size of my sample should be: </h3> 
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sampleSize" id="onepercent" value="onepercent" checked={chosenSampleSize==="onepercent"}
                onChange={e => setChosenSampleSize("onepercent")}/>
                <label className="form-check-label" htmlFor="onepercent">1%</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sampleSize" id="fivepercent" value="fivepercent" checked={chosenSampleSize==="fivepercent"}
                onChange={e => setChosenSampleSize("fivepercent")}/>
                <label className="form-check-label" htmlFor="fivepercent">5%</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sampleSize" id="tenpercent" value="tenpercent" checked={chosenSampleSize==="tenpercent"}
                onChange={e => setChosenSampleSize("tenpercent")}/>
                <label className="form-check-label" htmlFor="tenpercent">10%</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="sampleSize" id="twentyfivepercent" value="twentyfivepercent" checked={chosenSampleSize==="twentyfivepercent"}
                onChange={e => setChosenSampleSize("twentyfivepercent")}/>
                <label className="form-check-label" htmlFor="twentyfivepercent">25%</label>
              </div>
            </div>
            )
          }

          {chosenSampleSize === "" ? null : 
          ( <div>
              <hr className="mt-4 mb-4"/>
              <h3 className="pb-2"> I want: </h3> 
              <div className="form-check">
                <input className="form-check-input" type="radio" name="informationType" id="VD" value="VD" checked={chosenInformationType === "VD"}
                onChange={e => setChosenInformationType("VD")}/>
                <label className="form-check-label" htmlFor="VD">both voter history and demographic information</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="informationType" id="D" value="D" checked={chosenInformationType === "D"}
                onChange={e => setChosenInformationType("D")}/>
                <label className="form-check-label" htmlFor="D"> just demographic </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="informationType" id="V" value="V" checked={chosenInformationType === "V"}
                onChange={e => setChosenInformationType("V")}/>
                <label className="form-check-label" htmlFor="V"> just voter history information </label>
              </div>
            </div>
          )
          }

          {chosenInformationType === "" ? null :
          ( 
          <div>
            <hr className="mt-4 mb-4"/>
            <h3 className="pb-2"> I want my file as a: </h3> 
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="outputType" id="csv" value="csv" checked={chosenOutputType == "csv"} 
              onChange={e => setChosenOutputType("csv")}/>
              <label className="form-check-label" htmlFor="csv">.csv</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="outputType" id="tabfile" value="tabfile" checked={chosenOutputType == "tabfile"} 
              onChange={e => setChosenOutputType("tabfile")}/>
              <label className="form-check-label" htmlFor="tabfile">.tabfile</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="outputType" id="shapefile" value="shapefile" checked={chosenOutputType == "shapefile"}
              onChange={e => setChosenOutputType("shapefile")}/>
              <label className="form-check-label" htmlFor="shapefile">.shapefile</label>
            </div>
          </div>
          )
          }

          {chosenOutputType === "" ? null :
          (
          <div>
            <br className="mt-4 mb-4"/>
            <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg" onClick={postIt}>Get Dataset</button>
            </div>
          </div>
          )
        }

        </div>
      </div>
{/*
      <div className="container-fluid">
        <hr />
        <div className="text-center">
          <small className="mb-5"> Designed by Eliot Brown, Saahil Chamdia, Afnan Haq, Cezar Pekelman htmlFor Love Data Week Datathon</small>
        </div>
      </div>
*/}
    </div>
  );
}

export default App;
