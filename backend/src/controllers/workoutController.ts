import express , {Request, Response} from 'express'

function getAll(req: Request, res: Response) {
    res.json({message: "GET ALL WORKOUT"})
}

function getSingle(req: Request, res: Response) {
    res.json({message: "GET ALL WORKOUT"})
}

function del(req: Request, res: Response) {
    res.send({message: "DELETE a WORKOUT"})
}

function patch(req: Request, res: Response) {
    res.send({message: "patch a  WORKOUT"})
}

function post(req: Request, res: Response) {
    res.send({message: "post WORKOUT"})
}

export default {getSingle, getAll, del, post, patch} 