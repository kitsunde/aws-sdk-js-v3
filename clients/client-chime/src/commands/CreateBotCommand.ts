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
  CreateBotRequest,
  CreateBotRequestFilterSensitiveLog,
  CreateBotResponse,
  CreateBotResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateBotCommand, se_CreateBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateBotCommand}.
 */
export interface CreateBotCommandInput extends CreateBotRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotCommand}.
 */
export interface CreateBotCommandOutput extends CreateBotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a bot for an Amazon Chime Enterprise account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateBotCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateBotCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateBotRequest
 *   AccountId: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
 * };
 * const command = new CreateBotCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotResponse
 * //   Bot: { // Bot
 * //     BotId: "STRING_VALUE",
 * //     UserId: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     BotType: "ChatBot",
 * //     Disabled: true || false,
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     BotEmail: "STRING_VALUE",
 * //     SecurityToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBotCommandInput - {@link CreateBotCommandInput}
 * @returns {@link CreateBotCommandOutput}
 * @see {@link CreateBotCommandInput} for command's `input` shape.
 * @see {@link CreateBotCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class CreateBotCommand extends $Command<
  CreateBotCommandInput,
  CreateBotCommandOutput,
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
  constructor(readonly input: CreateBotCommandInput) {
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
  ): Handler<CreateBotCommandInput, CreateBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBotResponseFilterSensitiveLog,
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
  private serialize(input: CreateBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBotCommandOutput> {
    return de_CreateBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
