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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetQueryExecutionInput, GetQueryExecutionOutput } from "../models/models_0";
import { de_GetQueryExecutionCommand, se_GetQueryExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetQueryExecutionCommand}.
 */
export interface GetQueryExecutionCommandInput extends GetQueryExecutionInput {}
/**
 * @public
 *
 * The output of {@link GetQueryExecutionCommand}.
 */
export interface GetQueryExecutionCommandOutput extends GetQueryExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a single execution of a query if you have access to the
 *             workgroup in which the query ran. Each time a query executes, information about the
 *             query execution is saved with a unique ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetQueryExecutionInput
 *   QueryExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryExecutionOutput
 * //   QueryExecution: { // QueryExecution
 * //     QueryExecutionId: "STRING_VALUE",
 * //     Query: "STRING_VALUE",
 * //     StatementType: "DDL" || "DML" || "UTILITY",
 * //     ResultConfiguration: { // ResultConfiguration
 * //       OutputLocation: "STRING_VALUE",
 * //       EncryptionConfiguration: { // EncryptionConfiguration
 * //         EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 * //         KmsKey: "STRING_VALUE",
 * //       },
 * //       ExpectedBucketOwner: "STRING_VALUE",
 * //       AclConfiguration: { // AclConfiguration
 * //         S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 * //       },
 * //     },
 * //     ResultReuseConfiguration: { // ResultReuseConfiguration
 * //       ResultReuseByAgeConfiguration: { // ResultReuseByAgeConfiguration
 * //         Enabled: true || false, // required
 * //         MaxAgeInMinutes: Number("int"),
 * //       },
 * //     },
 * //     QueryExecutionContext: { // QueryExecutionContext
 * //       Database: "STRING_VALUE",
 * //       Catalog: "STRING_VALUE",
 * //     },
 * //     Status: { // QueryExecutionStatus
 * //       State: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED",
 * //       StateChangeReason: "STRING_VALUE",
 * //       SubmissionDateTime: new Date("TIMESTAMP"),
 * //       CompletionDateTime: new Date("TIMESTAMP"),
 * //       AthenaError: { // AthenaError
 * //         ErrorCategory: Number("int"),
 * //         ErrorType: Number("int"),
 * //         Retryable: true || false,
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //     Statistics: { // QueryExecutionStatistics
 * //       EngineExecutionTimeInMillis: Number("long"),
 * //       DataScannedInBytes: Number("long"),
 * //       DataManifestLocation: "STRING_VALUE",
 * //       TotalExecutionTimeInMillis: Number("long"),
 * //       QueryQueueTimeInMillis: Number("long"),
 * //       QueryPlanningTimeInMillis: Number("long"),
 * //       ServiceProcessingTimeInMillis: Number("long"),
 * //       ResultReuseInformation: { // ResultReuseInformation
 * //         ReusedPreviousResult: true || false, // required
 * //       },
 * //     },
 * //     WorkGroup: "STRING_VALUE",
 * //     EngineVersion: { // EngineVersion
 * //       SelectedEngineVersion: "STRING_VALUE",
 * //       EffectiveEngineVersion: "STRING_VALUE",
 * //     },
 * //     ExecutionParameters: [ // ExecutionParameters
 * //       "STRING_VALUE",
 * //     ],
 * //     SubstatementType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQueryExecutionCommandInput - {@link GetQueryExecutionCommandInput}
 * @returns {@link GetQueryExecutionCommandOutput}
 * @see {@link GetQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link GetQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetQueryExecutionCommand extends $Command<
  GetQueryExecutionCommandInput,
  GetQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetQueryExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetQueryExecutionCommand";
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
  private serialize(input: GetQueryExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetQueryExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueryExecutionCommandOutput> {
    return de_GetQueryExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
