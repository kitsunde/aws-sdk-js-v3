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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateWirelessGatewayTaskRequest, CreateWirelessGatewayTaskResponse } from "../models/models_0";
import { de_CreateWirelessGatewayTaskCommand, se_CreateWirelessGatewayTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateWirelessGatewayTaskCommand}.
 */
export interface CreateWirelessGatewayTaskCommandInput extends CreateWirelessGatewayTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateWirelessGatewayTaskCommand}.
 */
export interface CreateWirelessGatewayTaskCommandOutput extends CreateWirelessGatewayTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a task for a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateWirelessGatewayTaskRequest
 *   Id: "STRING_VALUE", // required
 *   WirelessGatewayTaskDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new CreateWirelessGatewayTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateWirelessGatewayTaskResponse
 * //   WirelessGatewayTaskDefinitionId: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "FIRST_RETRY" || "SECOND_RETRY" || "COMPLETED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateWirelessGatewayTaskCommandInput - {@link CreateWirelessGatewayTaskCommandInput}
 * @returns {@link CreateWirelessGatewayTaskCommandOutput}
 * @see {@link CreateWirelessGatewayTaskCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessGatewayTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class CreateWirelessGatewayTaskCommand extends $Command<
  CreateWirelessGatewayTaskCommandInput,
  CreateWirelessGatewayTaskCommandOutput,
  IoTWirelessClientResolvedConfig
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
  constructor(readonly input: CreateWirelessGatewayTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWirelessGatewayTaskCommandInput, CreateWirelessGatewayTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWirelessGatewayTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "CreateWirelessGatewayTaskCommand";
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
  private serialize(input: CreateWirelessGatewayTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWirelessGatewayTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateWirelessGatewayTaskCommandOutput> {
    return de_CreateWirelessGatewayTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
