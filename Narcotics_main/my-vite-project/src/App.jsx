import { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState("");
  const [questionDisplay, setQuestionDisplay] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
    setQuestionDisplay(event.target.value);
  };

  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuestion("");

    const formData = new FormData();
    formData.append('prompt', question);

    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to use.
    fetch('http://127.0.0.1:8000/output/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Non-OK response status');
        }
      })
      .then((data) => {
        console.log('Response:', data);
        setAnswer(data);
      })
      .catch((error) => {
        console.error('Error fetching answer:', error);
        setAnswer('Error fetching answer');
      });
  };

  return (
    <div>
      <div className='header'>
        <h1>kbjh</h1>
        {/* <div>
          <img className='lionImg' src={require('./src/assets/lion.png').default} alt="Lion" />
        </div> */}
        <div>
          <img className='ncbImg' src={require('./src/assets/middlelogo.png').default} alt="NCB" />
        </div>
        <div>
          <img className='policeImg' src={require('./src/assets/police.png').default} alt="Police" height={'100px'} />
        </div>
        <p>Disclaimer:This app only operates based on the provided Documents.</p>

      </div>
      <div>
        
      </div>

      <div className='displayQuestion'>
        <div className='blackgpt'>
          <img className='blackgptImg' src={require('./src/assets/questionlogo.jpg').default} alt="Question Logo" />
        </div>
        <div>
          <h2></h2>
        </div>
        <p>{questionDisplay}</p>
      </div>

      <div className='displayAnswer'>
        <div className='greengpt'>
          <img className='greengptImg' src={require('./src/assets/answerlogo.png').default} alt="Answer Logo" />
        </div>
        <h2></h2>
        <div className='responseAnswer'>
          {/* Use dangerouslySetInnerHTML to render HTML content */}
          <p>This is first one <br/> This is second one</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='inputBox'>
          <input
            className='inputBox'
            type="text"
            value={question}
            placeholder='Ask about NCB yes'
            onChange={handleQuestionChange}
            
          />
          <button className='submitBox' type="submit">
            <img className='arrowImg' src={('./src/assets/new.png').default} alt="Submit" />
          </button>
          
        </div>
        <div className='Body'>
          <input
            className='Body'
            type="text"
            
            placeholder='Ask about NCB'
            />
        </div>
        
      </form>
      
    </div>
  );
}

export default App;
