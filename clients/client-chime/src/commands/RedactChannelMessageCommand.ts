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
import { RedactChannelMessageRequest, RedactChannelMessageResponse } from "../models/models_1";
import { de_RedactChannelMessageCommand, se_RedactChannelMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link RedactChannelMessageCommand}.
 */
export interface RedactChannelMessageCommandInput extends RedactChannelMessageRequest {}
/**
 * @public
 *
 * The output of {@link RedactChannelMessageCommand}.
 */
export interface RedactChannelMessageCommandOutput extends RedactChannelMessageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Redacts message content, but not metadata. The message exists in the back end, but the
 *          action returns null content, and the state shows as redacted.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RedactChannelMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RedactChannelMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // RedactChannelMessageRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MessageId: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE",
 * };
 * const command = new RedactChannelMessageCommand(input);
 * const response = await client.send(command);
 * // { // RedactChannelMessageResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RedactChannelMessageCommandInput - {@link RedactChannelMessageCommandInput}
 * @returns {@link RedactChannelMessageCommandOutput}
 * @see {@link RedactChannelMessageCommandInput} for command's `input` shape.
 * @see {@link RedactChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class RedactChannelMessageCommand extends $Command<
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
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
  constructor(readonly input: RedactChannelMessageCommandInput) {
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
  ): Handler<RedactChannelMessageCommandInput, RedactChannelMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RedactChannelMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "RedactChannelMessageCommand";
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
  private serialize(input: RedactChannelMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RedactChannelMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RedactChannelMessageCommandOutput> {
    return de_RedactChannelMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
