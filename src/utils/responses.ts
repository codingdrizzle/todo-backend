import { Response } from "express";

export const NewResourceCreatedResponse = (expressResponse: Response, data: any) : Response => expressResponse.status(201).json({ code: 201, data: data, message: 'Successfully created' })

export const FetchResourcesResponse = (expressResponse: Response, data: any): Response => expressResponse.status(201).json({ code: 200, data: data, message: 'Successfully retrieved resources' })

export const ResourceAlreadyExistsResponse = (expressResponse: Response):Response => expressResponse.status(409).json({code: 409, message: 'Resource already exists'})

export const ResourceNotFoundResponse = (expressResponse: Response): Response => expressResponse.status(409).json({code: 409, message: 'Resource not found'})