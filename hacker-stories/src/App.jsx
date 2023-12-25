import * as React from 'react';

const title = 'React';

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

const useStorageState = (key,initialState)=>{
  const [value,setValue]=React.useState(
    localStorage.getItem(key)|| initialState
  );

  React.useEffect(()=>{
    localStorage.setItem(key,value);
  },[value,key]);

  return [value,setValue];
};



const App=()=>{
  const [searchTerm,setSearchTerm] = useStorageState('search','React');
  
  const handleSearch = (event)=>{
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }
  const searchedStories = stories.filter((story)=>(
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return(
    <div>
      <h1 className="text-3xl font-bold underline">My Hacker Stories</h1>
      <InputWithLabel 
        id = 'search'
        value = {searchTerm}
        onInputChange = {handleSearch}>
          <strong>Search:</strong>
        </InputWithLabel>
      <hr/>
      <List list = {searchedStories}/>
    </div>
  );
}

const List=({list})=>{
  return (
    <ul>
      {list.map(({objectID,...item})=>
      <Item 
        key = {objectID} 
        {...item}
        />
      )}
    </ul>
  )
}

// eslint-disable-next-line react/prop-types
const Item = ({key,title,url,author,num_comments,points})=>{
  return(
    <li key = {key}>
      <span >
          <a href={url}>{title}</a>
      </span><br/>
      <span>{author}</span><br/>
      <span>{num_comments}</span><br/>
      <span>{points}</span><br/>
    </li>
  )
}



const InputWithLabel = ({id, value,onInputChange,type = 'text',children}) =>(
  <>
  <label htmlFor = {id} className='text-gray-700 font-bold mb-2'> {children}</label>
  &nbsp;
  <input id = {id} type = {type} value = {value} onChange = {onInputChange}/>
  </>
)

export default App;