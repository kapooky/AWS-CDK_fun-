import * as cdk from '@aws-cdk/core';
import * as sqs from '@aws-cdk/aws-sqs';

import * as apigw from '@aws-cdk/aws-apigateway';


import * as lambda from '@aws-cdk/aws-lambda';

export class CdkStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const hello = new lambda.Function(this, "HelloHandler",
            {
                runtime: lambda.Runtime.NODEJS_14_X,
                code: lambda.Code.fromAsset('lambda'),
                handler: "hello.handler"
            });
        // defines an API Gateway REST API resource backed by our "hello" function.
        new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: hello
        });
    }

    // The code that defines your stack goes here

}
