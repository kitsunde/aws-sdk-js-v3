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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreateChannelMembershipRequest,
  CreateChannelMembershipResponse,
  CreateChannelMembershipResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateChannelMembershipCommand, se_CreateChannelMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateChannelMembershipCommand}.
 */
export interface CreateChannelMembershipCommandInput extends CreateChannelMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelMembershipCommand}.
 */
export interface CreateChannelMembershipCommandOutput extends CreateChannelMembershipResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the
 *          request header. A channel member can:</p>
 *          <ul>
 *             <li>
 *                <p>List messages</p>
 *             </li>
 *             <li>
 *                <p>Send messages</p>
 *             </li>
 *             <li>
 *                <p>Receive messages</p>
 *             </li>
 *             <li>
 *                <p>Edit their own messages</p>
 *             </li>
 *             <li>
 *                <p>Leave the channel</p>
 *             </li>
 *          </ul>
 *          <p>Privacy settings impact this action as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Public Channels: You do not need to be a member to list messages, but you must be
 *                a member to send messages.</p>
 *             </li>
 *             <li>
 *                <p>Private Channels: You must be a member to list or send messages.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateChannelMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateChannelMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateChannelMembershipRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   Type: "DEFAULT" || "HIDDEN", // required
 *   ChimeBearer: "STRING_VALUE",
 * };
 * const command = new CreateChannelMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelMembershipResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   Member: { // Identity
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelMembershipCommandInput - {@link CreateChannelMembershipCommandInput}
 * @returns {@link CreateChannelMembershipCommandOutput}
 * @see {@link CreateChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class CreateChannelMembershipCommand extends $Command<
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: CreateChannelMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelMembershipCommandInput, CreateChannelMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateChannelMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateChannelMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateChannelMembershipResponseFilterSensitiveLog,
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
  private serialize(input: CreateChannelMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateChannelMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelMembershipCommandOutput> {
    return de_CreateChannelMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
