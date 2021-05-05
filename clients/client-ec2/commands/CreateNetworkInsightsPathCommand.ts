import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkInsightsPathRequest, CreateNetworkInsightsPathResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateNetworkInsightsPathCommand,
  serializeAws_ec2CreateNetworkInsightsPathCommand,
} from "../protocols/Aws_ec2";
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

export interface CreateNetworkInsightsPathCommandInput extends CreateNetworkInsightsPathRequest {}
export interface CreateNetworkInsightsPathCommandOutput extends CreateNetworkInsightsPathResult, __MetadataBearer {}

/**
 * <p>Creates a path to analyze for reachability.</p>
 *          <p>Reachability Analyzer enables you to analyze and debug network reachability between
 *           two resources in your virtual private cloud (VPC). For more information, see
 *           <a href="https://docs.aws.amazon.com/vpc/latest/reachability/">What is Reachability Analyzer</a>.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInsightsPathCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInsightsPathCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkInsightsPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkInsightsPathCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInsightsPathCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateNetworkInsightsPathCommand extends $Command<
  CreateNetworkInsightsPathCommandInput,
  CreateNetworkInsightsPathCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNetworkInsightsPathCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNetworkInsightsPathCommandInput, CreateNetworkInsightsPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkInsightsPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkInsightsPathRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNetworkInsightsPathResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNetworkInsightsPathCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateNetworkInsightsPathCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNetworkInsightsPathCommandOutput> {
    return deserializeAws_ec2CreateNetworkInsightsPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
