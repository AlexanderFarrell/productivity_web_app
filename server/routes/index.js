import { Router } from "express";
import { render } from "../core/template.js";
 
export const index_router = Router()

index_router.get('/', (req, res) => {
    render(req, res, 'home.ejs', 'Home')
})
