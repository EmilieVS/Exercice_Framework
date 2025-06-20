export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ccc',
      borderRadius:'1em'
    }}>

      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#">NavBar</a>
        <a href="#">Framework</a>
        <a href="#"> Exo1</a>
        
      </div>
    </nav>
  );
}