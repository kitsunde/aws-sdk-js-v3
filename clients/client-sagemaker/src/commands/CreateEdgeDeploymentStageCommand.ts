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

import { CreateEdgeDeploymentStageRequest } from "../models/models_0";
import { de_CreateEdgeDeploymentStageCommand, se_CreateEdgeDeploymentStageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link CreateEdgeDeploymentStageCommand}.
 */
export interface CreateEdgeDeploymentStageCommandInput extends CreateEdgeDeploymentStageRequest {}
/**
 * @public
 *
 * The output of {@link CreateEdgeDeploymentStageCommand}.
 */
export interface CreateEdgeDeploymentStageCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates a new stage in an existing edge deployment plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEdgeDeploymentStageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEdgeDeploymentStageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateEdgeDeploymentStageRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   Stages: [ // DeploymentStages // required
 *     { // DeploymentStage
 *       StageName: "STRING_VALUE", // required
 *       DeviceSelectionConfig: { // DeviceSelectionConfig
 *         DeviceSubsetType: "PERCENTAGE" || "SELECTION" || "NAMECONTAINS", // required
 *         Percentage: Number("int"),
 *         DeviceNames: [ // DeviceNames
 *           "STRING_VALUE",
 *         ],
 *         DeviceNameContains: "STRING_VALUE",
 *       },
 *       DeploymentConfig: { // EdgeDeploymentConfig
 *         FailureHandlingPolicy: "ROLLBACK_ON_FAILURE" || "DO_NOTHING", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateEdgeDeploymentStageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateEdgeDeploymentStageCommandInput - {@link CreateEdgeDeploymentStageCommandInput}
 * @returns {@link CreateEdgeDeploymentStageCommandOutput}
 * @see {@link CreateEdgeDeploymentStageCommandInput} for command's `input` shape.
 * @see {@link CreateEdgeDeploymentStageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateEdgeDeploymentStageCommand extends $Command<
  CreateEdgeDeploymentStageCommandInput,
  CreateEdgeDeploymentStageCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: CreateEdgeDeploymentStageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEdgeDeploymentStageCommandInput, CreateEdgeDeploymentStageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEdgeDeploymentStageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateEdgeDeploymentStageCommand";
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
  private serialize(input: CreateEdgeDeploymentStageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEdgeDeploymentStageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEdgeDeploymentStageCommandOutput> {
    return de_CreateEdgeDeploymentStageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
