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

import { CreateDeviceFleetRequest } from "../models/models_0";
import { de_CreateDeviceFleetCommand, se_CreateDeviceFleetCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link CreateDeviceFleetCommand}.
 */
export interface CreateDeviceFleetCommandInput extends CreateDeviceFleetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeviceFleetCommand}.
 */
export interface CreateDeviceFleetCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates a device fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateDeviceFleetRequest
 *   DeviceFleetName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   OutputConfig: { // EdgeOutputConfig
 *     S3OutputLocation: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *     PresetDeploymentType: "GreengrassV2Component",
 *     PresetDeploymentConfig: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   EnableIotRoleAlias: true || false,
 * };
 * const command = new CreateDeviceFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateDeviceFleetCommandInput - {@link CreateDeviceFleetCommandInput}
 * @returns {@link CreateDeviceFleetCommandOutput}
 * @see {@link CreateDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateDeviceFleetCommand extends $Command<
  CreateDeviceFleetCommandInput,
  CreateDeviceFleetCommandOutput,
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
  constructor(readonly input: CreateDeviceFleetCommandInput) {
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
  ): Handler<CreateDeviceFleetCommandInput, CreateDeviceFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDeviceFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateDeviceFleetCommand";
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
  private serialize(input: CreateDeviceFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDeviceFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeviceFleetCommandOutput> {
    return de_CreateDeviceFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
