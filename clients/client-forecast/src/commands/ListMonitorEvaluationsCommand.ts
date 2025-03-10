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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListMonitorEvaluationsRequest, ListMonitorEvaluationsResponse } from "../models/models_0";
import { de_ListMonitorEvaluationsCommand, se_ListMonitorEvaluationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListMonitorEvaluationsCommand}.
 */
export interface ListMonitorEvaluationsCommandInput extends ListMonitorEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitorEvaluationsCommand}.
 */
export interface ListMonitorEvaluationsCommandOutput extends ListMonitorEvaluationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the monitoring evaluation results and predictor events collected by
 *          the monitor resource during different windows of time.</p>
 *          <p>For information about monitoring see <a>predictor-monitoring</a>. For
 *          more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListMonitorEvaluationsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListMonitorEvaluationsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // ListMonitorEvaluationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   MonitorArn: "STRING_VALUE", // required
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListMonitorEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitorEvaluationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   PredictorMonitorEvaluations: [ // PredictorMonitorEvaluations
 * //     { // PredictorMonitorEvaluation
 * //       ResourceArn: "STRING_VALUE",
 * //       MonitorArn: "STRING_VALUE",
 * //       EvaluationTime: new Date("TIMESTAMP"),
 * //       EvaluationState: "STRING_VALUE",
 * //       WindowStartDatetime: new Date("TIMESTAMP"),
 * //       WindowEndDatetime: new Date("TIMESTAMP"),
 * //       PredictorEvent: { // PredictorEvent
 * //         Detail: "STRING_VALUE",
 * //         Datetime: new Date("TIMESTAMP"),
 * //       },
 * //       MonitorDataSource: { // MonitorDataSource
 * //         DatasetImportJobArn: "STRING_VALUE",
 * //         ForecastArn: "STRING_VALUE",
 * //         PredictorArn: "STRING_VALUE",
 * //       },
 * //       MetricResults: [ // MetricResults
 * //         { // MetricResult
 * //           MetricName: "STRING_VALUE",
 * //           MetricValue: Number("double"),
 * //         },
 * //       ],
 * //       NumItemsEvaluated: Number("long"),
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMonitorEvaluationsCommandInput - {@link ListMonitorEvaluationsCommandInput}
 * @returns {@link ListMonitorEvaluationsCommandOutput}
 * @see {@link ListMonitorEvaluationsCommandInput} for command's `input` shape.
 * @see {@link ListMonitorEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class ListMonitorEvaluationsCommand extends $Command<
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: ListMonitorEvaluationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMonitorEvaluationsCommandInput, ListMonitorEvaluationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMonitorEvaluationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListMonitorEvaluationsCommand";
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
  private serialize(input: ListMonitorEvaluationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMonitorEvaluationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMonitorEvaluationsCommandOutput> {
    return de_ListMonitorEvaluationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
