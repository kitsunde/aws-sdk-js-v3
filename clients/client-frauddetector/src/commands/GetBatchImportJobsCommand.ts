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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetBatchImportJobsRequest, GetBatchImportJobsResult } from "../models/models_0";
import { de_GetBatchImportJobsCommand, se_GetBatchImportJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetBatchImportJobsCommand}.
 */
export interface GetBatchImportJobsCommandInput extends GetBatchImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetBatchImportJobsCommand}.
 */
export interface GetBatchImportJobsCommandOutput extends GetBatchImportJobsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets all batch import jobs or a specific job of the specified ID. This is a paginated API. If you provide a null <code>maxResults</code>,
 *          this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 50.
 *          To get the next page results, provide the pagination token from the <code>GetBatchImportJobsResponse</code> as part of your request.
 *          A null pagination token fetches the records from the beginning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetBatchImportJobsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetBatchImportJobsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // GetBatchImportJobsRequest
 *   jobId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetBatchImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchImportJobsResult
 * //   batchImports: [ // BatchImportList
 * //     { // BatchImport
 * //       jobId: "STRING_VALUE",
 * //       status: "IN_PROGRESS_INITIALIZING" || "IN_PROGRESS" || "CANCEL_IN_PROGRESS" || "CANCELED" || "COMPLETE" || "FAILED",
 * //       failureReason: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //       completionTime: "STRING_VALUE",
 * //       inputPath: "STRING_VALUE",
 * //       outputPath: "STRING_VALUE",
 * //       eventTypeName: "STRING_VALUE",
 * //       iamRoleArn: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       processedRecordsCount: Number("int"),
 * //       failedRecordsCount: Number("int"),
 * //       totalRecordsCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBatchImportJobsCommandInput - {@link GetBatchImportJobsCommandInput}
 * @returns {@link GetBatchImportJobsCommandOutput}
 * @see {@link GetBatchImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetBatchImportJobsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 */
export class GetBatchImportJobsCommand extends $Command<
  GetBatchImportJobsCommandInput,
  GetBatchImportJobsCommandOutput,
  FraudDetectorClientResolvedConfig
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
  constructor(readonly input: GetBatchImportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBatchImportJobsCommandInput, GetBatchImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBatchImportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetBatchImportJobsCommand";
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
  private serialize(input: GetBatchImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBatchImportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBatchImportJobsCommandOutput> {
    return de_GetBatchImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
