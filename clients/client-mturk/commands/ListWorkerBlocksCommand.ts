import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListWorkerBlocksRequest, ListWorkerBlocksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListWorkerBlocksCommand,
  serializeAws_json1_1ListWorkerBlocksCommand,
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

export interface ListWorkerBlocksCommandInput extends ListWorkerBlocksRequest {}
export interface ListWorkerBlocksCommandOutput extends ListWorkerBlocksResponse, __MetadataBearer {}

/**
 * <p>The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkerBlocksCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkerBlocksCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListWorkerBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkerBlocksCommandInput} for command's `input` shape.
 * @see {@link ListWorkerBlocksCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListWorkerBlocksCommand extends $Command<
  ListWorkerBlocksCommandInput,
  ListWorkerBlocksCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkerBlocksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListWorkerBlocksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkerBlocksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkerBlocksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkerBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListWorkerBlocksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkerBlocksCommandOutput> {
    return deserializeAws_json1_1ListWorkerBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
