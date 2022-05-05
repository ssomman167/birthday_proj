
import styled from 'styled-components'

function Birth({data}) {
  return (
    <div>
        {
      
      data.map((elem)=>{
        return (
          <Box key={elem.id}>
            <h3>{elem.id}</h3>
<h1>{elem.name}</h1>
<img src={elem.image} />
<p>Age:{elem.age}</p>
          </Box>
        )
      })
    }
    </div>
  )
}

const Box=styled.article`
margin: auto;
margin-top:1rem;
/* margin-left:20px; */
width:30rem;
background-color: aliceblue;
color:red;
text-align:center;
padding: 20px;

`
export default Birth