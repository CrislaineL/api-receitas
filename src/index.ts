import express, { Request, Response } from 'express'
import cors from 'cors'

// Cria o app Express
const app = express()

// Middleware
app.use(cors())            // permite que o front-end acesse a API
app.use(express.json())    // habilita JSON no body das requisições

// Interface das receitas
interface Receita {
  id: number
  titulo: string
  ingredientes: string[]
  modoPreparo: string
  imagem: string
}

// Array inicial de receitas
let receitas: Receita[] = [
  {
    id: 1,
    titulo: "Bolo de Cenoura",
    ingredientes: ["cenoura", "açúcar", "óleo", "ovos", "farinha", "fermento"],
    modoPreparo: "Misture tudo e asse.",
    imagem: "https://cozinha365.com.br/wp-content/uploads/2025/02/Bolo-de-cenoura-S.webp"
  }
]

// 🔹 READ - listar todas as receitas
app.get("/receitas", (req: Request, res: Response) => {
  res.json(receitas)
})

// 🔹 CREATE - adicionar nova receita
app.post("/receitas", (req: Request, res: Response) => {
  const nova: Receita = { id: Date.now(), ...req.body }
  receitas.push(nova)
  res.status(201).json(nova)
})

// 🔹 UPDATE - atualizar receita existente
app.put("/receitas/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const index = receitas.findIndex(r => r.id === id)
  if (index !== -1) {
    receitas[index] = { ...receitas[index], ...req.body }
    res.json(receitas[index])
  } else {
    res.status(404).json({ message: "Receita não encontrada" })
  }
})

// 🔹 DELETE - remover receita
app.delete("/receitas/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const index = receitas.findIndex(r => r.id === id)
  if (index !== -1) {
    receitas.splice(index, 1)
    res.sendStatus(204)
  } else {
    res.status(404).json({ message: "Receita não encontrada" })
  }
})

// Inicia a API
app.listen(3001, () => console.log("API rodando em http://localhost:3001"))
