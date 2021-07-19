// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


// Dynamic import, webpack caches the result and makes it a one time only fetch
// Name chunk
const loadGlobe = () => import(/* webpackChunkName: "globe" */'../globe')

const Globe = React.lazy(loadGlobe);
// import Globe from '../globe';

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >

      {/* Dynamically load onFocus and onMouseEnter */}
      <label style={{marginBottom: '1rem'}}  onFocus={loadGlobe} onMouseEnter={loadGlobe}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
          
        />
        {' show globe'}
      </label>

      {/* Fallback for asynchronous loading */}
      <React.Suspense fallback={<div>Loading..</div>}>
        <div style={{width: 400, height: 400}}>
          {showGlobe ? <Globe /> : null}
        </div>
      </React.Suspense>
     
    </div>
  )
}

export default App
