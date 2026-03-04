import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//APP - Componente
//creatRoot -> Criar ali o que vai ser mostrado na tela
//render=redenrizar na tela

createRoot(document.getElementById('root')).render(
<App />
)
