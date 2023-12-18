import * as React from 'react';

const title = 'React';



const App=()=>{
  const [searchTerm,setSearchTerm] = React.useState('');

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
  const handleSearch = (event)=>{
    setSearchTerm(event.target.value)
    console.log(searchTerm);
  }
  const searchedStories = stories.filter((story)=>(
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return(
    <div>
      <h1 className="text-3xl font-bold underline">My Hacker Stories</h1>
      <Search onSearch = {handleSearch} searchTerm = {searchTerm}/>
      <hr/>
      <List list = {searchedStories}/>
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

// eslint-disable-next-line react/prop-types
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

const Search = ({onSearch,searchTerm})=>{

  const handleChange = (event)=>{
    onSearch(event);
  }
  return(
      <div>
        <label htmlFor="search" className='text-gray-700 font-bold mb-2'>Search:</label>
        <input id="search" type = "text" value={searchTerm} onChange={handleChange} className = "shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"/>
      </div>
  )
}

export default App;