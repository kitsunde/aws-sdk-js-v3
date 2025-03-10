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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateBulkImportJobRequest, CreateBulkImportJobResponse } from "../models/models_0";
import { de_CreateBulkImportJobCommand, se_CreateBulkImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateBulkImportJobCommand}.
 */
export interface CreateBulkImportJobCommandInput extends CreateBulkImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateBulkImportJobCommand}.
 */
export interface CreateBulkImportJobCommandOutput extends CreateBulkImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a
 *         bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          <important>
 *             <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For
 *         more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateBulkImportJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateBulkImportJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateBulkImportJobRequest
 *   jobName: "STRING_VALUE", // required
 *   jobRoleArn: "STRING_VALUE", // required
 *   files: [ // Files // required
 *     { // File
 *       bucket: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *       versionId: "STRING_VALUE",
 *     },
 *   ],
 *   errorReportLocation: { // ErrorReportLocation
 *     bucket: "STRING_VALUE", // required
 *     prefix: "STRING_VALUE", // required
 *   },
 *   jobConfiguration: { // JobConfiguration
 *     fileFormat: { // FileFormat
 *       csv: { // Csv
 *         columnNames: [ // ColumnNames
 *           "ALIAS" || "ASSET_ID" || "PROPERTY_ID" || "DATA_TYPE" || "TIMESTAMP_SECONDS" || "TIMESTAMP_NANO_OFFSET" || "QUALITY" || "VALUE",
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new CreateBulkImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateBulkImportJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   jobName: "STRING_VALUE", // required
 * //   jobStatus: "PENDING" || "CANCELLED" || "RUNNING" || "COMPLETED" || "FAILED" || "COMPLETED_WITH_FAILURES", // required
 * // };
 *
 * ```
 *
 * @param CreateBulkImportJobCommandInput - {@link CreateBulkImportJobCommandInput}
 * @returns {@link CreateBulkImportJobCommandOutput}
 * @see {@link CreateBulkImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateBulkImportJobCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 */
export class CreateBulkImportJobCommand extends $Command<
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: CreateBulkImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBulkImportJobCommandInput, CreateBulkImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBulkImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "CreateBulkImportJobCommand";
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
  private serialize(input: CreateBulkImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBulkImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBulkImportJobCommandOutput> {
    return de_CreateBulkImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
