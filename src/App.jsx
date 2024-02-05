import BackGround from './components/BackGround.jsx'
import Card from './components/Card.jsx'


function App() {
  const customStyle = {
    fontFamily: 'Calibri',
    // Diğer stiller buraya eklenebilir
  };
  return (
    
    <div style={customStyle}>
      <BackGround></BackGround>
    </div>
  )
}

export default App
