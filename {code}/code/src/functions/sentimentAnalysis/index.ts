import {APIGatwayProxyEvent} from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';

export const handler = async (event: APIGatewayProxyEvent)
try {
    //Your code here
    const body = JSON.parse(event.body || "{}");

    const { text } = body

    if (!text) {
        return {
            statusCOde: 400,
            body = JSON.stringify({
                message: 'body requires a field of "text" to be valid'
            }),
        }
    }

    const response = await analyseSentiment({ text});
    return formatJSONResponse(response);
} catch (error) {
    console.error(error);
    return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message})
    }
}
const analyseSentiment = async { text }: {text: string}
    return {
        textAnalysed: text,
        result: "fake"
    };

