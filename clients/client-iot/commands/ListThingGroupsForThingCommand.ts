import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingGroupsForThingRequest, ListThingGroupsForThingResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListThingGroupsForThingCommand,
  serializeAws_restJson1ListThingGroupsForThingCommand,
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

export interface ListThingGroupsForThingCommandInput extends ListThingGroupsForThingRequest {}
export interface ListThingGroupsForThingCommandOutput extends ListThingGroupsForThingResponse, __MetadataBearer {}

/**
 * <p>List the thing groups to which the specified thing belongs.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingGroupsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingGroupsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingGroupsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingGroupsForThingCommandInput} for command's `input` shape.
 * @see {@link ListThingGroupsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListThingGroupsForThingCommand extends $Command<
  ListThingGroupsForThingCommandInput,
  ListThingGroupsForThingCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListThingGroupsForThingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThingGroupsForThingCommandInput, ListThingGroupsForThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingGroupsForThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThingGroupsForThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListThingGroupsForThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThingGroupsForThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThingGroupsForThingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThingGroupsForThingCommandOutput> {
    return deserializeAws_restJson1ListThingGroupsForThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
