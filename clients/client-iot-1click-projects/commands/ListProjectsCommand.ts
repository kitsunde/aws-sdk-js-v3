import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { ListProjectsRequest, ListProjectsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListProjectsCommand,
  serializeAws_restJson1ListProjectsCommand,
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

export interface ListProjectsCommandInput extends ListProjectsRequest {}
export interface ListProjectsCommandOutput extends ListProjectsResponse, __MetadataBearer {}

/**
 * <p>Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, ListProjectsCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, ListProjectsCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListProjectsCommand extends $Command<
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProjectsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProjectsCommandInput, ListProjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "ListProjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProjectsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProjectsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProjectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProjectsCommandOutput> {
    return deserializeAws_restJson1ListProjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
