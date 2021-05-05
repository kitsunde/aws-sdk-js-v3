import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { UpdateConfigurationRequest, UpdateConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConfigurationCommand,
  serializeAws_restJson1UpdateConfigurationCommand,
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

export interface UpdateConfigurationCommandInput extends UpdateConfigurationRequest {}
export interface UpdateConfigurationCommandOutput extends UpdateConfigurationResponse, __MetadataBearer {}

/**
 * Updates the specified configuration.
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new UpdateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateConfigurationCommand extends $Command<
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConfigurationCommandInput, UpdateConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "UpdateConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
