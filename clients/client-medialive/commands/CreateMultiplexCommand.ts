import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateMultiplexRequest, CreateMultiplexResponse } from "../models/models_1";
import {
  deserializeAws_restJson1CreateMultiplexCommand,
  serializeAws_restJson1CreateMultiplexCommand,
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

export interface CreateMultiplexCommandInput extends CreateMultiplexRequest {}
export interface CreateMultiplexCommandOutput extends CreateMultiplexResponse, __MetadataBearer {}

/**
 * Create a new multiplex.
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreateMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMultiplexCommandInput} for command's `input` shape.
 * @see {@link CreateMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateMultiplexCommand extends $Command<
  CreateMultiplexCommandInput,
  CreateMultiplexCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMultiplexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMultiplexCommandInput, CreateMultiplexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "CreateMultiplexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMultiplexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMultiplexResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMultiplexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMultiplexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMultiplexCommandOutput> {
    return deserializeAws_restJson1CreateMultiplexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
