import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateFilterRequest, CreateFilterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateFilterCommand,
  serializeAws_json1_1CreateFilterCommand,
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

export interface CreateFilterCommandInput extends CreateFilterRequest {}
export interface CreateFilterCommandOutput extends CreateFilterResponse, __MetadataBearer {}

/**
 * <p>Creates a recommendation filter. For more information, see <a>filter</a>.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateFilterCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateFilterCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFilterCommandInput} for command's `input` shape.
 * @see {@link CreateFilterCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFilterCommand extends $Command<
  CreateFilterCommandInput,
  CreateFilterCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFilterCommandInput, CreateFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFilterCommandOutput> {
    return deserializeAws_json1_1CreateFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
