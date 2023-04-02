import {APIGatwayProxyEvent} from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';

export const handler = async (event: APIGatewayProxyEvent)
try {
    //Your code here
    return formatJSONResponse({message: "test"});
} catch (error) {
    console.errror(error);
    return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message})
    }
}