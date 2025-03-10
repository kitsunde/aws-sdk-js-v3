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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetEvaluationInput, GetEvaluationOutput } from "../models/models_0";
import { de_GetEvaluationCommand, se_GetEvaluationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetEvaluationCommand}.
 */
export interface GetEvaluationCommandInput extends GetEvaluationInput {}
/**
 * @public
 *
 * The output of {@link GetEvaluationCommand}.
 */
export interface GetEvaluationCommandOutput extends GetEvaluationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // GetEvaluationInput
 *   EvaluationId: "STRING_VALUE", // required
 * };
 * const command = new GetEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // GetEvaluationOutput
 * //   EvaluationId: "STRING_VALUE",
 * //   MLModelId: "STRING_VALUE",
 * //   EvaluationDataSourceId: "STRING_VALUE",
 * //   InputDataLocationS3: "STRING_VALUE",
 * //   CreatedByIamUser: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   PerformanceMetrics: { // PerformanceMetrics
 * //     Properties: { // PerformanceMetricsProperties
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   LogUri: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   ComputeTime: Number("long"),
 * //   FinishedAt: new Date("TIMESTAMP"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEvaluationCommandInput - {@link GetEvaluationCommandInput}
 * @returns {@link GetEvaluationCommandOutput}
 * @see {@link GetEvaluationCommandInput} for command's `input` shape.
 * @see {@link GetEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 */
export class GetEvaluationCommand extends $Command<
  GetEvaluationCommandInput,
  GetEvaluationCommandOutput,
  MachineLearningClientResolvedConfig
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
  constructor(readonly input: GetEvaluationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEvaluationCommandInput, GetEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetEvaluationCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "GetEvaluationCommand";
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
  private serialize(input: GetEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEvaluationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEvaluationCommandOutput> {
    return de_GetEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
