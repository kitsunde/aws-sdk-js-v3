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

import { PutAccessControlRuleRequest, PutAccessControlRuleResponse } from "../models/models_0";
import { de_PutAccessControlRuleCommand, se_PutAccessControlRuleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link PutAccessControlRuleCommand}.
 */
export interface PutAccessControlRuleCommandInput extends PutAccessControlRuleRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessControlRuleCommand}.
 */
export interface PutAccessControlRuleCommandOutput extends PutAccessControlRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a new access control rule for the specified organization. The rule allows or
 *          denies access to the organization for the specified IPv4 addresses, access protocol
 *          actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces
 *          the older rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutAccessControlRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutAccessControlRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // PutAccessControlRuleRequest
 *   Name: "STRING_VALUE", // required
 *   Effect: "ALLOW" || "DENY", // required
 *   Description: "STRING_VALUE", // required
 *   IpRanges: [ // IpRangeList
 *     "STRING_VALUE",
 *   ],
 *   NotIpRanges: [
 *     "STRING_VALUE",
 *   ],
 *   Actions: [ // ActionsList
 *     "STRING_VALUE",
 *   ],
 *   NotActions: [
 *     "STRING_VALUE",
 *   ],
 *   UserIds: [ // UserIdList
 *     "STRING_VALUE",
 *   ],
 *   NotUserIds: [
 *     "STRING_VALUE",
 *   ],
 *   OrganizationId: "STRING_VALUE", // required
 *   ImpersonationRoleIds: [ // ImpersonationRoleIdList
 *     "STRING_VALUE",
 *   ],
 *   NotImpersonationRoleIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new PutAccessControlRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccessControlRuleCommandInput - {@link PutAccessControlRuleCommandInput}
 * @returns {@link PutAccessControlRuleCommandOutput}
 * @see {@link PutAccessControlRuleCommandInput} for command's `input` shape.
 * @see {@link PutAccessControlRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class PutAccessControlRuleCommand extends $Command<
  PutAccessControlRuleCommandInput,
  PutAccessControlRuleCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: PutAccessControlRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccessControlRuleCommandInput, PutAccessControlRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccessControlRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "PutAccessControlRuleCommand";
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
  private serialize(input: PutAccessControlRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAccessControlRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccessControlRuleCommandOutput> {
    return de_PutAccessControlRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
