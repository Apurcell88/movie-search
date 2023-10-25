import Stack from 'react-bootstrap/Stack';

const Nav = () => {
  return (
    <Stack className='nav-stack' direction="horizontal" gap={1}>
      <div className='p-2'>
        <img src="" alt="Logo" />
      </div>
      <div className='p-2 ms-auto'>
        <input type="text" placeholder='Search Movies' />
      </div>
      <div className='p-2'>
        <button className='nav-search-btn'>Search</button>
      </div>
    </Stack>
  )
}

export default Nav;