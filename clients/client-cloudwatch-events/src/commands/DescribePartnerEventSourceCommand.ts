// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DescribePartnerEventSourceRequest, DescribePartnerEventSourceResponse } from "../models/models_0";
import { de_DescribePartnerEventSourceCommand, se_DescribePartnerEventSourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribePartnerEventSourceCommand}.
 */
export interface DescribePartnerEventSourceCommandInput extends DescribePartnerEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribePartnerEventSourceCommand}.
 */
export interface DescribePartnerEventSourceCommandOutput extends DescribePartnerEventSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>An SaaS partner can use this operation to list details about a partner event source that
 *       they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a>
 *       to see details about a partner event source that is
 *       shared with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribePartnerEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribePartnerEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DescribePartnerEventSourceRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribePartnerEventSourceResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePartnerEventSourceCommandInput - {@link DescribePartnerEventSourceCommandInput}
 * @returns {@link DescribePartnerEventSourceCommandOutput}
 * @see {@link DescribePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class DescribePartnerEventSourceCommand extends $Command<
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribePartnerEventSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePartnerEventSourceCommandInput, DescribePartnerEventSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePartnerEventSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DescribePartnerEventSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribePartnerEventSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePartnerEventSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePartnerEventSourceCommandOutput> {
    return de_DescribePartnerEventSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
