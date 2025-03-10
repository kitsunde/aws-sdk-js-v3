// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import {
  PutBucketInventoryConfigurationRequest,
  PutBucketInventoryConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  de_PutBucketInventoryConfigurationCommand,
  se_PutBucketInventoryConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link PutBucketInventoryConfigurationCommand}.
 */
export interface PutBucketInventoryConfigurationCommandInput extends PutBucketInventoryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketInventoryConfigurationCommand}.
 */
export interface PutBucketInventoryConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This implementation of the <code>PUT</code> action adds an inventory configuration
 *          (identified by the inventory ID) to the bucket. You can have up to 1,000 inventory
 *          configurations per bucket. </p>
 *          <p>Amazon S3 inventory generates inventories of the objects in the bucket on a daily or weekly
 *          basis, and the results are published to a flat file. The bucket that is inventoried is
 *          called the <i>source</i> bucket, and the bucket where the inventory flat file
 *          is stored is called the <i>destination</i> bucket. The
 *             <i>destination</i> bucket must be in the same Amazon Web Services Region as the
 *             <i>source</i> bucket. </p>
 *          <p>When you configure an inventory for a <i>source</i> bucket, you specify
 *          the <i>destination</i> bucket where you want the inventory to be stored, and
 *          whether to generate the inventory daily or weekly. You can also configure what object
 *          metadata to include and whether to inventory all object versions or only current versions.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3
 *             Inventory</a> in the Amazon S3 User Guide.</p>
 *          <important>
 *             <p>You must create a bucket policy on the <i>destination</i> bucket to
 *             grant permissions to Amazon S3 to write objects to the bucket in the defined location. For an
 *             example policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-9">
 *                Granting Permissions for Amazon S3 Inventory and Storage Class Analysis</a>.</p>
 *          </important>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:PutInventoryConfiguration</code> action. The bucket owner has this permission
 *          by default and can grant this permission to others. For more information about permissions,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a> in the Amazon S3 User Guide.</p>
 *          <p class="title">
 *             <b>Special Errors</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p class="title">
 *                   <b>HTTP 400 Bad Request Error</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code:</i> InvalidArgument</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause:</i> Invalid Argument</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p class="title">
 *                   <b>HTTP 400 Bad Request Error</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code:</i> TooManyConfigurations</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause:</i> You are attempting to create a new configuration
 *                      but have already reached the 1,000-configuration limit. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p class="title">
 *                   <b>HTTP 403 Forbidden Error</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code:</i> AccessDenied</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause:</i> You are not the owner of the specified bucket,
 *                      or you do not have the <code>s3:PutInventoryConfiguration</code> bucket
 *                      permission to set the configuration on the bucket. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html">GetBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketInventoryConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketInventoryConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   InventoryConfiguration: { // InventoryConfiguration
 *     Destination: { // InventoryDestination
 *       S3BucketDestination: { // InventoryS3BucketDestination
 *         AccountId: "STRING_VALUE",
 *         Bucket: "STRING_VALUE", // required
 *         Format: "CSV" || "ORC" || "Parquet", // required
 *         Prefix: "STRING_VALUE",
 *         Encryption: { // InventoryEncryption
 *           SSES3: {},
 *           SSEKMS: { // SSEKMS
 *             KeyId: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     },
 *     IsEnabled: true || false, // required
 *     Filter: { // InventoryFilter
 *       Prefix: "STRING_VALUE", // required
 *     },
 *     Id: "STRING_VALUE", // required
 *     IncludedObjectVersions: "All" || "Current", // required
 *     OptionalFields: [ // InventoryOptionalFields
 *       "Size" || "LastModifiedDate" || "StorageClass" || "ETag" || "IsMultipartUploaded" || "ReplicationStatus" || "EncryptionStatus" || "ObjectLockRetainUntilDate" || "ObjectLockMode" || "ObjectLockLegalHoldStatus" || "IntelligentTieringAccessTier" || "BucketKeyStatus" || "ChecksumAlgorithm",
 *     ],
 *     Schedule: { // InventorySchedule
 *       Frequency: "Daily" || "Weekly", // required
 *     },
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketInventoryConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketInventoryConfigurationCommandInput - {@link PutBucketInventoryConfigurationCommandInput}
 * @returns {@link PutBucketInventoryConfigurationCommandOutput}
 * @see {@link PutBucketInventoryConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketInventoryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class PutBucketInventoryConfigurationCommand extends $Command<
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
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
  constructor(readonly input: PutBucketInventoryConfigurationCommandInput) {
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
  ): Handler<PutBucketInventoryConfigurationCommandInput, PutBucketInventoryConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketInventoryConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketInventoryConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBucketInventoryConfigurationRequestFilterSensitiveLog,
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
  private serialize(
    input: PutBucketInventoryConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutBucketInventoryConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBucketInventoryConfigurationCommandOutput> {
    return de_PutBucketInventoryConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
