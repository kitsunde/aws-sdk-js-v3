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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { InviteMembersRequest, InviteMembersResponse } from "../models/models_0";
import { de_InviteMembersCommand, se_InviteMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link InviteMembersCommand}.
 */
export interface InviteMembersCommandInput extends InviteMembersRequest {}
/**
 * @public
 *
 * The output of {@link InviteMembersCommand}.
 */
export interface InviteMembersCommandOutput extends InviteMembersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Invites other Amazon Web Services accounts (created as members of the current Amazon Web Services account by
 *       CreateMembers) to enable GuardDuty, and allow the current Amazon Web Services account to view and manage
 *       these accounts' findings on their behalf as the GuardDuty administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, InviteMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, InviteMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // InviteMembersRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 *   DisableEmailNotification: true || false,
 *   Message: "STRING_VALUE",
 * };
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * // { // InviteMembersResponse
 * //   UnprocessedAccounts: [ // UnprocessedAccounts // required
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE", // required
 * //       Result: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param InviteMembersCommandInput - {@link InviteMembersCommandInput}
 * @returns {@link InviteMembersCommandOutput}
 * @see {@link InviteMembersCommandInput} for command's `input` shape.
 * @see {@link InviteMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 */
export class InviteMembersCommand extends $Command<
  InviteMembersCommandInput,
  InviteMembersCommandOutput,
  GuardDutyClientResolvedConfig
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
  constructor(readonly input: InviteMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InviteMembersCommandInput, InviteMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InviteMembersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "InviteMembersCommand";
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
  private serialize(input: InviteMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InviteMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InviteMembersCommandOutput> {
    return de_InviteMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
