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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { RemoveTargetsRequest, RemoveTargetsResponse } from "../models/models_0";
import { de_RemoveTargetsCommand, se_RemoveTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RemoveTargetsCommand}.
 */
export interface RemoveTargetsCommandInput extends RemoveTargetsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveTargetsCommand}.
 */
export interface RemoveTargetsCommandOutput extends RemoveTargetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes the specified targets from the specified rule. When the rule is triggered, those
 *       targets are no longer be invoked.</p>
 *          <note>
 *             <p>A successful execution of <code>RemoveTargets</code> doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed.</p>
 *          </note>
 *          <p>When you remove a target, when the associated rule triggers, removed targets might
 *       continue to be invoked. Allow a short period of time for changes to take effect.</p>
 *          <p>This action can partially fail if too many requests are made at the same time. If that
 *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
 *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, RemoveTargetsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, RemoveTargetsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // RemoveTargetsRequest
 *   Rule: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 *   Ids: [ // TargetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   Force: true || false,
 * };
 * const command = new RemoveTargetsCommand(input);
 * const response = await client.send(command);
 * // { // RemoveTargetsResponse
 * //   FailedEntryCount: Number("int"),
 * //   FailedEntries: [ // RemoveTargetsResultEntryList
 * //     { // RemoveTargetsResultEntry
 * //       TargetId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RemoveTargetsCommandInput - {@link RemoveTargetsCommandInput}
 * @returns {@link RemoveTargetsCommandOutput}
 * @see {@link RemoveTargetsCommandInput} for command's `input` shape.
 * @see {@link RemoveTargetsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
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
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export class RemoveTargetsCommand extends $Command<
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
  EventBridgeClientResolvedConfig
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
  constructor(readonly input: RemoveTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTargetsCommandInput, RemoveTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RemoveTargetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "RemoveTargetsCommand";
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
  private serialize(input: RemoveTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveTargetsCommandOutput> {
    return de_RemoveTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
