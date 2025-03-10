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

import { GetImpersonationRoleRequest, GetImpersonationRoleResponse } from "../models/models_0";
import { de_GetImpersonationRoleCommand, se_GetImpersonationRoleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link GetImpersonationRoleCommand}.
 */
export interface GetImpersonationRoleCommandInput extends GetImpersonationRoleRequest {}
/**
 * @public
 *
 * The output of {@link GetImpersonationRoleCommand}.
 */
export interface GetImpersonationRoleCommandOutput extends GetImpersonationRoleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the impersonation role details for the given WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // GetImpersonationRoleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ImpersonationRoleId: "STRING_VALUE", // required
 * };
 * const command = new GetImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * // { // GetImpersonationRoleResponse
 * //   ImpersonationRoleId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Type: "FULL_ACCESS" || "READ_ONLY",
 * //   Description: "STRING_VALUE",
 * //   Rules: [ // ImpersonationRuleList
 * //     { // ImpersonationRule
 * //       ImpersonationRuleId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Effect: "ALLOW" || "DENY", // required
 * //       TargetUsers: [ // TargetUsers
 * //         "STRING_VALUE",
 * //       ],
 * //       NotTargetUsers: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   DateCreated: new Date("TIMESTAMP"),
 * //   DateModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetImpersonationRoleCommandInput - {@link GetImpersonationRoleCommandInput}
 * @returns {@link GetImpersonationRoleCommandOutput}
 * @see {@link GetImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link GetImpersonationRoleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
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
export class GetImpersonationRoleCommand extends $Command<
  GetImpersonationRoleCommandInput,
  GetImpersonationRoleCommandOutput,
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
  constructor(readonly input: GetImpersonationRoleCommandInput) {
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
  ): Handler<GetImpersonationRoleCommandInput, GetImpersonationRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetImpersonationRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetImpersonationRoleCommand";
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
  private serialize(input: GetImpersonationRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImpersonationRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImpersonationRoleCommandOutput> {
    return de_GetImpersonationRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
