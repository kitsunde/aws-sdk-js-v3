// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { PutBucketCorsRequest } from "../models/models_0";
import { de_PutBucketCorsCommand, se_PutBucketCorsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link PutBucketCorsCommand}.
 */
export interface PutBucketCorsCommandInput extends PutBucketCorsRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketCorsCommand}.
 */
export interface PutBucketCorsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets the <code>cors</code> configuration for your bucket. If the configuration exists,
 *          Amazon S3 replaces it.</p>
 *          <p>To use this operation, you must be allowed to perform the <code>s3:PutBucketCORS</code>
 *          action. By default, the bucket owner has this permission and can grant it to others.</p>
 *          <p>You set this configuration on a bucket so that the bucket can service cross-origin
 *          requests. For example, you might want to enable a request whose origin is
 *             <code>http://www.example.com</code> to access your Amazon S3 bucket at
 *             <code>my.example.bucket.com</code> by using the browser's <code>XMLHttpRequest</code>
 *          capability.</p>
 *          <p>To enable cross-origin resource sharing (CORS) on a bucket, you add the
 *             <code>cors</code> subresource to the bucket. The <code>cors</code> subresource is an XML
 *          document in which you configure rules that identify origins and the HTTP methods that can
 *          be executed on your bucket. The document is limited to 64 KB in size. </p>
 *          <p>When Amazon S3 receives a cross-origin request (or a pre-flight OPTIONS request) against a
 *          bucket, it evaluates the <code>cors</code> configuration on the bucket and uses the first
 *             <code>CORSRule</code> rule that matches the incoming browser request to enable a
 *          cross-origin request. For a rule to match, the following conditions must be met:</p>
 *          <ul>
 *             <li>
 *                <p>The request's <code>Origin</code> header must match <code>AllowedOrigin</code>
 *                elements.</p>
 *             </li>
 *             <li>
 *                <p>The request method (for example, GET, PUT, HEAD, and so on) or the
 *                   <code>Access-Control-Request-Method</code> header in case of a pre-flight
 *                   <code>OPTIONS</code> request must be one of the <code>AllowedMethod</code>
 *                elements. </p>
 *             </li>
 *             <li>
 *                <p>Every header specified in the <code>Access-Control-Request-Headers</code> request
 *                header of a pre-flight request must match an <code>AllowedHeader</code> element.
 *             </p>
 *             </li>
 *          </ul>
 *          <p> For more information about CORS, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling
 *             Cross-Origin Resource Sharing</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html">GetBucketCors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html">DeleteBucketCors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTOPTIONSobject.html">RESTOPTIONSobject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketCorsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketCorsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketCorsRequest
 *   Bucket: "STRING_VALUE", // required
 *   CORSConfiguration: { // CORSConfiguration
 *     CORSRules: [ // CORSRules // required
 *       { // CORSRule
 *         ID: "STRING_VALUE",
 *         AllowedHeaders: [ // AllowedHeaders
 *           "STRING_VALUE",
 *         ],
 *         AllowedMethods: [ // AllowedMethods // required
 *           "STRING_VALUE",
 *         ],
 *         AllowedOrigins: [ // AllowedOrigins // required
 *           "STRING_VALUE",
 *         ],
 *         ExposeHeaders: [ // ExposeHeaders
 *           "STRING_VALUE",
 *         ],
 *         MaxAgeSeconds: Number("int"),
 *       },
 *     ],
 *   },
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketCorsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketCorsCommandInput - {@link PutBucketCorsCommandInput}
 * @returns {@link PutBucketCorsCommandOutput}
 * @see {@link PutBucketCorsCommandInput} for command's `input` shape.
 * @see {@link PutBucketCorsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To set cors configuration on a bucket.
 * ```javascript
 * // The following example enables PUT, POST, and DELETE requests from www.example.com, and enables GET requests from any domain.
 * const input = {
 *   "Bucket": "",
 *   "CORSConfiguration": {
 *     "CORSRules": [
 *       {
 *         "AllowedHeaders": [
 *           "*"
 *         ],
 *         "AllowedMethods": [
 *           "PUT",
 *           "POST",
 *           "DELETE"
 *         ],
 *         "AllowedOrigins": [
 *           "http://www.example.com"
 *         ],
 *         "ExposeHeaders": [
 *           "x-amz-server-side-encryption"
 *         ],
 *         "MaxAgeSeconds": 3000
 *       },
 *       {
 *         "AllowedHeaders": [
 *           "Authorization"
 *         ],
 *         "AllowedMethods": [
 *           "GET"
 *         ],
 *         "AllowedOrigins": [
 *           "*"
 *         ],
 *         "MaxAgeSeconds": 3000
 *       }
 *     ]
 *   },
 *   "ContentMD5": ""
 * };
 * const command = new PutBucketCorsCommand(input);
 * await client.send(command);
 * // example id: to-set-cors-configuration-on-a-bucket-1483037818805
 * ```
 *
 */
export class PutBucketCorsCommand extends $Command<
  PutBucketCorsCommandInput,
  PutBucketCorsCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutBucketCorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketCorsCommandInput, PutBucketCorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutBucketCorsCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(
      getFlexibleChecksumsPlugin(configuration, {
        input: this.input,
        requestAlgorithmMember: "ChecksumAlgorithm",
        requestChecksumRequired: true,
      })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketCorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutBucketCorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutBucketCorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketCorsCommandOutput> {
    return de_PutBucketCorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
