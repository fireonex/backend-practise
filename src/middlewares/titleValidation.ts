import {body} from "express-validator";

export const titleValidation = body('title').trim().isLength({min: 3, max: 30})
    .withMessage('title length should be from 3 to 30 symbols')