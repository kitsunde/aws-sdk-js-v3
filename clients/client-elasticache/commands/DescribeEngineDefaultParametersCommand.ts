import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeEngineDefaultParametersMessage, DescribeEngineDefaultParametersResult } from "../models/models_0";
import {
  deserializeAws_queryDescribeEngineDefaultParametersCommand,
  serializeAws_queryDescribeEngineDefaultParametersCommand,
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

export interface DescribeEngineDefaultParametersCommandInput extends DescribeEngineDefaultParametersMessage {}
export interface DescribeEngineDefaultParametersCommandOutput
  extends DescribeEngineDefaultParametersResult,
    __MetadataBearer {}

/**
 * <p>Returns the default engine and
 *             system parameter information for the specified cache engine.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeEngineDefaultParametersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeEngineDefaultParametersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngineDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEngineDefaultParametersCommand extends $Command<
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEngineDefaultParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeEngineDefaultParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEngineDefaultParametersMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEngineDefaultParametersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEngineDefaultParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEngineDefaultParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEngineDefaultParametersCommandOutput> {
    return deserializeAws_queryDescribeEngineDefaultParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
