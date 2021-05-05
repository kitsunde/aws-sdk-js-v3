import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateApnsVoipChannelRequest, UpdateApnsVoipChannelResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateApnsVoipChannelCommand,
  serializeAws_restJson1UpdateApnsVoipChannelCommand,
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

export interface UpdateApnsVoipChannelCommandInput extends UpdateApnsVoipChannelRequest {}
export interface UpdateApnsVoipChannelCommandOutput extends UpdateApnsVoipChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsVoipChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsVoipChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsVoipChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsVoipChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsVoipChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateApnsVoipChannelCommand extends $Command<
  UpdateApnsVoipChannelCommandInput,
  UpdateApnsVoipChannelCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApnsVoipChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApnsVoipChannelCommandInput, UpdateApnsVoipChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateApnsVoipChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApnsVoipChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApnsVoipChannelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateApnsVoipChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateApnsVoipChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApnsVoipChannelCommandOutput> {
    return deserializeAws_restJson1UpdateApnsVoipChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
