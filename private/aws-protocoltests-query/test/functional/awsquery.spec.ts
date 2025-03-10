// smithy-typescript generated code
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { Encoder as __Encoder } from "@aws-sdk/types";
import { HeaderBag, HttpHandlerOptions } from "@aws-sdk/types";
import { Readable } from "stream";

import { DatetimeOffsetsCommand } from "../../src/commands/DatetimeOffsetsCommand";
import { EmptyInputAndEmptyOutputCommand } from "../../src/commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommand } from "../../src/commands/EndpointOperationCommand";
import { EndpointWithHostLabelOperationCommand } from "../../src/commands/EndpointWithHostLabelOperationCommand";
import { FlattenedXmlMapCommand } from "../../src/commands/FlattenedXmlMapCommand";
import { FlattenedXmlMapWithXmlNameCommand } from "../../src/commands/FlattenedXmlMapWithXmlNameCommand";
import { FlattenedXmlMapWithXmlNamespaceCommand } from "../../src/commands/FlattenedXmlMapWithXmlNamespaceCommand";
import { FractionalSecondsCommand } from "../../src/commands/FractionalSecondsCommand";
import { GreetingWithErrorsCommand } from "../../src/commands/GreetingWithErrorsCommand";
import { HostWithPathOperationCommand } from "../../src/commands/HostWithPathOperationCommand";
import { IgnoresWrappingXmlNameCommand } from "../../src/commands/IgnoresWrappingXmlNameCommand";
import { NestedStructuresCommand } from "../../src/commands/NestedStructuresCommand";
import { NoInputAndNoOutputCommand } from "../../src/commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommand } from "../../src/commands/NoInputAndOutputCommand";
import { QueryIdempotencyTokenAutoFillCommand } from "../../src/commands/QueryIdempotencyTokenAutoFillCommand";
import { QueryListsCommand } from "../../src/commands/QueryListsCommand";
import { QueryMapsCommand } from "../../src/commands/QueryMapsCommand";
import { QueryTimestampsCommand } from "../../src/commands/QueryTimestampsCommand";
import { RecursiveXmlShapesCommand } from "../../src/commands/RecursiveXmlShapesCommand";
import { SimpleInputParamsCommand } from "../../src/commands/SimpleInputParamsCommand";
import { SimpleScalarXmlPropertiesCommand } from "../../src/commands/SimpleScalarXmlPropertiesCommand";
import { XmlBlobsCommand } from "../../src/commands/XmlBlobsCommand";
import { XmlEmptyBlobsCommand } from "../../src/commands/XmlEmptyBlobsCommand";
import { XmlEmptyListsCommand } from "../../src/commands/XmlEmptyListsCommand";
import { XmlEmptyMapsCommand } from "../../src/commands/XmlEmptyMapsCommand";
import { XmlEnumsCommand } from "../../src/commands/XmlEnumsCommand";
import { XmlIntEnumsCommand } from "../../src/commands/XmlIntEnumsCommand";
import { XmlListsCommand } from "../../src/commands/XmlListsCommand";
import { XmlMapsCommand } from "../../src/commands/XmlMapsCommand";
import { XmlMapsXmlNameCommand } from "../../src/commands/XmlMapsXmlNameCommand";
import { XmlNamespacesCommand } from "../../src/commands/XmlNamespacesCommand";
import { XmlTimestampsCommand } from "../../src/commands/XmlTimestampsCommand";
import { QueryProtocolClient } from "../../src/QueryProtocolClient";

/**
 * Throws an expected exception that contains the serialized request.
 */
class EXPECTED_REQUEST_SERIALIZATION_ERROR extends Error {
  constructor(readonly request: HttpRequest) {
    super();
  }
}

/**
 * Throws an EXPECTED_REQUEST_SERIALIZATION_ERROR error before sending a
 * request. The thrown exception contains the serialized request.
 */
class RequestSerializationTestHandler implements HttpHandler {
  handle(request: HttpRequest, options?: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
    return Promise.reject(new EXPECTED_REQUEST_SERIALIZATION_ERROR(request));
  }
}

/**
 * Returns a resolved Promise of the specified response contents.
 */
class ResponseDeserializationTestHandler implements HttpHandler {
  isSuccess: boolean;
  code: number;
  headers: HeaderBag;
  body: String;

  constructor(isSuccess: boolean, code: number, headers?: HeaderBag, body?: String) {
    this.isSuccess = isSuccess;
    this.code = code;
    if (headers === undefined) {
      this.headers = {};
    } else {
      this.headers = headers;
    }
    if (body === undefined) {
      body = "";
    }
    this.body = body;
  }

  handle(request: HttpRequest, options?: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
    return Promise.resolve({
      response: new HttpResponse({
        statusCode: this.code,
        headers: this.headers,
        body: Readable.from([this.body]),
      }),
    });
  }
}

interface comparableParts {
  [key: string]: string;
}

/**
 * Generates a standard map of un-equal values given input parts.
 */
