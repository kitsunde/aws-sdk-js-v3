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

import { PutBucketWebsiteRequest } from "../models/models_0";
import { de_PutBucketWebsiteCommand, se_PutBucketWebsiteCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link PutBucketWebsiteCommand}.
 */
export interface PutBucketWebsiteCommandInput extends PutBucketWebsiteRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketWebsiteCommand}.
 */
export interface PutBucketWebsiteCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets the configuration of the website that is specified in the <code>website</code>
 *          subresource. To configure a bucket as a website, you can add this subresource on the bucket
 *          with website configuration information such as the file name of the index document and any
 *          redirect rules. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>.</p>
 *          <p>This PUT action requires the <code>S3:PutBucketWebsite</code> permission. By default,
 *          only the bucket owner can configure the website attached to a bucket; however, bucket
 *          owners can allow other users to set the website configuration by writing a bucket policy
 *          that grants them the <code>S3:PutBucketWebsite</code> permission.</p>
 *          <p>To redirect all website requests sent to the bucket's website endpoint, you add a
 *          website configuration with the following elements. Because all requests are sent to another
 *          website, you don't need to provide index document name for the bucket.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>WebsiteConfiguration</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RedirectAllRequestsTo</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HostName</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Protocol</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>If you want granular control over redirects, you can use the following elements to add
 *          routing rules that describe conditions for redirecting requests and information about the
 *          redirect destination. In this case, the website configuration must provide an index
 *          document for the bucket, because some requests might not be redirected. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>WebsiteConfiguration</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IndexDocument</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Suffix</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ErrorDocument</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RoutingRules</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RoutingRule</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Condition</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HttpErrorCodeReturnedEquals</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>KeyPrefixEquals</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Redirect</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Protocol</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HostName</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ReplaceKeyPrefixWith</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ReplaceKeyWith</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HttpRedirectCode</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon S3 has a limitation of 50 routing rules per website configuration. If you require more
 *          than 50 routing rules, you can use object redirect. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">Configuring an
 *             Object Redirect</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketWebsiteCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketWebsiteCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketWebsiteRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   WebsiteConfiguration: { // WebsiteConfiguration
 *     ErrorDocument: { // ErrorDocument
 *       Key: "STRING_VALUE", // required
 *     },
 *     IndexDocument: { // IndexDocument
 *       Suffix: "STRING_VALUE", // required
 *     },
 *     RedirectAllRequestsTo: { // RedirectAllRequestsTo
 *       HostName: "STRING_VALUE", // required
 *       Protocol: "http" || "https",
 *     },
 *     RoutingRules: [ // RoutingRules
 *       { // RoutingRule
 *         Condition: { // Condition
 *           HttpErrorCodeReturnedEquals: "STRING_VALUE",
 *           KeyPrefixEquals: "STRING_VALUE",
 *         },
 *         Redirect: { // Redirect
 *           HostName: "STRING_VALUE",
 *           HttpRedirectCode: "STRING_VALUE",
 *           Protocol: "http" || "https",
 *           ReplaceKeyPrefixWith: "STRING_VALUE",
 *           ReplaceKeyWith: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketWebsiteCommandInput - {@link PutBucketWebsiteCommandInput}
 * @returns {@link PutBucketWebsiteCommandOutput}
 * @see {@link PutBucketWebsiteCommandInput} for command's `input` shape.
 * @see {@link PutBucketWebsiteCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example Set website configuration on a bucket
 * ```javascript
 * // The following example adds website configuration to a bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "ContentMD5": "",
 *   "WebsiteConfiguration": {
 *     "ErrorDocument": {
 *       "Key": "error.html"
 *     },
 *     "IndexDocument": {
 *       "Suffix": "index.html"
 *     }
 *   }
 * };
 * const command = new PutBucketWebsiteCommand(input);
 * await client.send(command);
 * // example id: set-website-configuration-on-a-bucket-1482346836261
 * ```
 *
 */
export class PutBucketWebsiteCommand extends $Command<
  PutBucketWebsiteCommandInput,
  PutBucketWebsiteCommandOutput,
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
  constructor(readonly input: PutBucketWebsiteCommandInput) {
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
  ): Handler<PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketWebsiteCommand.getEndpointParameterInstructions())
    );
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
    const commandName = "PutBucketWebsiteCommand";
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
  private serialize(input: PutBucketWebsiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutBucketWebsiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketWebsiteCommandOutput> {
    return de_PutBucketWebsiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
