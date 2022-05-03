interface ButtonProps {
text: string

}

function Button(props: ButtonProps) {

  return <button>{props.text}</button>

}


function App() {

  return (

<div>

<Button text="Send"/>
<Button text="Sending"/>
<Button text="HALO"/>

</div>

)
}


export default App