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
  CreateMeetingRequest,
  CreateMeetingRequestFilterSensitiveLog,
  CreateMeetingResponse,
  CreateMeetingResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateMeetingCommand, se_CreateMeetingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateMeetingCommand}.
 */
export interface CreateMeetingCommandInput extends CreateMeetingRequest {}
/**
 * @public
 *
 * The output of {@link CreateMeetingCommand}.
 */
export interface CreateMeetingCommandOutput extends CreateMeetingResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see
 * <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
 * in the
 * <i>Amazon Chime SDK Developer Guide</i>
 * . For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime SDK Developer Guide</i>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMeetingCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateMeetingRequest
 *   ClientRequestToken: "STRING_VALUE", // required
 *   ExternalMeetingId: "STRING_VALUE",
 *   MeetingHostId: "STRING_VALUE",
 *   MediaRegion: "STRING_VALUE",
 *   Tags: [ // MeetingTagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NotificationsConfiguration: { // MeetingNotificationConfiguration
 *     SnsTopicArn: "STRING_VALUE",
 *     SqsQueueArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMeetingCommand(input);
 * const response = await client.send(command);
 * // { // CreateMeetingResponse
 * //   Meeting: { // Meeting
 * //     MeetingId: "STRING_VALUE",
 * //     ExternalMeetingId: "STRING_VALUE",
 * //     MediaPlacement: { // MediaPlacement
 * //       AudioHostUrl: "STRING_VALUE",
 * //       AudioFallbackUrl: "STRING_VALUE",
 * //       ScreenDataUrl: "STRING_VALUE",
 * //       ScreenSharingUrl: "STRING_VALUE",
 * //       ScreenViewingUrl: "STRING_VALUE",
 * //       SignalingUrl: "STRING_VALUE",
 * //       TurnControlUrl: "STRING_VALUE",
 * //       EventIngestionUrl: "STRING_VALUE",
 * //     },
 * //     MediaRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMeetingCommandInput - {@link CreateMeetingCommandInput}
 * @returns {@link CreateMeetingCommandOutput}
 * @see {@link CreateMeetingCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class CreateMeetingCommand extends $Command<
  CreateMeetingCommandInput,
  CreateMeetingCommandOutput,
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
  constructor(readonly input: CreateMeetingCommandInput) {
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
  ): Handler<CreateMeetingCommandInput, CreateMeetingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateMeetingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateMeetingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMeetingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMeetingResponseFilterSensitiveLog,
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
  private serialize(input: CreateMeetingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMeetingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMeetingCommandOutput> {
    return de_CreateMeetingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
