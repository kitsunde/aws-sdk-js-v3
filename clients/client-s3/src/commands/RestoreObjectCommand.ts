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

import { RestoreObjectOutput, RestoreObjectRequest, RestoreObjectRequestFilterSensitiveLog } from "../models/models_1";
import { de_RestoreObjectCommand, se_RestoreObjectCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link RestoreObjectCommand}.
 */
export interface RestoreObjectCommandInput extends RestoreObjectRequest {}
/**
 * @public
 *
 * The output of {@link RestoreObjectCommand}.
 */
export interface RestoreObjectCommandOutput extends RestoreObjectOutput, __MetadataBearer {}

/**
 * @public
 * <p>Restores an archived copy of an object back into Amazon S3</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>This action performs the following types of requests: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>select</code> - Perform a select query on an archived object</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>restore an archive</code> - Restore an archived object</p>
 *             </li>
 *          </ul>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:RestoreObject</code> action. The bucket owner has this permission by default
 *          and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>
 *             <b>Querying Archives with Select Requests</b>
 *          </p>
 *          <p>You use a select type of request to perform SQL queries on archived objects. The
 *          archived objects that are being queried by the select request must be formatted as
 *          uncompressed comma-separated values (CSV) files. You can run queries and custom analytics
 *          on your archived data without having to restore your data to a hotter Amazon S3 tier. For an
 *          overview about select requests, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/querying-glacier-archives.html">Querying Archived Objects</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>When making a select request, do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Define an output location for the select query's output. This must be an Amazon S3
 *                bucket in the same Amazon Web Services Region as the bucket that contains the archive object that is
 *                being queried. The Amazon Web Services account that initiates the job must have permissions to write
 *                to the S3 bucket. You can specify the storage class and encryption for the output
 *                objects stored in the bucket. For more information about output, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/querying-glacier-archives.html">Querying Archived Objects</a>
 *                in the <i>Amazon S3 User Guide</i>.</p>
 *                <p>For more information about the <code>S3</code> structure in the request body, see
 *                the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html">Managing Access with
 *                         ACLs</a> in the <i>Amazon S3 User Guide</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data Using
 *                         Server-Side Encryption</a> in the
 *                      <i>Amazon S3 User Guide</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Define the SQL expression for the <code>SELECT</code> type of restoration for your
 *                query in the request body's <code>SelectParameters</code> structure. You can use
 *                expressions like the following examples.</p>
 *                <ul>
 *                   <li>
 *                      <p>The following expression returns all records from the specified
 *                      object.</p>
 *                      <p>
 *                         <code>SELECT * FROM Object</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Assuming that you are not using any headers for data stored in the object,
 *                      you can specify columns with positional headers.</p>
 *                      <p>
 *                         <code>SELECT s._1, s._2 FROM Object s WHERE s._3 > 100</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>If you have headers and you set the <code>fileHeaderInfo</code> in the
 *                         <code>CSV</code> structure in the request body to <code>USE</code>, you can
 *                      specify headers in the query. (If you set the <code>fileHeaderInfo</code> field
 *                      to <code>IGNORE</code>, the first row is skipped for the query.) You cannot mix
 *                      ordinal positions with header column names. </p>
 *                      <p>
 *                         <code>SELECT s.Id, s.FirstName, s.SSN FROM S3Object s</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For more information about using SQL with S3 Glacier Select restore, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-glacier-select-sql-reference.html">SQL Reference for Amazon S3 Select and
 *             S3 Glacier Select</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <p>When making a select request, you can also do the following:</p>
 *          <ul>
 *             <li>
 *                <p>To expedite your queries, specify the <code>Expedited</code> tier. For more
 *                information about tiers, see "Restoring Archives," later in this topic.</p>
 *             </li>
 *             <li>
 *                <p>Specify details about the data serialization format of both the input object that
 *                is being queried and the serialization of the CSV-encoded query results.</p>
 *             </li>
 *          </ul>
 *          <p>The following are additional important facts about the select feature:</p>
 *          <ul>
 *             <li>
 *                <p>The output results are new Amazon S3 objects. Unlike archive retrievals, they are
 *                stored until explicitly deleted-manually or through a lifecycle policy.</p>
 *             </li>
 *             <li>
 *                <p>You can issue more than one select request on the same Amazon S3 object. Amazon S3 doesn't
 *                deduplicate requests, so avoid issuing duplicate requests.</p>
 *             </li>
 *             <li>
 *                <p> Amazon S3 accepts a select request even if the object has already been restored. A
 *                select request doesn’t return error response <code>409</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Restoring objects</b>
 *          </p>
 *          <p>Objects that you archive to the S3 Glacier or
 *          S3 Glacier Deep Archive storage class, and S3 Intelligent-Tiering Archive or
 *          S3 Intelligent-Tiering Deep Archive tiers are not accessible in real time. For objects in
 *          Archive Access or Deep Archive Access tiers you must first initiate a restore request, and
 *          then wait until the object is moved into the Frequent Access tier. For objects in
 *          S3 Glacier or S3 Glacier Deep Archive storage classes you must
 *          first initiate a restore request, and then wait until a temporary copy of the object is
 *          available. To access an archived object, you must restore the object for the duration
 *          (number of days) that you specify.</p>
 *          <p>To restore a specific object version, you can provide a version ID. If you don't provide
 *          a version ID, Amazon S3 restores the current version.</p>
 *          <p>When restoring an archived object (or using a select request), you can specify one of
 *          the following data access tier options in the <code>Tier</code> element of the request
 *          body: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Expedited</code> - Expedited retrievals allow you to quickly access your
 *                data stored in the S3 Glacier storage class or S3 Intelligent-Tiering Archive
 *                tier when occasional urgent requests for a subset of archives are required. For all
 *                but the largest archived objects (250 MB+), data accessed using Expedited retrievals
 *                is typically made available within 1–5 minutes. Provisioned capacity ensures that
 *                retrieval capacity for Expedited retrievals is available when you need it. Expedited
 *                retrievals and provisioned capacity are not available for objects stored in the
 *                S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Standard</code> - Standard retrievals allow you to access any of your
 *                archived objects within several hours. This is the default option for retrieval
 *                requests that do not specify the retrieval option. Standard retrievals typically
 *                finish within 3–5 hours for objects stored in the S3 Glacier storage
 *                class or S3 Intelligent-Tiering Archive tier. They typically finish within 12 hours for
 *                objects stored in the S3 Glacier Deep Archive storage class or
 *                S3 Intelligent-Tiering Deep Archive tier. Standard retrievals are free for objects stored in
 *                S3 Intelligent-Tiering.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Bulk</code> - Bulk retrievals are the lowest-cost retrieval option in
 *                S3 Glacier, enabling you to retrieve large amounts, even petabytes, of data
 *                inexpensively. Bulk retrievals typically finish within 5–12 hours for objects stored
 *                in the S3 Glacier storage class or S3 Intelligent-Tiering Archive tier. They
 *                typically finish within 48 hours for objects stored in the
 *                S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Bulk
 *                retrievals are free for objects stored in S3 Intelligent-Tiering.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about archive retrieval options and provisioned capacity for
 *             <code>Expedited</code> data access, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html">Restoring Archived Objects</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <p>You can use Amazon S3 restore speed upgrade to change the restore speed to a faster speed
 *          while it is in progress. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html#restoring-objects-upgrade-tier.title.html">
 *             Upgrading the speed of an in-progress restore</a> in the
 *             <i>Amazon S3 User Guide</i>. </p>
 *          <p>To get the status of object restoration, you can send a <code>HEAD</code> request.
 *          Operations return the <code>x-amz-restore</code> header, which provides information about
 *          the restoration status, in the response. You can use Amazon S3 event notifications to notify you
 *          when a restore is initiated or completed. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Amazon S3 Event Notifications</a> in
 *          the <i>Amazon S3 User Guide</i>.</p>
 *          <p>After restoring an archived object, you can update the restoration period by reissuing
 *          the request with a new period. Amazon S3 updates the restoration period relative to the current
 *          time and charges only for the request-there are no data transfer charges. You cannot
 *          update the restoration period when Amazon S3 is actively processing your current restore request
 *          for the object.</p>
 *          <p>If your bucket has a lifecycle configuration with a rule that includes an expiration
 *          action, the object expiration overrides the life span that you specify in a restore
 *          request. For example, if you restore an object copy for 10 days, but the object is
 *          scheduled to expire in 3 days, Amazon S3 deletes the object in 3 days. For more information
 *          about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>
 *             <b>Responses</b>
 *          </p>
 *          <p>A successful action returns either the <code>200 OK</code> or <code>202
 *             Accepted</code> status code. </p>
 *          <ul>
 *             <li>
 *                <p>If the object is not previously restored, then Amazon S3 returns <code>202
 *                   Accepted</code> in the response. </p>
 *             </li>
 *             <li>
 *                <p>If the object is previously restored, Amazon S3 returns <code>200 OK</code> in the
 *                response. </p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Special Errors</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: RestoreAlreadyInProgress</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: Object restore is already in progress. (This error does not
 *                         apply to SELECT type requests.)</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>HTTP Status Code: 409 Conflict</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>SOAP Fault Code Prefix: Client</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: GlacierExpeditedRetrievalNotAvailable</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: expedited retrievals are currently not available. Try again
 *                         later. (Returned if there is insufficient capacity to process the Expedited
 *                         request. This error applies only to Expedited retrievals and not to
 *                         S3 Standard or Bulk retrievals.)</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>HTTP Status Code: 503</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>SOAP Fault Code Prefix: N/A</i>
 *                      </p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html">GetBucketNotificationConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-glacier-select-sql-reference.html">SQL Reference for
 *                   Amazon S3 Select and S3 Glacier Select </a> in the
 *                   <i>Amazon S3 User Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, RestoreObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, RestoreObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // RestoreObjectRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RestoreRequest: { // RestoreRequest
 *     Days: Number("int"),
 *     GlacierJobParameters: { // GlacierJobParameters
 *       Tier: "Standard" || "Bulk" || "Expedited", // required
 *     },
 *     Type: "SELECT",
 *     Tier: "Standard" || "Bulk" || "Expedited",
 *     Description: "STRING_VALUE",
 *     SelectParameters: { // SelectParameters
 *       InputSerialization: { // InputSerialization
 *         CSV: { // CSVInput
 *           FileHeaderInfo: "USE" || "IGNORE" || "NONE",
 *           Comments: "STRING_VALUE",
 *           QuoteEscapeCharacter: "STRING_VALUE",
 *           RecordDelimiter: "STRING_VALUE",
 *           FieldDelimiter: "STRING_VALUE",
 *           QuoteCharacter: "STRING_VALUE",
 *           AllowQuotedRecordDelimiter: true || false,
 *         },
 *         CompressionType: "NONE" || "GZIP" || "BZIP2",
 *         JSON: { // JSONInput
 *           Type: "DOCUMENT" || "LINES",
 *         },
 *         Parquet: {},
 *       },
 *       ExpressionType: "SQL", // required
 *       Expression: "STRING_VALUE", // required
 *       OutputSerialization: { // OutputSerialization
 *         CSV: { // CSVOutput
 *           QuoteFields: "ALWAYS" || "ASNEEDED",
 *           QuoteEscapeCharacter: "STRING_VALUE",
 *           RecordDelimiter: "STRING_VALUE",
 *           FieldDelimiter: "STRING_VALUE",
 *           QuoteCharacter: "STRING_VALUE",
 *         },
 *         JSON: { // JSONOutput
 *           RecordDelimiter: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     OutputLocation: { // OutputLocation
 *       S3: { // S3Location
 *         BucketName: "STRING_VALUE", // required
 *         Prefix: "STRING_VALUE", // required
 *         Encryption: { // Encryption
 *           EncryptionType: "AES256" || "aws:kms", // required
 *           KMSKeyId: "STRING_VALUE",
 *           KMSContext: "STRING_VALUE",
 *         },
 *         CannedACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *         AccessControlList: [ // Grants
 *           { // Grant
 *             Grantee: { // Grantee
 *               DisplayName: "STRING_VALUE",
 *               EmailAddress: "STRING_VALUE",
 *               ID: "STRING_VALUE",
 *               URI: "STRING_VALUE",
 *               Type: "CanonicalUser" || "AmazonCustomerByEmail" || "Group", // required
 *             },
 *             Permission: "FULL_CONTROL" || "WRITE" || "WRITE_ACP" || "READ" || "READ_ACP",
 *           },
 *         ],
 *         Tagging: { // Tagging
 *           TagSet: [ // TagSet // required
 *             { // Tag
 *               Key: "STRING_VALUE", // required
 *               Value: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         UserMetadata: [ // UserMetadata
 *           { // MetadataEntry
 *             Name: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW",
 *       },
 *     },
 *   },
 *   RequestPayer: "requester",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new RestoreObjectCommand(input);
 * const response = await client.send(command);
 * // { // RestoreObjectOutput
 * //   RequestCharged: "requester",
 * //   RestoreOutputPath: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RestoreObjectCommandInput - {@link RestoreObjectCommandInput}
 * @returns {@link RestoreObjectCommandOutput}
 * @see {@link RestoreObjectCommandInput} for command's `input` shape.
 * @see {@link RestoreObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link ObjectAlreadyInActiveTierError} (client fault)
 *  <p>This action is not allowed against this storage tier.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To restore an archived object
 * ```javascript
 * // The following example restores for one day an archived copy of an object back into Amazon S3 bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "archivedobjectkey",
 *   "RestoreRequest": {
 *     "Days": 1,
 *     "GlacierJobParameters": {
 *       "Tier": "Expedited"
 *     }
 *   }
 * };
 * const command = new RestoreObjectCommand(input);
 * await client.send(command);
 * // example id: to-restore-an-archived-object-1483049329953
 * ```
 *
 */
export class RestoreObjectCommand extends $Command<
  RestoreObjectCommandInput,
  RestoreObjectCommandOutput,
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
  constructor(readonly input: RestoreObjectCommandInput) {
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
  ): Handler<RestoreObjectCommandInput, RestoreObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RestoreObjectCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(
      getFlexibleChecksumsPlugin(configuration, {
        input: this.input,
        requestAlgorithmMember: "ChecksumAlgorithm",
        requestChecksumRequired: false,
      })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "RestoreObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreObjectRequestFilterSensitiveLog,
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
  private serialize(input: RestoreObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreObjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreObjectCommandOutput> {
    return de_RestoreObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
