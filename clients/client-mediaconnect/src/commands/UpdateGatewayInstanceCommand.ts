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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateGatewayInstanceRequest, UpdateGatewayInstanceResponse } from "../models/models_0";
import { de_UpdateGatewayInstanceCommand, se_UpdateGatewayInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateGatewayInstanceCommand}.
 */
export interface UpdateGatewayInstanceCommandInput extends UpdateGatewayInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayInstanceCommand}.
 */
export interface UpdateGatewayInstanceCommandOutput extends UpdateGatewayInstanceResponse, __MetadataBearer {}

/**
 * @public
 * Updates the configuration of an existing Gateway Instance.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateGatewayInstanceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateGatewayInstanceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateGatewayInstanceRequest
 *   BridgePlacement: "AVAILABLE" || "LOCKED",
 *   GatewayInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateGatewayInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayInstanceResponse
 * //   BridgePlacement: "AVAILABLE" || "LOCKED",
 * //   GatewayInstanceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGatewayInstanceCommandInput - {@link UpdateGatewayInstanceCommandInput}
 * @returns {@link UpdateGatewayInstanceCommandOutput}
 * @see {@link UpdateGatewayInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayInstanceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 */
export class UpdateGatewayInstanceCommand extends $Command<
  UpdateGatewayInstanceCommandInput,
  UpdateGatewayInstanceCommandOutput,
  MediaConnectClientResolvedConfig
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
  constructor(readonly input: UpdateGatewayInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGatewayInstanceCommandInput, UpdateGatewayInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGatewayInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateGatewayInstanceCommand";
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
  private serialize(input: UpdateGatewayInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateGatewayInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGatewayInstanceCommandOutput> {
    return de_UpdateGatewayInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
