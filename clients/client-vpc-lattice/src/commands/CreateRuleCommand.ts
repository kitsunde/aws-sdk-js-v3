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

import { CreateRuleRequest, CreateRuleResponse } from "../models/models_0";
import { de_CreateRuleCommand, se_CreateRuleCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 *
 * The input for {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandInput extends CreateRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandOutput extends CreateRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a listener rule. Each listener has a default rule for checking connection requests,
 *    but you can define additional rules. Each rule consists of a priority, one or more actions, and
 *    one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the
 *     <i>Amazon VPC Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateRuleCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateRuleCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateRuleRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   listenerIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   match: { // RuleMatch Union: only one key present
 *     httpMatch: { // HttpMatch
 *       method: "STRING_VALUE",
 *       pathMatch: { // PathMatch
 *         match: { // PathMatchType Union: only one key present
 *           exact: "STRING_VALUE",
 *           prefix: "STRING_VALUE",
 *         },
 *         caseSensitive: true || false,
 *       },
 *       headerMatches: [ // HeaderMatchList
 *         { // HeaderMatch
 *           name: "STRING_VALUE", // required
 *           match: { // HeaderMatchType Union: only one key present
 *             exact: "STRING_VALUE",
 *             prefix: "STRING_VALUE",
 *             contains: "STRING_VALUE",
 *           },
 *           caseSensitive: true || false,
 *         },
 *       ],
 *     },
 *   },
 *   priority: Number("int"), // required
 *   action: { // RuleAction Union: only one key present
 *     forward: { // ForwardAction
 *       targetGroups: [ // WeightedTargetGroupList // required
 *         { // WeightedTargetGroup
 *           targetGroupIdentifier: "STRING_VALUE", // required
 *           weight: Number("int"),
 *         },
 *       ],
 *     },
 *     fixedResponse: { // FixedResponseAction
 *       statusCode: Number("int"), // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   match: { // RuleMatch Union: only one key present
 * //     httpMatch: { // HttpMatch
 * //       method: "STRING_VALUE",
 * //       pathMatch: { // PathMatch
 * //         match: { // PathMatchType Union: only one key present
 * //           exact: "STRING_VALUE",
 * //           prefix: "STRING_VALUE",
 * //         },
 * //         caseSensitive: true || false,
 * //       },
 * //       headerMatches: [ // HeaderMatchList
 * //         { // HeaderMatch
 * //           name: "STRING_VALUE", // required
 * //           match: { // HeaderMatchType Union: only one key present
 * //             exact: "STRING_VALUE",
 * //             prefix: "STRING_VALUE",
 * //             contains: "STRING_VALUE",
 * //           },
 * //           caseSensitive: true || false,
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   priority: Number("int"),
 * //   action: { // RuleAction Union: only one key present
 * //     forward: { // ForwardAction
 * //       targetGroups: [ // WeightedTargetGroupList // required
 * //         { // WeightedTargetGroup
 * //           targetGroupIdentifier: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     fixedResponse: { // FixedResponseAction
 * //       statusCode: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRuleCommandInput - {@link CreateRuleCommandInput}
 * @returns {@link CreateRuleCommandOutput}
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 */
export class CreateRuleCommand extends $Command<
  CreateRuleCommandInput,
  CreateRuleCommandOutput,
  VPCLatticeClientResolvedConfig
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
  constructor(readonly input: CreateRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VPCLatticeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRuleCommandInput, CreateRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "CreateRuleCommand";
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
  private serialize(input: CreateRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRuleCommandOutput> {
    return de_CreateRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