const compareParts = (expectedParts: comparableParts, generatedParts: comparableParts) => {
  const unequalParts: any = {};
  Object.keys(expectedParts).forEach((key) => {
    if (generatedParts[key] === undefined) {
      unequalParts[key] = { exp: expectedParts[key], gen: undefined };
    } else if (!equivalentContents(expectedParts[key], generatedParts[key])) {
      unequalParts[key] = { exp: expectedParts[key], gen: generatedParts[key] };
    }
  });

  Object.keys(generatedParts).forEach((key) => {
    if (expectedParts[key] === undefined) {
      unequalParts[key] = { exp: undefined, gen: generatedParts[key] };
    }
  });

  if (Object.keys(unequalParts).length !== 0) {
    return unequalParts;
  }
  return undefined;
};

/**
 * Compares all types for equivalent contents, doing nested
 * equality checks based on non-`$metadata`
 * properties that have defined values.
 */
const equivalentContents = (expected: any, generated: any): boolean => {
  const localExpected = expected;

  // Short circuit on equality.
  if (localExpected == generated) {
    return true;
  }

  // If a test fails with an issue in the below 6 lines, it's likely
  // due to an issue in the nestedness or existence of the property
  // being compared.
  delete localExpected["$metadata"];
  delete generated["$metadata"];
  Object.keys(localExpected).forEach((key) => localExpected[key] === undefined && delete localExpected[key]);
  Object.keys(generated).forEach((key) => generated[key] === undefined && delete generated[key]);

  const expectedProperties = Object.getOwnPropertyNames(localExpected);
  const generatedProperties = Object.getOwnPropertyNames(generated);

  // Short circuit on different property counts.
  if (expectedProperties.length != generatedProperties.length) {
    return false;
  }

  // Compare properties directly.
  for (let index = 0; index < expectedProperties.length; index++) {
    const propertyName = expectedProperties[index];
    if (!equivalentContents(localExpected[propertyName], generated[propertyName])) {
      return false;
    }
  }

  return true;
};

const clientParams = {
  region: "us-west-2",
  credentials: { accessKeyId: "key", secretAccessKey: "secret" },
};

/**
 * A wrapper function that shadows `fail` from jest-jasmine2
 * (jasmine2 was replaced with circus in > v27 as the default test runner)
 */
const fail = (error?: any): never => {
  throw new Error(error);
};

/**
 * Ensures that clients can correctly parse datetime (timestamps) with offsets
 */
