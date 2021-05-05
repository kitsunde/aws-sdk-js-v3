import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateMeetingRequest, CreateMeetingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMeetingCommand,
  serializeAws_restJson1CreateMeetingCommand,
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

export interface CreateMeetingCommandInput extends CreateMeetingRequest {}
export interface CreateMeetingCommandOutput extends CreateMeetingResponse, __MetadataBearer {}

/**
 * <p>
 * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
 * in the
 * <i>Amazon Chime Developer Guide</i>
 * . For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime Developer Guide</i>
 * .
 * </p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMeetingCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMeetingCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateMeetingCommand extends $Command<
  CreateMeetingCommandInput,
  CreateMeetingCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMeetingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMeetingCommandInput, CreateMeetingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateMeetingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMeetingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMeetingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMeetingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMeetingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMeetingCommandOutput> {
    return deserializeAws_restJson1CreateMeetingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
