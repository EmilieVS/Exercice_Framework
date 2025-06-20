export default function SearchBar() {
    return (
        <div className="searchBar" style={{
            display: 'flex', alignItems: 'center',
            border: 'solid', borderRadius: '1em', border: '0.1em solid #ccc', margin: '1em', padding:'0.25em'
        }}>
            <input type="text" placeholder="Search.." style={{ height: '2.5em', border: 'none', outline: 'none', width: '80%' }}></input>
            <button style={{ width: '4em', height: '2.4em', background: 'none' }}>
                <img src="src/assets/Magnifier.png" alt="icone recherche" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </button>
        </div>
    );
}
