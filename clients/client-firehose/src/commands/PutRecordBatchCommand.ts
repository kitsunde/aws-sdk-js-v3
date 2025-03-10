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

import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { PutRecordBatchInput, PutRecordBatchOutput } from "../models/models_0";
import { de_PutRecordBatchCommand, se_PutRecordBatchCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link PutRecordBatchCommand}.
 */
export interface PutRecordBatchCommandInput extends PutRecordBatchInput {}
/**
 * @public
 *
 * The output of {@link PutRecordBatchCommand}.
 */
export interface PutRecordBatchCommandOutput extends PutRecordBatchOutput, __MetadataBearer {}

/**
 * @public
 * <p>Writes multiple data records into a delivery stream in a single call, which can
 *          achieve higher throughput per producer than when writing single records. To write single
 *          data records into a delivery stream, use <a>PutRecord</a>. Applications using
 *          these operations are referred to as producers.</p>
 *          <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose
 *          Quota</a>.</p>
 *          <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record
 *          in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB
 *          for the entire request. These limits cannot be changed.</p>
 *          <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000
 *          KB in size, and any kind of data. For example, it could be a segment from a log file,
 *          geographic location data, website clickstream data, and so on.</p>
 *          <p>Kinesis Data Firehose buffers records before delivering them to the destination. To
 *          disambiguate the data blobs at the destination, a common solution is to use delimiters in
 *          the data, such as a newline (<code>\n</code>) or some other character unique within the
 *          data. This allows the consumer application to parse individual data items when reading the
 *          data from the destination.</p>
 *          <p>The <a>PutRecordBatch</a> response includes a count of failed records,
 *             <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>.
 *          Even if the <a>PutRecordBatch</a> call succeeds, the value of
 *             <code>FailedPutCount</code> may be greater than 0, indicating that there are records for
 *          which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array
 *          provides additional information about the processed record. It directly correlates with a
 *          record in the request array using the same ordering, from the top to the bottom. The
 *          response array always includes the same number of records as the request array.
 *             <code>RequestResponses</code> includes both successfully and unsuccessfully processed
 *          records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing
 *          of subsequent records. </p>
 *          <p>A successfully processed record includes a <code>RecordId</code> value, which is
 *          unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code>
 *          and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error,
 *          and is one of the following values: <code>ServiceUnavailableException</code> or
 *             <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed
 *          information about the error.</p>
 *          <p>If there is an internal server error or a timeout, the write might have completed or
 *          it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request,
 *          resending only those records that might have failed processing. This minimizes the possible
 *          duplicate records and also reduces the total bytes sent (and corresponding charges). We
 *          recommend that you handle any duplicates at the destination.</p>
 *          <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>,
 *          back off and retry. If the exception persists, it is possible that the throughput limits
 *          have been exceeded for the delivery stream.</p>
 *
 *          <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they
 *          are added to a delivery stream as it attempts to send the records to the destination. If
 *          the destination is unreachable for more than 24 hours, the data is no longer
 *          available.</p>
 *          <important>
 *             <p>Don't concatenate two or more base64 strings to form the data fields of your records.
 *             Instead, concatenate the raw data, then perform base64 encoding.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, PutRecordBatchCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, PutRecordBatchCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // PutRecordBatchInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   Records: [ // PutRecordBatchRequestEntryList // required
 *     { // Record
 *       Data: "BLOB_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutRecordBatchCommand(input);
 * const response = await client.send(command);
 * // { // PutRecordBatchOutput
 * //   FailedPutCount: Number("int"), // required
 * //   Encrypted: true || false,
 * //   RequestResponses: [ // PutRecordBatchResponseEntryList // required
 * //     { // PutRecordBatchResponseEntry
 * //       RecordId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutRecordBatchCommandInput - {@link PutRecordBatchCommandInput}
 * @returns {@link PutRecordBatchCommandOutput}
 * @see {@link PutRecordBatchCommandInput} for command's `input` shape.
 * @see {@link PutRecordBatchCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link InvalidKMSResourceException} (client fault)
 *  <p>Kinesis Data Firehose throws this exception when an attempt to put records or to start
 *          or stop delivery stream encryption fails. This happens when the KMS service throws one of
 *          the following exception types: <code>AccessDeniedException</code>,
 *             <code>InvalidStateException</code>, <code>DisabledException</code>, or
 *             <code>NotFoundException</code>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation. If you continue to see
 *          the exception, throughput limits for the delivery stream may have been exceeded. For more
 *          information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose
 *          Limits</a>.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 */
export class PutRecordBatchCommand extends $Command<
  PutRecordBatchCommandInput,
  PutRecordBatchCommandOutput,
  FirehoseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutRecordBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecordBatchCommandInput, PutRecordBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRecordBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "PutRecordBatchCommand";
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
  private serialize(input: PutRecordBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRecordBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRecordBatchCommandOutput> {
    return de_PutRecordBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
