
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-8">
            <a 
              href="https://vitejs.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <img src="/vite.svg" className="h-24 w-24" alt="Vite logo" />
            </a>
            <a 
              href="https://react.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <div className="h-24 w-24 flex items-center justify-center border-2 border-primary rounded-lg">
                React
              </div>
            </a>
          </div>
          
          <h1 className="text-4xl font-bold">Vite + React</h1>
          
          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors"
            >
              count is {count}
            </button>
            <p className="mt-4 text-muted-foreground">
              Edit <code className="bg-muted px-1 py-0.5 rounded text-sm">src/App.tsx</code> and save to test HMR
            </p>
          </div>
          
          <p className="text-muted-foreground">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
