import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListRulesPackagesRequest, ListRulesPackagesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListRulesPackagesCommand,
  serializeAws_json1_1ListRulesPackagesCommand,
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

export interface ListRulesPackagesCommandInput extends ListRulesPackagesRequest {}
export interface ListRulesPackagesCommandOutput extends ListRulesPackagesResponse, __MetadataBearer {}

/**
 * <p>Lists all available Amazon Inspector rules packages.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListRulesPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link ListRulesPackagesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRulesPackagesCommand extends $Command<
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRulesPackagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListRulesPackagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRulesPackagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRulesPackagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRulesPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRulesPackagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRulesPackagesCommandOutput> {
    return deserializeAws_json1_1ListRulesPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