it("AwsQueryDateTimeWithNegativeOffset:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<DatetimeOffsetsResponse xmlns="https://example.com/">
          <DatetimeOffsetsResult>
              <datetime>2019-12-16T22:48:18-01:00</datetime>
          </DatetimeOffsetsResult>
      </DatetimeOffsetsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new DatetimeOffsetsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      datetime: new Date(1576540098000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that clients can correctly parse datetime (timestamps) with offsets
 */
it("AwsQueryDateTimeWithPositiveOffset:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<DatetimeOffsetsResponse xmlns="https://example.com/">
          <DatetimeOffsetsResult>
              <datetime>2019-12-17T00:48:18+01:00</datetime>
          </DatetimeOffsetsResult>
      </DatetimeOffsetsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new DatetimeOffsetsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      datetime: new Date(1576540098000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Empty input serializes no extra query params
 */
it("QueryEmptyInputAndEmptyOutput:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new EmptyInputAndEmptyOutputCommand({} as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=EmptyInputAndEmptyOutput&Version=2020-01-08`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Empty output
 */
it("QueryEmptyInputAndEmptyOutput:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined),
  });

  const params: any = {};
  const command = new EmptyInputAndEmptyOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait.
 */
it("AwsQueryEndpointTrait:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    endpoint: "https://example.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new EndpointOperationCommand({});
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=EndpointOperation&Version=2020-01-08`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait, and can use the host label trait to define
 * further customization based on user input.
 */
it("AwsQueryEndpointTraitWithHostLabel:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    endpoint: "https://example.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new EndpointWithHostLabelOperationCommand({
    label: "bar",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=EndpointWithHostLabelOperation&Version=2020-01-08&label=bar`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes flattened XML maps in responses
 */
it("QueryQueryFlattenedXmlMap:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<FlattenedXmlMapResponse xmlns="https://example.com/">
          <FlattenedXmlMapResult>
              <myMap>
                  <key>foo</key>
                  <value>Foo</value>
              </myMap>
              <myMap>
                  <key>baz</key>
                  <value>Baz</value>
              </myMap>
          </FlattenedXmlMapResult>
      </FlattenedXmlMapResponse>`
    ),
  });

  const params: any = {};
  const command = new FlattenedXmlMapCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      myMap: {
        foo: "Foo",

        baz: "Baz",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes flattened XML maps in responses that have xmlName on members
 */
it("QueryQueryFlattenedXmlMapWithXmlName:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<FlattenedXmlMapWithXmlNameResponse xmlns="https://example.com/">
          <FlattenedXmlMapWithXmlNameResult>
              <KVP>
                  <K>a</K>
                  <V>A</V>
              </KVP>
              <KVP>
                  <K>b</K>
                  <V>B</V>
              </KVP>
          </FlattenedXmlMapWithXmlNameResult>
      </FlattenedXmlMapWithXmlNameResponse>`
    ),
  });

  const params: any = {};
  const command = new FlattenedXmlMapWithXmlNameCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      myMap: {
        a: "A",

        b: "B",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes flattened XML maps in responses that have xmlNamespace and xmlName on members
 */
it("QueryQueryFlattenedXmlMapWithXmlNamespace:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<FlattenedXmlMapWithXmlNamespaceResponse xmlns="https://example.com/">
          <FlattenedXmlMapWithXmlNamespaceResult>
              <KVP xmlns="https://the-member.example.com">
                  <K xmlns="https://the-key.example.com">a</K>
                  <V xmlns="https://the-value.example.com">A</V>
              </KVP>
              <KVP xmlns="https://the-member.example.com">
                  <K xmlns="https://the-key.example.com">b</K>
                  <V xmlns="https://the-value.example.com">B</V>
              </KVP>
          </FlattenedXmlMapWithXmlNamespaceResult>
      </FlattenedXmlMapWithXmlNamespaceResponse>`
    ),
  });

  const params: any = {};
  const command = new FlattenedXmlMapWithXmlNamespaceCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      myMap: {
        a: "A",

        b: "B",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that clients can correctly parse datetime timestamps with fractional seconds
 */
it("AwsQueryDateTimeWithFractionalSeconds:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<FractionalSecondsResponse xmlns="https://example.com/">
          <FractionalSecondsResult>
              <datetime>2000-01-02T20:34:56.123Z</datetime>
          </FractionalSecondsResult>
      </FractionalSecondsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new FractionalSecondsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      datetime: new Date(9.46845296123e8000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that clients can correctly parse http-date timestamps with fractional seconds
 */
it("AwsQueryHttpDateWithFractionalSeconds:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<FractionalSecondsResponse xmlns="https://example.com/">
          <FractionalSecondsResult>
              <httpdate>Sun, 02 Jan 2000 20:34:56.456 GMT</httpdate>
          </FractionalSecondsResult>
      </FractionalSecondsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new FractionalSecondsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      httpdate: new Date(9.46845296456e8000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that operations with errors successfully know how to deserialize the successful response
 */
it("QueryGreetingWithErrors:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<GreetingWithErrorsResponse xmlns="https://example.com/">
          <GreetingWithErrorsResult>
              <greeting>Hello</greeting>
          </GreetingWithErrorsResult>
      </GreetingWithErrorsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      greeting: "Hello",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses simple XML errors
 */
it("QueryInvalidGreetingError:Error:GreetingWithErrors", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "text/xml",
      },
      `<ErrorResponse>
         <Error>
            <Type>Sender</Type>
            <Code>InvalidGreeting</Code>
            <Message>Hi</Message>
         </Error>
         <RequestId>foo-id</RequestId>
      </ErrorResponse>
      `
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "InvalidGreeting") {
      console.log(err);
      fail(`Expected a InvalidGreeting to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(400);
    const paramsToValidate: any = [
      {
        message: "Hi",
      },
    ][0];
    Object.keys(paramsToValidate).forEach((param) => {
      expect(r[param]).toBeDefined();
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    });
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Parses customized XML errors
 */
it("QueryCustomizedError:Error:GreetingWithErrors", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      402,
      {
        "content-type": "text/xml",
      },
      `<ErrorResponse>
         <Error>
            <Type>Sender</Type>
            <Code>Customized</Code>
            <Message>Hi</Message>
         </Error>
         <RequestId>foo-id</RequestId>
      </ErrorResponse>
      `
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "CustomCodeError") {
      console.log(err);
      fail(`Expected a CustomCodeError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(402);
    const paramsToValidate: any = [
      {
        message: "Hi",
      },
    ][0];
    Object.keys(paramsToValidate).forEach((param) => {
      expect(r[param]).toBeDefined();
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    });
    return;
  }
  fail("Expected an exception to be thrown from response");
});

it("QueryComplexError:Error:GreetingWithErrors", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "text/xml",
      },
      `<ErrorResponse>
         <Error>
            <Type>Sender</Type>
            <Code>ComplexError</Code>
            <TopLevel>Top level</TopLevel>
            <Nested>
                <Foo>bar</Foo>
            </Nested>
         </Error>
         <RequestId>foo-id</RequestId>
      </ErrorResponse>
      `
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "ComplexError") {
      console.log(err);
      fail(`Expected a ComplexError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(400);
    const paramsToValidate: any = [
      {
        TopLevel: "Top level",

        Nested: {
          Foo: "bar",
        },
      },
    ][0];
    Object.keys(paramsToValidate).forEach((param) => {
      expect(r[param]).toBeDefined();
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    });
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Custom endpoints supplied by users can have paths
 */
it("QueryHostWithPath:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    endpoint: "https://example.com/custom",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HostWithPathOperationCommand({});
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/custom/");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=HostWithPathOperation&Version=2020-01-08`;
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * The xmlName trait on the output structure is ignored in AWS Query
 */
it("QueryIgnoresWrappingXmlName:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<IgnoresWrappingXmlNameResponse xmlns="https://example.com/">
          <IgnoresWrappingXmlNameResult>
              <foo>bar</foo>
          </IgnoresWrappingXmlNameResult>
      </IgnoresWrappingXmlNameResponse>
      `
    ),
  });

  const params: any = {};
  const command = new IgnoresWrappingXmlNameCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      foo: "bar",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes nested structures using dots
 */
it("NestedStructures:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new NestedStructuresCommand({
    Nested: {
      StringArg: "foo",

      OtherArg: true,

      RecursiveArg: {
        StringArg: "baz",
      } as any,
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=NestedStructures&Version=2020-01-08&Nested.StringArg=foo&Nested.OtherArg=true&Nested.RecursiveArg.StringArg=baz`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * No input serializes no additional query params
 */
it("QueryNoInputAndNoOutput:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new NoInputAndNoOutputCommand({});
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=NoInputAndNoOutput&Version=2020-01-08`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Empty output. Note that no assertion is made on the output body itself.
 */
it("QueryNoInputAndNoOutput:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined),
  });

  const params: any = {};
  const command = new NoInputAndNoOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * No input serializes no payload
 */
it("QueryNoInputAndOutput:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new NoInputAndOutputCommand({} as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=NoInputAndOutput&Version=2020-01-08`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Empty output
 */
it("QueryNoInputAndOutput:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined),
  });

  const params: any = {};
  const command = new NoInputAndOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Automatically adds idempotency token when not set
 */
it("QueryProtocolIdempotencyTokenAutoFill:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryIdempotencyTokenAutoFillCommand({
    token: "00000000-0000-4000-8000-000000000000",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryIdempotencyTokenAutoFill&Version=2020-01-08&token=00000000-0000-4000-8000-000000000000`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Uses the given idempotency token as-is
 */
it("QueryProtocolIdempotencyTokenAutoFillIsSet:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryIdempotencyTokenAutoFillCommand({
    token: "00000000-0000-4000-8000-000000000123",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryIdempotencyTokenAutoFill&Version=2020-01-08&token=00000000-0000-4000-8000-000000000123`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query lists
 */
it("QueryLists:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryListsCommand({
    ListArg: ["foo", "bar", "baz"],

    ComplexListArg: [
      {
        hi: "hello",
      } as any,

      {
        hi: "hola",
      } as any,
    ],
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryLists&Version=2020-01-08&ListArg.member.1=foo&ListArg.member.2=bar&ListArg.member.3=baz&ComplexListArg.member.1.hi=hello&ComplexListArg.member.2.hi=hola`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes empty query lists
 */
it("EmptyQueryLists:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryListsCommand({
    ListArg: [],
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryLists&Version=2020-01-08&ListArg=`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Flattens query lists by repeating the member name and removing the member element
 */
it("FlattenedQueryLists:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryListsCommand({
    FlattenedListArg: ["A", "B"],
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryLists&Version=2020-01-08&FlattenedListArg.1=A&FlattenedListArg.2=B`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Changes the member of lists using xmlName trait
 */
it("QueryListArgWithXmlNameMember:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryListsCommand({
    ListArgWithXmlNameMember: ["A", "B"],
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryLists&Version=2020-01-08&ListArgWithXmlNameMember.item.1=A&ListArgWithXmlNameMember.item.2=B`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Changes the name of flattened lists using xmlName trait on the structure member
 */
it("QueryFlattenedListArgWithXmlName:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryListsCommand({
    FlattenedListArgWithXmlName: ["A", "B"],
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryLists&Version=2020-01-08&Hi.1=A&Hi.2=B`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Nested structure with a list member
 */
it("QueryNestedStructWithList:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryListsCommand({
    NestedWithList: {
      ListArg: ["A", "B"],
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryLists&Version=2020-01-08&NestedWithList.ListArg.member.1=A&NestedWithList.ListArg.member.2=B`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query maps
 */
it("QuerySimpleQueryMaps:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    MapArg: {
      bar: "Bar",

      foo: "Foo",
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08&MapArg.entry.1.key=bar&MapArg.entry.1.value=Bar&MapArg.entry.2.key=foo&MapArg.entry.2.value=Foo`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query maps and uses xmlName
 */
it("QuerySimpleQueryMapsWithXmlName:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    RenamedMapArg: {
      foo: "Foo",
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08&Foo.entry.1.key=foo&Foo.entry.1.value=Foo`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes complex query maps
 */
it("QueryComplexQueryMaps:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    ComplexMapArg: {
      bar: {
        hi: "Bar",
      } as any,

      foo: {
        hi: "Foo",
      } as any,
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08&ComplexMapArg.entry.1.key=bar&ComplexMapArg.entry.1.value.hi=Bar&ComplexMapArg.entry.2.key=foo&ComplexMapArg.entry.2.value.hi=Foo`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Does not serialize empty query maps
 */
it("QueryEmptyQueryMaps:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    MapArg: {} as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query maps where the member has an xmlName trait
 */
it("QueryQueryMapWithMemberXmlName:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    MapWithXmlMemberName: {
      bar: "Bar",

      foo: "Foo",
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08&MapWithXmlMemberName.entry.1.K=bar&MapWithXmlMemberName.entry.1.V=Bar&MapWithXmlMemberName.entry.2.K=foo&MapWithXmlMemberName.entry.2.V=Foo`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes flattened query maps
 */
it("QueryFlattenedQueryMaps:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    FlattenedMap: {
      bar: "Bar",

      foo: "Foo",
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08&FlattenedMap.1.key=bar&FlattenedMap.1.value=Bar&FlattenedMap.2.key=foo&FlattenedMap.2.value=Foo`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes flattened query maps that use an xmlName
 */
it("QueryFlattenedQueryMapsWithXmlName:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    FlattenedMapWithXmlName: {
      bar: "Bar",

      foo: "Foo",
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08&Hi.1.K=bar&Hi.1.V=Bar&Hi.2.K=foo&Hi.2.V=Foo`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query map of lists
 */
it("QueryQueryMapOfLists:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    MapOfLists: {
      bar: ["C", "D"],

      foo: ["A", "B"],
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08&MapOfLists.entry.1.key=bar&MapOfLists.entry.1.value.member.1=C&MapOfLists.entry.1.value.member.2=D&MapOfLists.entry.2.key=foo&MapOfLists.entry.2.value.member.1=A&MapOfLists.entry.2.value.member.2=B`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes nested struct with map member
 */
it("QueryNestedStructWithMap:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryMapsCommand({
    NestedStructWithMap: {
      MapArg: {
        bar: "Bar",

        foo: "Foo",
      } as any,
    } as any,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryMaps&Version=2020-01-08&NestedStructWithMap.MapArg.entry.1.key=bar&NestedStructWithMap.MapArg.entry.1.value=Bar&NestedStructWithMap.MapArg.entry.2.key=foo&NestedStructWithMap.MapArg.entry.2.value=Foo`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes timestamps
 */
it("QueryTimestampsInput:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryTimestampsCommand({
    normalFormat: new Date(1422172800000),

    epochMember: new Date(1422172800000),

    epochTarget: new Date(1422172800000),
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=QueryTimestamps&Version=2020-01-08&normalFormat=2015-01-25T08%3A00%3A00Z&epochMember=1422172800&epochTarget=1422172800`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes recursive structures
 */
it("QueryRecursiveShapes:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<RecursiveXmlShapesResponse xmlns="https://example.com/">
          <RecursiveXmlShapesResult>
              <nested>
                  <foo>Foo1</foo>
                  <nested>
                      <bar>Bar1</bar>
                      <recursiveMember>
                          <foo>Foo2</foo>
                          <nested>
                              <bar>Bar2</bar>
                          </nested>
                      </recursiveMember>
                  </nested>
              </nested>
          </RecursiveXmlShapesResult>
      </RecursiveXmlShapesResponse>
      `
    ),
  });

  const params: any = {};
  const command = new RecursiveXmlShapesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      nested: {
        foo: "Foo1",

        nested: {
          bar: "Bar1",

          recursiveMember: {
            foo: "Foo2",

            nested: {
              bar: "Bar2",
            },
          },
        },
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes strings
 */
it("QuerySimpleInputParamsStrings:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    Foo: "val1",

    Bar: "val2",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&Foo=val1&Bar=val2`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes booleans that are true
 */
it("QuerySimpleInputParamsStringAndBooleanTrue:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    Foo: "val1",

    Baz: true,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&Foo=val1&Baz=true`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes booleans that are false
 */
it("QuerySimpleInputParamsStringsAndBooleanFalse:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    Baz: false,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&Baz=false`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes integers
 */
it("QuerySimpleInputParamsInteger:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    Bam: 10,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&Bam=10`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes floats
 */
it("QuerySimpleInputParamsFloat:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    Boo: 10.8,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&Boo=10.8`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Blobs are base64 encoded in the query string
 */
it("QuerySimpleInputParamsBlob:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    Qux: Uint8Array.from("value", (c) => c.charCodeAt(0)),
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&Qux=dmFsdWU%3D`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes enums in the query string
 */
it("QueryEnums:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    FooEnum: "Foo",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&FooEnum=Foo`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes intEnums in the query string
 */
it("QueryIntEnums:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    IntegerEnum: 1,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&IntegerEnum=1`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling NaN float values.
 */
it("AwsQuerySupportsNaNFloatInputs:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    FloatValue: NaN,

    Boo: NaN,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&FloatValue=NaN&Boo=NaN`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling Infinity float values.
 */
it("AwsQuerySupportsInfinityFloatInputs:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    FloatValue: Infinity,

    Boo: Infinity,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&FloatValue=Infinity&Boo=Infinity`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling -Infinity float values.
 */
it("AwsQuerySupportsNegativeInfinityFloatInputs:Request", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleInputParamsCommand({
    FloatValue: -Infinity,

    Boo: -Infinity,
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `Action=SimpleInputParams&Version=2020-01-08&FloatValue=-Infinity&Boo=-Infinity`;
    const unequalParts: any = compareEquivalentFormUrlencodedBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("QuerySimpleScalarProperties:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<SimpleScalarXmlPropertiesResponse xmlns="https://example.com/">
          <SimpleScalarXmlPropertiesResult>
              <stringValue>string</stringValue>
              <emptyStringValue/>
              <trueBooleanValue>true</trueBooleanValue>
              <falseBooleanValue>false</falseBooleanValue>
              <byteValue>1</byteValue>
              <shortValue>2</shortValue>
              <integerValue>3</integerValue>
              <longValue>4</longValue>
              <floatValue>5.5</floatValue>
              <DoubleDribble>6.5</DoubleDribble>
          </SimpleScalarXmlPropertiesResult>
      </SimpleScalarXmlPropertiesResponse>
      `
    ),
  });

  const params: any = {};
  const command = new SimpleScalarXmlPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      stringValue: "string",

      emptyStringValue: "",

      trueBooleanValue: true,

      falseBooleanValue: false,

      byteValue: 1,

      shortValue: 2,

      integerValue: 3,

      longValue: 4,

      floatValue: 5.5,

      doubleValue: 6.5,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling NaN float values.
 */
it("AwsQuerySupportsNaNFloatOutputs:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<SimpleScalarXmlPropertiesResponse xmlns="https://example.com/">
          <SimpleScalarXmlPropertiesResult>
              <floatValue>NaN</floatValue>
              <DoubleDribble>NaN</DoubleDribble>
          </SimpleScalarXmlPropertiesResult>
      </SimpleScalarXmlPropertiesResponse>
      `
    ),
  });

  const params: any = {};
  const command = new SimpleScalarXmlPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      floatValue: NaN,

      doubleValue: NaN,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling Infinity float values.
 */
it("AwsQuerySupportsInfinityFloatOutputs:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<SimpleScalarXmlPropertiesResponse xmlns="https://example.com/">
          <SimpleScalarXmlPropertiesResult>
              <floatValue>Infinity</floatValue>
              <DoubleDribble>Infinity</DoubleDribble>
          </SimpleScalarXmlPropertiesResult>
      </SimpleScalarXmlPropertiesResponse>
      `
    ),
  });

  const params: any = {};
  const command = new SimpleScalarXmlPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      floatValue: Infinity,

      doubleValue: Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling -Infinity float values.
 */
it("AwsQuerySupportsNegativeInfinityFloatOutputs:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<SimpleScalarXmlPropertiesResponse xmlns="https://example.com/">
          <SimpleScalarXmlPropertiesResult>
              <floatValue>-Infinity</floatValue>
              <DoubleDribble>-Infinity</DoubleDribble>
          </SimpleScalarXmlPropertiesResult>
      </SimpleScalarXmlPropertiesResponse>
      `
    ),
  });

  const params: any = {};
  const command = new SimpleScalarXmlPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      floatValue: -Infinity,

      doubleValue: -Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Blobs are base64 encoded
 */
it("QueryXmlBlobs:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlBlobsResponse xmlns="https://example.com/">
          <XmlBlobsResult>
              <data>dmFsdWU=</data>
          </XmlBlobsResult>
      </XmlBlobsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlBlobsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      data: Uint8Array.from("value", (c) => c.charCodeAt(0)),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Empty blobs are deserialized as empty string
 */
it("QueryXmlEmptyBlobs:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlEmptyBlobsResponse xmlns="https://example.com/">
          <XmlEmptyBlobsResult>
              <data></data>
          </XmlEmptyBlobsResult>
      </XmlEmptyBlobsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlEmptyBlobsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      data: Uint8Array.from("", (c) => c.charCodeAt(0)),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Empty self closed blobs are deserialized as empty string
 */
it("QueryXmlEmptySelfClosedBlobs:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlEmptyBlobsResponse xmlns="https://example.com/">
          <XmlEmptyBlobsResult>
              <data/>
          </XmlEmptyBlobsResult>
      </XmlEmptyBlobsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlEmptyBlobsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      data: Uint8Array.from("", (c) => c.charCodeAt(0)),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes empty XML lists
 */
it("QueryXmlEmptyLists:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlEmptyListsResponse xmlns="https://example.com/">
          <XmlEmptyListsResult>
              <stringList/>
              <stringSet></stringSet>
          </XmlEmptyListsResult>
      </XmlEmptyListsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlEmptyListsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      stringList: [],

      stringSet: [],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes Empty XML maps
 */
it("QueryXmlEmptyMaps:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlEmptyMapsResponse xmlns="https://example.com/">
          <XmlEmptyMapsResult>
              <myMap>
              </myMap>
          </XmlEmptyMapsResult>
      </XmlEmptyMapsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlEmptyMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      myMap: {},
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes Self-Closed XML maps
 */
it("QueryXmlEmptySelfClosedMaps:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlEmptyMapsResponse xmlns="https://example.com/">
          <XmlEmptyMapsResult>
              <myMap/>
          </XmlEmptyMapsResult>
      </XmlEmptyMapsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlEmptyMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      myMap: {},
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes simple scalar properties
 */
it("QueryXmlEnums:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlEnumsResponse xmlns="https://example.com/">
          <XmlEnumsResult>
              <fooEnum1>Foo</fooEnum1>
              <fooEnum2>0</fooEnum2>
              <fooEnum3>1</fooEnum3>
              <fooEnumList>
                  <member>Foo</member>
                  <member>0</member>
              </fooEnumList>
              <fooEnumSet>
                  <member>Foo</member>
                  <member>0</member>
              </fooEnumSet>
              <fooEnumMap>
                  <entry>
                      <key>hi</key>
                      <value>Foo</value>
                  </entry>
                  <entry>
                      <key>zero</key>
                      <value>0</value>
                  </entry>
              </fooEnumMap>
          </XmlEnumsResult>
      </XmlEnumsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlEnumsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      fooEnum1: "Foo",

      fooEnum2: "0",

      fooEnum3: "1",

      fooEnumList: ["Foo", "0"],

      fooEnumSet: ["Foo", "0"],

      fooEnumMap: {
        hi: "Foo",

        zero: "0",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes simple scalar properties
 */
it("QueryXmlIntEnums:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlIntEnumsResponse xmlns="https://example.com/">
          <XmlIntEnumsResult>
              <intEnum1>1</intEnum1>
              <intEnum2>2</intEnum2>
              <intEnum3>3</intEnum3>
              <intEnumList>
                  <member>1</member>
                  <member>2</member>
              </intEnumList>
              <intEnumSet>
                  <member>1</member>
                  <member>2</member>
              </intEnumSet>
              <intEnumMap>
                  <entry>
                      <key>a</key>
                      <value>1</value>
                  </entry>
                  <entry>
                      <key>b</key>
                      <value>2</value>
                  </entry>
              </intEnumMap>
          </XmlIntEnumsResult>
      </XmlIntEnumsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlIntEnumsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      intEnum1: 1,

      intEnum2: 2,

      intEnum3: 3,

      intEnumList: [
        1,

        2,
      ],

      intEnumSet: [
        1,

        2,
      ],

      intEnumMap: {
        a: 1,

        b: 2,
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests for XML list serialization
 */
it("QueryXmlLists:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlListsResponse xmlns="https://example.com/">
          <XmlListsResult>
              <stringList>
                  <member>foo</member>
                  <member>bar</member>
              </stringList>
              <stringSet>
                  <member>foo</member>
                  <member>bar</member>
              </stringSet>
              <integerList>
                  <member>1</member>
                  <member>2</member>
              </integerList>
              <booleanList>
                  <member>true</member>
                  <member>false</member>
              </booleanList>
              <timestampList>
                  <member>2014-04-29T18:30:38Z</member>
                  <member>2014-04-29T18:30:38Z</member>
              </timestampList>
              <enumList>
                  <member>Foo</member>
                  <member>0</member>
              </enumList>
              <intEnumList>
                  <member>1</member>
                  <member>2</member>
              </intEnumList>
              <nestedStringList>
                  <member>
                      <member>foo</member>
                      <member>bar</member>
                  </member>
                  <member>
                      <member>baz</member>
                      <member>qux</member>
                  </member>
              </nestedStringList>
              <renamed>
                  <item>foo</item>
                  <item>bar</item>
              </renamed>
              <flattenedList>hi</flattenedList>
              <flattenedList>bye</flattenedList>
              <customName>yep</customName>
              <customName>nope</customName>
              <flattenedListWithMemberNamespace xmlns="https://xml-member.example.com">a</flattenedListWithMemberNamespace>
              <flattenedListWithMemberNamespace xmlns="https://xml-member.example.com">b</flattenedListWithMemberNamespace>
              <flattenedListWithNamespace>a</flattenedListWithNamespace>
              <flattenedListWithNamespace>b</flattenedListWithNamespace>
              <myStructureList>
                  <item>
                      <value>1</value>
                      <other>2</other>
                  </item>
                  <item>
                      <value>3</value>
                      <other>4</other>
                  </item>
              </myStructureList>
          </XmlListsResult>
      </XmlListsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlListsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      stringList: ["foo", "bar"],

      stringSet: ["foo", "bar"],

      integerList: [
        1,

        2,
      ],

      booleanList: [true, false],

      timestampList: [new Date(1398796238000), new Date(1398796238000)],

      enumList: ["Foo", "0"],

      intEnumList: [
        1,

        2,
      ],

      nestedStringList: [
        ["foo", "bar"],

        ["baz", "qux"],
      ],

      renamedListMembers: ["foo", "bar"],

      flattenedList: ["hi", "bye"],

      flattenedList2: ["yep", "nope"],

      flattenedListWithMemberNamespace: ["a", "b"],

      flattenedListWithNamespace: ["a", "b"],

      structureList: [
        {
          a: "1",

          b: "2",
        },

        {
          a: "3",

          b: "4",
        },
      ],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests for XML map serialization
 */
it("QueryXmlMaps:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlMapsResponse xmlns="https://example.com/">
          <XmlMapsResult>
              <myMap>
                  <entry>
                      <key>foo</key>
                      <value>
                          <hi>there</hi>
                      </value>
                  </entry>
                  <entry>
                      <key>baz</key>
                      <value>
                          <hi>bye</hi>
                      </value>
                  </entry>
              </myMap>
          </XmlMapsResult>
      </XmlMapsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      myMap: {
        foo: {
          hi: "there",
        },

        baz: {
          hi: "bye",
        },
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes XML lists
 */
it("QueryQueryXmlMapsXmlName:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlMapsXmlNameResponse xmlns="https://example.com/">
          <XmlMapsXmlNameResult>
              <myMap>
                  <entry>
                      <Attribute>foo</Attribute>
                      <Setting>
                          <hi>there</hi>
                      </Setting>
                  </entry>
                  <entry>
                      <Attribute>baz</Attribute>
                      <Setting>
                          <hi>bye</hi>
                      </Setting>
                  </entry>
              </myMap>
          </XmlMapsXmlNameResult>
      </XmlMapsXmlNameResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlMapsXmlNameCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      myMap: {
        foo: {
          hi: "there",
        },

        baz: {
          hi: "bye",
        },
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes XML namespaces
 */
it("QueryXmlNamespaces:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlNamespacesResponse xmlns="https://example.com/">
          <XmlNamespacesResult>
              <nested>
                  <foo xmlns:baz="http://baz.com">Foo</foo>
                  <values xmlns="http://qux.com">
                      <member xmlns="http://bux.com">Bar</member>
                      <member xmlns="http://bux.com">Baz</member>
                  </values>
              </nested>
          </XmlNamespacesResult>
      </XmlNamespacesResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlNamespacesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      nested: {
        foo: "Foo",

        values: ["Bar", "Baz"],
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests how normal timestamps are serialized
 */
it("QueryXmlTimestamps:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <normal>2014-04-29T18:30:38Z</normal>
          </XmlTimestampsResult>
      </XmlTimestampsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      normal: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of date-time works like normal timestamps
 */
it("QueryXmlTimestampsWithDateTimeFormat:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <dateTime>2014-04-29T18:30:38Z</dateTime>
          </XmlTimestampsResult>
      </XmlTimestampsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      dateTime: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of date-time on the target shape works like normal timestamps
 */
it("QueryXmlTimestampsWithDateTimeOnTargetFormat:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <dateTimeOnTarget>2014-04-29T18:30:38Z</dateTimeOnTarget>
          </XmlTimestampsResult>
      </XmlTimestampsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      dateTimeOnTarget: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of epoch-seconds works
 */
it("QueryXmlTimestampsWithEpochSecondsFormat:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <epochSeconds>1398796238</epochSeconds>
          </XmlTimestampsResult>
      </XmlTimestampsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      epochSeconds: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of epoch-seconds on the target shape works
 */
it("QueryXmlTimestampsWithEpochSecondsOnTargetFormat:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <epochSecondsOnTarget>1398796238</epochSecondsOnTarget>
          </XmlTimestampsResult>
      </XmlTimestampsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      epochSecondsOnTarget: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of http-date works
 */
it("QueryXmlTimestampsWithHttpDateFormat:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <httpDate>Tue, 29 Apr 2014 18:30:38 GMT</httpDate>
          </XmlTimestampsResult>
      </XmlTimestampsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      httpDate: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of http-date on the target shape works
 */
it("QueryXmlTimestampsWithHttpDateOnTargetFormat:Response", async () => {
  const client = new QueryProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml",
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <httpDateOnTarget>Tue, 29 Apr 2014 18:30:38 GMT</httpDateOnTarget>
          </XmlTimestampsResult>
      </XmlTimestampsResponse>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      httpDateOnTarget: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentFormUrlencodedBodies = (expectedBody: string, generatedBody: string): Object => {
  const fromEntries = (components: string[][]): Record<string, string> => {
    const parts: Record<string, string> = {};

    components.forEach((component) => {
      parts[component[0]] = component[1];
    });

    return parts;
  };

  // Generate to k:v maps from query components
  const expectedParts = fromEntries(expectedBody.split("&").map((part) => part.trim().split("=")));
  const generatedParts = fromEntries(generatedBody.split("&").map((part) => part.trim().split("=")));

  return compareParts(expectedParts, generatedParts);
};

/**
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentUnknownTypeBodies = (
  utf8Encoder: __Encoder,
  expectedBody: string,
  generatedBody: string | Uint8Array
): Object => {
  const expectedParts = { Value: expectedBody };
  const generatedParts = {
    Value: generatedBody instanceof Uint8Array ? utf8Encoder(generatedBody) : generatedBody,
  };

  return compareParts(expectedParts, generatedParts);
};
