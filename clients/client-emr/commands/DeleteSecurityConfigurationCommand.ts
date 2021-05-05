import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DeleteSecurityConfigurationInput, DeleteSecurityConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSecurityConfigurationCommand,
  serializeAws_json1_1DeleteSecurityConfigurationCommand,
} from "../protocols/Aws_json1_1";
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

export interface DeleteSecurityConfigurationCommandInput extends DeleteSecurityConfigurationInput {}
export interface DeleteSecurityConfigurationCommandOutput extends DeleteSecurityConfigurationOutput, __MetadataBearer {}

/**
 * <p>Deletes a security configuration.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DeleteSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteSecurityConfigurationCommand extends $Command<
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSecurityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DeleteSecurityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSecurityConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSecurityConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSecurityConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSecurityConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSecurityConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteSecurityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
