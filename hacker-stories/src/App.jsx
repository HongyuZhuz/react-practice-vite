import * as React from 'react';

const title = 'React';



const App=()=>{

  const stories = [
    {
      title:'React',
      url:'https://reactjs.org/',
      author:'Jordan Walke',
      num_comments:3,
      points:4,
      objectID:0,
    },
    {
      title:'Redux',
      url:'https://redux.js.org/',
      author:'Dan Abramov, Andrew Clark',
      num_comments:2,
      points:5,
      objectID:1,
    }
  ];

  return(
    <div>
      <h1 className="text-3xl font-bold underline">My Hacker Stories</h1>
      <Search />
      <hr/>
      <List list = {stories}/>
    </div>
  );
}

const List=({list})=>{
  return (
    <ul>
      {list.map((item)=>
      <Item key = {item.objectID} item = {item}/>
      )}
    </ul>
  )
}

const Item = ({key,item})=>{
  return(
    <li key = {key}>
      <span >
          <a href={item.url}>{item.title}</a>
      </span><br/>
      <span>{item.author}</span><br/>
      <span>{item.num_comments}</span><br/>
      <span>{item.points}</span><br/>
    </li>
  )
}

const Search = ()=>{
  const [searchTerm,setSearchTerm] = React.useState('')

  const handleChange = (event)=>{
    setSearchTerm(event.target.value)
  }
  return(
      <div>
        <label htmlFor="search">Search:</label>
        <input id="search" type = "text" onChange={handleChange}/>

        <p>
          Searching for <strong>{searchTerm}</strong>.
        </p>
      </div>
  )
}

export default App;