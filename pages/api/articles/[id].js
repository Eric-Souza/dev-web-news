import { articles } from '../../../data'

export default function handler(req, res) {
  const articleId = req.query.id

  const filtered = articles.filter(
    article => article.id === articleId
  )

  if (filtered.length > 0) {
    return res.status(200).json(filtered[0])
  } 
  
  else {
    res.status(404).json({message: `Article with id ${articleId} not found`})
  }
}