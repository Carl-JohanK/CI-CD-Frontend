function Buttens({ setOutput }) {
  
    return (
        <>
        <input onClick={() => setOutput('encrypt')} id="encrypt" type="button" value="encrypt" />
        <input onClick={() => setOutput('decrypt')} id="decrypt" type="button" value="decrypt" />
        </>
    )
  }
  
  export default Buttens