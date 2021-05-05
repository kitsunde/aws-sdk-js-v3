import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  ListSubscriptionDefinitionVersionsRequest,
  ListSubscriptionDefinitionVersionsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand,
  serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand,
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

export interface ListSubscriptionDefinitionVersionsCommandInput extends ListSubscriptionDefinitionVersionsRequest {}
export interface ListSubscriptionDefinitionVersionsCommandOutput
  extends ListSubscriptionDefinitionVersionsResponse,
    __MetadataBearer {}

/**
 * Lists the versions of a subscription definition.
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListSubscriptionDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListSubscriptionDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListSubscriptionDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscriptionDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSubscriptionDefinitionVersionsCommand extends $Command<
  ListSubscriptionDefinitionVersionsCommandInput,
  ListSubscriptionDefinitionVersionsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSubscriptionDefinitionVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSubscriptionDefinitionVersionsCommandInput, ListSubscriptionDefinitionVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListSubscriptionDefinitionVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSubscriptionDefinitionVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSubscriptionDefinitionVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSubscriptionDefinitionVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSubscriptionDefinitionVersionsCommandOutput> {
    return deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
