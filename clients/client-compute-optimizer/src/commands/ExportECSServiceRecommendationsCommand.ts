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

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { ExportECSServiceRecommendationsRequest, ExportECSServiceRecommendationsResponse } from "../models/models_0";
import {
  de_ExportECSServiceRecommendationsCommand,
  se_ExportECSServiceRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link ExportECSServiceRecommendationsCommand}.
 */
export interface ExportECSServiceRecommendationsCommandInput extends ExportECSServiceRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportECSServiceRecommendationsCommand}.
 */
export interface ExportECSServiceRecommendationsCommandOutput
  extends ExportECSServiceRecommendationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             Exports optimization recommendations for Amazon ECS services on Fargate.
 *         </p>
 *          <p>Recommendations are exported in a CSV file, and its metadata
 *             in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *                     Guide</i>.</p>
 *          <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportECSServiceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportECSServiceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportECSServiceRecommendationsRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // ECSServiceRecommendationFilters
 *     { // ECSServiceRecommendationFilter
 *       name: "Finding" || "FindingReasonCode",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   fieldsToExport: [ // ExportableECSServiceFields
 *     "AccountId" || "ServiceArn" || "LookbackPeriodInDays" || "LastRefreshTimestamp" || "LaunchType" || "CurrentPerformanceRisk" || "CurrentServiceConfigurationMemory" || "CurrentServiceConfigurationCpu" || "CurrentServiceConfigurationTaskDefinitionArn" || "CurrentServiceConfigurationAutoScalingConfiguration" || "CurrentServiceContainerConfigurations" || "UtilizationMetricsCpuMaximum" || "UtilizationMetricsMemoryMaximum" || "Finding" || "FindingReasonCodes" || "RecommendationOptionsMemory" || "RecommendationOptionsCpu" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "RecommendationOptionsContainerRecommendations" || "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum" || "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum" || "Tags",
 *   ],
 *   s3DestinationConfig: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     keyPrefix: "STRING_VALUE",
 *   },
 *   fileFormat: "Csv",
 *   includeMemberAccounts: true || false,
 * };
 * const command = new ExportECSServiceRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportECSServiceRecommendationsResponse
 * //   jobId: "STRING_VALUE",
 * //   s3Destination: { // S3Destination
 * //     bucket: "STRING_VALUE",
 * //     key: "STRING_VALUE",
 * //     metadataKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportECSServiceRecommendationsCommandInput - {@link ExportECSServiceRecommendationsCommandInput}
 * @returns {@link ExportECSServiceRecommendationsCommandOutput}
 * @see {@link ExportECSServiceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportECSServiceRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds a limit of the service.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 */
export class ExportECSServiceRecommendationsCommand extends $Command<
  ExportECSServiceRecommendationsCommandInput,
  ExportECSServiceRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
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
  constructor(readonly input: ExportECSServiceRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportECSServiceRecommendationsCommandInput, ExportECSServiceRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportECSServiceRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "ExportECSServiceRecommendationsCommand";
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
  private serialize(
    input: ExportECSServiceRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ExportECSServiceRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportECSServiceRecommendationsCommandOutput> {
    return de_ExportECSServiceRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
