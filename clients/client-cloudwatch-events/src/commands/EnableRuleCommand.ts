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
import { EnableRuleRequest } from "../models/models_0";
import { de_EnableRuleCommand, se_EnableRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link EnableRuleCommand}.
 */
export interface EnableRuleCommandInput extends EnableRuleRequest {}
/**
 * @public
 *
 * The output of {@link EnableRuleCommand}.
 */
export interface EnableRuleCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Enables the specified rule. If the rule does not exist, the operation fails.</p>
 *
 *          <p>When you enable a rule, incoming events might not immediately start matching to a newly
 *       enabled rule. Allow a short period of time for changes to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, EnableRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, EnableRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // EnableRuleRequest
 *   Name: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 * };
 * const command = new EnableRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableRuleCommandInput - {@link EnableRuleCommandInput}
 * @returns {@link EnableRuleCommandOutput}
 * @see {@link EnableRuleCommandInput} for command's `input` shape.
 * @see {@link EnableRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ManagedRuleException} (client fault)
 *  <p>This rule was created by an Amazon Web Services service on behalf of your account. It is managed by that
 *       service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class EnableRuleCommand extends $Command<
  EnableRuleCommandInput,
  EnableRuleCommandOutput,
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
  constructor(readonly input: EnableRuleCommandInput) {
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
  ): Handler<EnableRuleCommandInput, EnableRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EnableRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "EnableRuleCommand";
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
  private serialize(input: EnableRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableRuleCommandOutput> {
    return de_EnableRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
