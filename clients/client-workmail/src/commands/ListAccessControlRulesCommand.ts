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

import { ListAccessControlRulesRequest, ListAccessControlRulesResponse } from "../models/models_0";
import { de_ListAccessControlRulesCommand, se_ListAccessControlRulesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link ListAccessControlRulesCommand}.
 */
export interface ListAccessControlRulesCommandInput extends ListAccessControlRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessControlRulesCommand}.
 */
export interface ListAccessControlRulesCommandOutput extends ListAccessControlRulesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the access control rules for the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListAccessControlRulesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListAccessControlRulesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // ListAccessControlRulesRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new ListAccessControlRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessControlRulesResponse
 * //   Rules: [ // AccessControlRulesList
 * //     { // AccessControlRule
 * //       Name: "STRING_VALUE",
 * //       Effect: "ALLOW" || "DENY",
 * //       Description: "STRING_VALUE",
 * //       IpRanges: [ // IpRangeList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotIpRanges: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Actions: [ // ActionsList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotActions: [
 * //         "STRING_VALUE",
 * //       ],
 * //       UserIds: [ // UserIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotUserIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateModified: new Date("TIMESTAMP"),
 * //       ImpersonationRoleIds: [ // ImpersonationRoleIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotImpersonationRoleIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessControlRulesCommandInput - {@link ListAccessControlRulesCommandInput}
 * @returns {@link ListAccessControlRulesCommandOutput}
 * @see {@link ListAccessControlRulesCommandInput} for command's `input` shape.
 * @see {@link ListAccessControlRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class ListAccessControlRulesCommand extends $Command<
  ListAccessControlRulesCommandInput,
  ListAccessControlRulesCommandOutput,
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
  constructor(readonly input: ListAccessControlRulesCommandInput) {
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
  ): Handler<ListAccessControlRulesCommandInput, ListAccessControlRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccessControlRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListAccessControlRulesCommand";
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
  private serialize(input: ListAccessControlRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAccessControlRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessControlRulesCommandOutput> {
    return de_ListAccessControlRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
