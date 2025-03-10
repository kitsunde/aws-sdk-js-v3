<!-- generated file, do not edit directly -->

# @aws-sdk/client-dataexchange

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-dataexchange/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-dataexchange)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-dataexchange.svg)](https://www.npmjs.com/package/@aws-sdk/client-dataexchange)

## Description

AWS SDK for JavaScript DataExchange Client for Node.js, Browser and React Native.

<p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud.</p>
<p>As a subscriber, you can view and access the data sets that you have an entitlement to through
a subscription. You can use the APIs to download or copy your entitled data sets to Amazon
Simple Storage Service (Amazon S3) for use across a variety of AWS analytics and machine
learning services.</p>
<p>As a provider, you can create and manage your data sets that you would like to publish to a
product. Being able to package and provide your data sets into products requires a few
steps to determine eligibility. For more information, visit the <i>AWS Data Exchange
User Guide</i>.</p>
<p>A data set is a collection of data that can be changed or updated over time. Data sets can be
updated using revisions, which represent a new version or incremental change to a data set.
A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data
that can be stored as an Amazon S3 object, Redshift datashare, API Gateway API, AWS Lake
Formation data permission, or Amazon S3 data access. The asset can be a structured data
file, an image file, or some other data file. Jobs are asynchronous import or export
operations used to create or copy assets.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-dataexchange
using your favorite package manager:

- `npm install @aws-sdk/client-dataexchange`
- `yarn add @aws-sdk/client-dataexchange`
- `pnpm add @aws-sdk/client-dataexchange`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DataExchangeClient` and
the commands you need, for example `CancelJobCommand`:

```js
// ES5 example
const { DataExchangeClient, CancelJobCommand } = require("@aws-sdk/client-dataexchange");
```

```ts
// ES6+ example
import { DataExchangeClient, CancelJobCommand } from "@aws-sdk/client-dataexchange";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DataExchangeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CancelJobCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-dataexchange";
const client = new AWS.DataExchange({ region: "REGION" });

// async/await.
try {
  const data = await client.cancelJob(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .cancelJob(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.cancelJob(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-dataexchange` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/canceljobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/canceljobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/canceljobcommandoutput.html)

</details>
<details>
<summary>
CreateDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/createdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/createdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/createdatasetcommandoutput.html)

</details>
<details>
<summary>
CreateEventAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/createeventactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/createeventactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/createeventactioncommandoutput.html)

</details>
<details>
<summary>
CreateJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/createjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/createjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/createjobcommandoutput.html)

</details>
<details>
<summary>
CreateRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/createrevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/createrevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/createrevisioncommandoutput.html)

</details>
<details>
<summary>
DeleteAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/deleteassetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/deleteassetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/deleteassetcommandoutput.html)

</details>
<details>
<summary>
DeleteDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/deletedatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/deletedatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/deletedatasetcommandoutput.html)

</details>
<details>
<summary>
DeleteEventAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/deleteeventactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/deleteeventactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/deleteeventactioncommandoutput.html)

</details>
<details>
<summary>
DeleteRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/deleterevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/deleterevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/deleterevisioncommandoutput.html)

</details>
<details>
<summary>
GetAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/getassetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/getassetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/getassetcommandoutput.html)

</details>
<details>
<summary>
GetDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/getdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/getdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/getdatasetcommandoutput.html)

</details>
<details>
<summary>
GetEventAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/geteventactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/geteventactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/geteventactioncommandoutput.html)

</details>
<details>
<summary>
GetJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/getjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/getjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/getjobcommandoutput.html)

</details>
<details>
<summary>
GetRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/getrevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/getrevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/getrevisioncommandoutput.html)

</details>
<details>
<summary>
ListDataSetRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/listdatasetrevisionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listdatasetrevisionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listdatasetrevisionscommandoutput.html)

</details>
<details>
<summary>
ListDataSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/listdatasetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listdatasetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listdatasetscommandoutput.html)

</details>
<details>
<summary>
ListEventActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/listeventactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listeventactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listeventactionscommandoutput.html)

</details>
<details>
<summary>
ListJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/listjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listjobscommandoutput.html)

</details>
<details>
<summary>
ListRevisionAssets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/listrevisionassetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listrevisionassetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listrevisionassetscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
RevokeRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/revokerevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/revokerevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/revokerevisioncommandoutput.html)

</details>
<details>
<summary>
SendApiAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/sendapiassetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/sendapiassetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/sendapiassetcommandoutput.html)

</details>
<details>
<summary>
StartJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/startjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/startjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/startjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAsset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/updateassetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/updateassetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/updateassetcommandoutput.html)

</details>
<details>
<summary>
UpdateDataSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/updatedatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/updatedatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/updatedatasetcommandoutput.html)

</details>
<details>
<summary>
UpdateEventAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/updateeventactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/updateeventactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/updateeventactioncommandoutput.html)

</details>
<details>
<summary>
UpdateRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/classes/updaterevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/updaterevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dataexchange/interfaces/updaterevisioncommandoutput.html)

</details>
