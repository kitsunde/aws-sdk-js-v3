// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  ListGroupsRequest,
  ListGroupsRequestFilterSensitiveLog,
  ListGroupsResponse,
  ListGroupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListGroupsCommand,
  serializeAws_restJson1ListGroupsCommand,
} from "../protocols/Aws_restJson1";

export interface ListGroupsCommandInput extends ListGroupsRequest {}
export interface ListGroupsCommandOutput extends ListGroupsResponse, __MetadataBearer {}

/**
 * Retrieves a list of groups.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListGroupsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListGroupsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGroupsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class ListGroupsCommand extends $Command<
  ListGroupsCommandInput,
  ListGroupsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroupsCommandInput) {
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
  ): Handler<ListGroupsCommandInput, ListGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGroupsCommandOutput> {
    return deserializeAws_restJson1ListGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
