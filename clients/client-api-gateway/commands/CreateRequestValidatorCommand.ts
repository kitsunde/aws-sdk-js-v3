import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { CreateRequestValidatorRequest, RequestValidator } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRequestValidatorCommand,
  serializeAws_restJson1CreateRequestValidatorCommand,
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

export interface CreateRequestValidatorCommandInput extends CreateRequestValidatorRequest {}
export interface CreateRequestValidatorCommandOutput extends RequestValidator, __MetadataBearer {}

/**
 * <p>Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link CreateRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRequestValidatorCommand extends $Command<
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRequestValidatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRequestValidatorCommandInput, CreateRequestValidatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateRequestValidatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRequestValidatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestValidator.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRequestValidatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRequestValidatorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRequestValidatorCommandOutput> {
    return deserializeAws_restJson1CreateRequestValidatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
