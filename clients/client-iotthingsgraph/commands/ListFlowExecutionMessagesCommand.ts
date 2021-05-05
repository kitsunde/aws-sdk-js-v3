import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { ListFlowExecutionMessagesRequest, ListFlowExecutionMessagesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListFlowExecutionMessagesCommand,
  serializeAws_json1_1ListFlowExecutionMessagesCommand,
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

export interface ListFlowExecutionMessagesCommandInput extends ListFlowExecutionMessagesRequest {}
export interface ListFlowExecutionMessagesCommandOutput extends ListFlowExecutionMessagesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of objects that contain information about events in a flow execution.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new ListFlowExecutionMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlowExecutionMessagesCommandInput} for command's `input` shape.
 * @see {@link ListFlowExecutionMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFlowExecutionMessagesCommand extends $Command<
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFlowExecutionMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFlowExecutionMessagesCommandInput, ListFlowExecutionMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "ListFlowExecutionMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFlowExecutionMessagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFlowExecutionMessagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFlowExecutionMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFlowExecutionMessagesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFlowExecutionMessagesCommandOutput> {
    return deserializeAws_json1_1ListFlowExecutionMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
