import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBParameterGroupsMessage, DescribeDBParameterGroupsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBParameterGroupsCommand,
  serializeAws_queryDescribeDBParameterGroupsCommand,
} from "../protocols/Aws_query";
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

export interface DescribeDBParameterGroupsCommandInput extends DescribeDBParameterGroupsMessage {}
export interface DescribeDBParameterGroupsCommandOutput extends DBParameterGroupsMessage, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBParameterGroup</code> descriptions. If a
 *       <code>DBParameterGroupName</code> is specified, the list will contain only the description of
 *       the specified DB parameter group.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBParameterGroupsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBParameterGroupsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBParameterGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDBParameterGroupsCommand extends $Command<
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBParameterGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBParameterGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBParameterGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBParameterGroupsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBParameterGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBParameterGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBParameterGroupsCommandOutput> {
    return deserializeAws_queryDescribeDBParameterGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
