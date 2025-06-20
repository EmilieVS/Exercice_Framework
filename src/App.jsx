import './App.css'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Content from './components/Content'
import SideBar from './components/SideBar'



function App() {

  const cardData = [
    {
      content: 'Content 1', id: 'id1'
    },
    {
      content: 'Content 2', id: 'id2'
    },
    {
      content: 'Content 3', id: 'id3'
    },
    {
      content: 'Content 4', id: 'id4'
    },
    {
      content: 'content 5', id: 'id5'
    },
  ]



  return (
    <>
      <header style={{ display: 'flex', gap: '5em', justifyContent: 'center' }}>
        <Logo />
        <Navbar />

      </header>

      <section>
        <SearchBar />
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1em', maxWidth: '70vw', justifyItems: 'center' }}>
        <div style={{ display: 'flex', height: '100%', width: '100%', gap: '1em', justifyContent: 'center' }} >

          {/* <div style={{display:'grid',
        gridTemplateAreas:
        `
        "Content1 Content2 Content3 "
        "Content4 Content5 "
        `,
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '0.5em',
        }}>

          <Content style={{gridArea: 'Content1'}}/>
          <Content style={{gridArea: 'Content2'}}/>
          <Content style={{gridArea: 'Content3'}}/>
          <Content style={{gridArea: 'Content4'}}/>
          <Content style={{gridArea: 'Content5'}}/>
        </div> */}

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.5em',
          }}>
            {cardData.map((contentCard) => (
              <Content
                key={contentCard.id}
                content={contentCard.content}
              />
            ))}
          </div>

          <SideBar style={{ backgroundColor: 'grey', width: '10em' }} />
        </div>
      </section>

    </>

  );
}


export default App
