import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { UpdateRouteResponseRequest, UpdateRouteResponseResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRouteResponseCommand,
  serializeAws_restJson1UpdateRouteResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateRouteResponseCommandInput extends UpdateRouteResponseRequest {}
export interface UpdateRouteResponseCommandOutput extends UpdateRouteResponseResponse, __MetadataBearer {}

/**
 * <p>Updates a RouteResponse.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateRouteResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRouteResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRouteResponseCommand extends $Command<
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRouteResponseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRouteResponseCommandInput, UpdateRouteResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "UpdateRouteResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRouteResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRouteResponseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRouteResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRouteResponseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRouteResponseCommandOutput> {
    return deserializeAws_restJson1UpdateRouteResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
