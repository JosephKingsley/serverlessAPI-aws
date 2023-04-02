import { AWS } from '@serverless/typescript';

const functions: AWS["functions"] = {
    sentimentAnalysis: {
        handler: "src/functions/sentimentAnalysis/index.handle"
        events: [
            {
                http: {
                    method: "post",
                    path: "sentiment-analysis",
                },
            },
        ],
    },
};

export default functions;