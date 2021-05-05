import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DescribeStandardsRequest, DescribeStandardsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DescribeStandardsCommand,
  serializeAws_restJson1DescribeStandardsCommand,
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

export interface DescribeStandardsCommandInput extends DescribeStandardsRequest {}
export interface DescribeStandardsCommandOutput extends DescribeStandardsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the available standards in Security Hub.</p>
 *          <p>For each standard, the results include the standard ARN, the name, and a description. </p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStandardsCommandInput} for command's `input` shape.
 * @see {@link DescribeStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeStandardsCommand extends $Command<
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStandardsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStandardsCommandInput, DescribeStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DescribeStandardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStandardsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStandardsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeStandardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStandardsCommandOutput> {
    return deserializeAws_restJson1DescribeStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
